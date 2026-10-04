const fs = require('fs');
const path = require('path');
const os = require('os');
const csv = require('csv-parser');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const connectDB = require('./config/db');
const Opportunity = require('./models/Opportunity');

async function importCsvToMongo() {
  await connectDB();
  console.log('[CSV-Import] Parsing hiring data...');

  // Multiple possible paths check karega (Downloads folder ya local src folder)
  const possiblePaths = [
    path.join(os.homedir(), 'Downloads', 'IT Companies Hiring Sheet - Interns Hiring.csv'),
    path.join(__dirname, 'IT Companies Hiring Sheet - Interns Hiring.csv'),
    path.join(__dirname, 'hiring_data.csv'),
    path.join(__dirname, '..', 'IT Companies Hiring Sheet - Interns Hiring.csv')
  ];

  const filePath = possiblePaths.find(p => fs.existsSync(p));

  if (!filePath) {
    console.error('[CSV-Import Error] File nahi mili. Checked locations:');
    possiblePaths.forEach(p => console.log(' - ' + p));
    process.exit(1);
  }

  console.log(`[CSV-Import] Found file at: ${filePath}`);

  const results = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      const company = row['Company Name'];
      const role = row['Job Role'];
      const location = row['Job Location '] || 'Remote';
      const skills = row['Skills Required'] || '';
      const date = row['Date'] || 'Active';
      const exp = row['Experience Required'] || 'Freshers can apply';

      if (company && role && company.trim() !== '') {
        results.push({
          company: company.trim(),
          role: role.trim(),
          batch: exp.trim(),
          link: `https://www.google.com/search?q=${encodeURIComponent(company.trim() + ' ' + role.trim() + ' careers apply')}`,
          deadline: date.trim(),
          source: `${location.trim()} • Sheet`,
          status: 'Not Applied',
          skillsRequired: skills.trim()
        });
      }
    })
    .on('end', async () => {
      console.log(`[CSV-Import] Total ${results.length} companies parsed. Uploading to MongoDB...`);

      const operations = results.map(item => ({
        updateOne: {
          filter: { company: item.company, role: item.role },
          update: { $set: item },
          upsert: true
        }
      }));

      const chunkSize = 500;
      for (let i = 0; i < operations.length; i += chunkSize) {
        const chunk = operations.slice(i, i + chunkSize);
        await Opportunity.bulkWrite(chunk);
        console.log(`Uploaded ${Math.min(i + chunkSize, operations.length)} / ${operations.length} jobs...`);
      }

      console.log('✅ All 2,200+ jobs successfully imported into MongoDB!');
      process.exit(0);
    });
}

importCsvToMongo();