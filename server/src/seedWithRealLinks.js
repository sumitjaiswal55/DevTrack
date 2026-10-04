const path = require('path');
const axios = require('axios');
const XLSX = require('xlsx');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const connectDB = require('./config/db');
const Opportunity = require('./models/Opportunity');

// Google Sheet ka XLSX export URL (Hyperlinks preserve rehte hain)
const SHEET_XLSX_URL = 'https://docs.google.com/spreadsheets/d/1a0_P5Wcf3YTePSlqoxP9fPldDEFyMrW1pFKxF3Xin34/export?format=xlsx&gid=1616544766';

async function fetchRealLinksAndSeed() {
  await connectDB();
  console.log('[Link-Extractor] Google Sheet se Excel file download ho rahi hai...');

  try {
    const response = await axios.get(SHEET_XLSX_URL, {
      responseType: 'arraybuffer',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      },
      timeout: 30000
    });

    console.log('[Link-Extractor] File downloaded! Parsing hyperlinks...');
    const workbook = XLSX.read(response.data, { type: 'buffer' });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];

    // Range determine karein
    const range = XLSX.utils.decode_range(worksheet['!ref']);
    const jobs = [];

    // Row 0 header hai, data Row 1 ya 2 se start hota hai
    for (let R = 1; R <= range.e.r; ++R) {
      // Columns:
      // A (0): Date, B (1): Company Name, C (2): Job Role, D (3): Source link page, E (4): Location, F (5): Experience, G (6): Skills
      const companyCell = worksheet[XLSX.utils.encode_cell({ r: R, c: 1 })];
      const roleCell = worksheet[XLSX.utils.encode_cell({ r: R, c: 2 })];
      const linkCell = worksheet[XLSX.utils.encode_cell({ r: R, c: 3 })];
      const dateCell = worksheet[XLSX.utils.encode_cell({ r: R, c: 0 })];
      const locationCell = worksheet[XLSX.utils.encode_cell({ r: R, c: 4 })];
      const expCell = worksheet[XLSX.utils.encode_cell({ r: R, c: 5 })];
      const skillsCell = worksheet[XLSX.utils.encode_cell({ r: R, c: 6 })];

      const company = companyCell ? String(companyCell.v).trim() : '';
      const role = roleCell ? String(roleCell.v).trim() : '';

      if (!company || company.toLowerCase() === 'company name') continue;

      // Asli URL extract karein:
      let actualUrl = '#';
      if (linkCell) {
        // 1. Agar cell me direct hyperlink metadata attach hai
        if (linkCell.l && linkCell.l.Target) {
          actualUrl = linkCell.l.Target;
        } 
        // 2. Agar =HYPERLINK("https://...", "Link") formula hai
        else if (linkCell.f && linkCell.f.includes('HYPERLINK(')) {
          const match = linkCell.f.match(/HYPERLINK\("([^"]+)"/i);
          if (match && match[1]) {
            actualUrl = match[1];
          }
        } 
        // 3. Agar direct URL value hai
        else if (linkCell.v && String(linkCell.v).startsWith('http')) {
          actualUrl = String(linkCell.v).trim();
        }
      }

      // Google redirect wrap clean karein (agar maujood ho)
      if (actualUrl.includes('google.com/url?q=')) {
        actualUrl = decodeURIComponent(actualUrl.split('google.com/url?q=')[1].split('&')[0]);
      }

      jobs.push({
        company,
        role,
        batch: expCell ? String(expCell.v).trim() : 'Freshers can apply',
        link: actualUrl !== '#' ? actualUrl : `https://www.google.com/search?q=${encodeURIComponent(company + ' ' + role + ' careers apply')}`,
        deadline: dateCell ? String(dateCell.v).trim() : 'Active',
        source: locationCell ? `${String(locationCell.v).trim()} • Sheet` : 'Paid Sheet',
        status: 'Not Applied',
        skillsRequired: skillsCell ? String(skillsCell.v).trim() : ''
      });
    }

    console.log(`[Link-Extractor] Total ${jobs.length} jobs with actual URLs parsed. Updating MongoDB...`);

    const operations = jobs.map((item) => ({
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
      console.log(`Updated ${Math.min(i + chunkSize, operations.length)} / ${operations.length} records...`);
    }

    console.log('✅ Real application links successfully updated in MongoDB!');
    process.exit(0);

  } catch (error) {
    console.error('[Link-Extractor Error]:', error.message);
    process.exit(1);
  }
}

fetchRealLinksAndSeed();