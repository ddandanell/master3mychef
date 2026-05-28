#!/usr/bin/env tsx
/**
 * Submit URLs to Google Search Console Indexing API
 * 
 * Submits all 18 prerendered pages to GSC for re-indexing.
 * Requires Google Search Console API credentials.
 * 
 * Usage:
 *   npx tsx scripts/submit-to-gsc.ts
 * 
 * Prerequisites:
 *   1. Enable Search Console API in Google Cloud Console
 *   2. Create service account with Search Console access
 *   3. Download JSON key file
 *   4. Set GOOGLE_APPLICATION_CREDENTIALS env var
 */

import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITE_URL = 'https://mychef.id';

// All 18 prerendered pages
const URLS_TO_SUBMIT = [
  '/',
  '/fine-dining',
  '/catering',
  '/events',
  '/events/villa-parties',
  '/events/weddings-bali',
  '/fine-dining/private-chef-bali',
  '/faq',
  '/pricing',
  '/chefs',
  '/about',
  '/contact',
  '/seminyak',
  '/canggu',
  '/ubud',
  '/uluwatu',
  '/nusa-dua',
  '/jimbaran',
];

interface SubmitResult {
  url: string;
  status: 'success' | 'error' | 'skipped';
  message: string;
}

async function submitToGSC(): Promise<void> {
  console.log('🚀 Google Search Console Indexing API Submission\n');

  // Check for credentials
  const credPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (!credPath) {
    console.error('❌ GOOGLE_APPLICATION_CREDENTIALS not set');
    console.error('\nTo use GSC Indexing API:');
    console.error('1. Go to https://console.cloud.google.com/apis/library/indexing.googleapis.com');
    console.error('2. Enable "Web Search Indexing API"');
    console.error('3. Create service account with Search Console Owner permission');
    console.error('4. Download JSON key file');
    console.error('5. Export GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json');
    console.error('\nAlternative: Manual submission via GSC UI');
    console.error('https://search.google.com/search-console/index/drilldown?resource_id=sc-domain:mychef.id');
    process.exit(1);
  }

  if (!fs.existsSync(credPath)) {
    console.error(`❌ Credentials file not found: ${credPath}`);
    process.exit(1);
  }

  console.log(`✅ Using credentials: ${credPath}\n`);

  try {
    // Initialize Google Auth
    const auth = new google.auth.GoogleAuth({
      keyFile: credPath,
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const authClient = await auth.getClient();
    const indexing = google.indexing({ version: 'v3', auth: authClient as any });

    const results: SubmitResult[] = [];

    // Submit each URL
    for (const urlPath of URLS_TO_SUBMIT) {
      const fullUrl = `${SITE_URL}${urlPath === '/' ? '' : urlPath}`;
      
      try {
        console.log(`📤 Submitting: ${fullUrl}`);
        
        const response = await indexing.urlNotifications.publish({
          requestBody: {
            url: fullUrl,
            type: 'URL_UPDATED',
          },
        });

        results.push({
          url: fullUrl,
          status: 'success',
          message: 'Submitted successfully',
        });

        console.log(`✅ Success: ${fullUrl}`);
        
        // Rate limiting: wait 200ms between requests
        await new Promise(resolve => setTimeout(resolve, 200));
        
      } catch (error: any) {
        const message = error?.message || String(error);
        results.push({
          url: fullUrl,
          status: 'error',
          message,
        });
        console.error(`❌ Error: ${fullUrl} - ${message}`);
      }
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 Submission Summary\n');
    
    const successCount = results.filter(r => r.status === 'success').length;
    const errorCount = results.filter(r => r.status === 'error').length;
    
    console.log(`✅ Success: ${successCount}/${URLS_TO_SUBMIT.length}`);
    console.log(`❌ Errors:  ${errorCount}/${URLS_TO_SUBMIT.length}`);
    
    if (errorCount > 0) {
      console.log('\n❌ Failed URLs:');
      results
        .filter(r => r.status === 'error')
        .forEach(r => console.log(`  - ${r.url}: ${r.message}`));
    }

    // Save detailed results
    const reportPath = path.join(__dirname, '../reports/gsc-submission-results.json');
    fs.writeFileSync(
      reportPath,
      JSON.stringify({
        timestamp: new Date().toISOString(),
        site: SITE_URL,
        totalUrls: URLS_TO_SUBMIT.length,
        successCount,
        errorCount,
        results,
      }, null, 2)
    );
    
    console.log(`\n📄 Detailed results saved: ${reportPath}`);
    console.log('\n✅ GSC submission complete!');
    console.log('\nNext steps:');
    console.log('1. Wait 24-48 hours for Google to recrawl');
    console.log('2. Monitor GSC → Coverage report');
    console.log('3. Check "Discovered - currently not indexed" status');
    console.log('4. Verify prerendered HTML is being served at https://mychef.id');
    
  } catch (error: any) {
    console.error('\n❌ Fatal error:', error?.message || String(error));
    process.exit(1);
  }
}

// Run
submitToGSC().catch((error) => {
  console.error('Unhandled error:', error);
  process.exit(1);
});
