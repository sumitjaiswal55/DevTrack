const axios = require('axios');
const cheerio = require('cheerio');
const cron = require('node-cron');
const Opportunity = require('../models/Opportunity');

// HTML Export format - Jo underlying hyperlinks (<a href="...">) ko retain rakhta hai
const SHEET_HTML_URL = 'https://docs.google.com/spreadsheets/d/1a0_P5Wcf3YTePSlqoxP9fPldDEFyMrW1pFKxF3Xin34/export?format=html&gid=1616544766';

async function syncAllJobSources() {
  console.log('[Job-Radar] Fetching opportunities from Google Sheet (HTML Mode)...');

  try {
    const { data: html } = await axios.get(SHEET_HTML_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 20000
    });

    const $ = cheerio.load(html);
    const jobs = [];

    // Table rows parse karein
    $('table tbody tr').each((rowIndex, row) => {
      // Header row skip karein
      if (rowIndex <= 1) return;

      const cells = $(row).find('td');
      if (cells.length < 4) return;

      const date = $(cells[0]).text().trim();
      const company = $(cells[1]).text().trim();
      const role = $(cells[2]).text().trim();
      
      // Actual URL anchor tag ke href se nikaalein
      const linkTag = $(cells[3]).find('a');
      let link = linkTag.attr('href') || '#';

      // Google redirect link ko clean karein (agar q= parametr ho)
      if (link.includes('google.com/url?q=')) {
        link = decodeURIComponent(link.split('google.com/url?q=')[1].split('&')[0]);
      }

      const location = $(cells[4]).text().trim() || 'Remote';
      const experience = $(cells[5]).text().trim() || 'Freshers can apply';
      const skills = $(cells[6]).text().trim() || '';

      if (company && role && company.toLowerCase() !== 'company name') {
        jobs.push({
          company,
          role,
          batch: experience,
          link,
          deadline: date || 'Active',
          source: location ? `${location} • Premium Sheet` : 'Paid Premium Sheet',
          status: 'Not Applied',
          skillsRequired: skills
        });
      }
    });

    if (jobs.length === 0) {
      console.log('[Job-Radar] No jobs parsed. Check if table layout changed.');
      return;
    }

    // MongoDB Bulk Upsert (Duplicate prevent karega)
    const operations = jobs.map((item) => ({
      updateOne: {
        filter: { company: item.company, role: item.role },
        update: {
          $set: {
            company: item.company,
            role: item.role,
            batch: item.batch,
            link: item.link,
            deadline: item.deadline,
            source: item.source,
            status: item.status,
            skillsRequired: item.skillsRequired,
            lastCheckedAt: new Date()
          }
        },
        upsert: true
      }
    }));

    const result = await Opportunity.bulkWrite(operations);
    console.log(`[Job-Radar] Successfully synced ${jobs.length} jobs! (New: ${result.upsertedCount}, Updated: ${result.modifiedCount})`);

  } catch (error) {
    console.error('[Job-Radar Error]:', error.message);
  }
}

// Har 20 minute me automatic sync
function startJobScheduler() {
  syncAllJobSources();

  cron.schedule('*/20 * * * *', () => {
    console.log('[Job-Radar] 20-minute cycle triggered.');
    syncAllJobSources();
  });
}

module.exports = { startJobScheduler, syncAllJobSources };