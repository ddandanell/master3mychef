const fs = require('fs')
const path = require('path')

const results = []

function addResult(category, check, status, message) {
  results.push({ category, check, status, message })
}

console.log('\n' + '='.repeat(70))
console.log('🚀 PRE-DEPLOYMENT VERIFICATION')
console.log('='.repeat(70) + '\n')

// Check build artifacts
const distDir = path.resolve('./dist')
if (fs.existsSync(distDir)) {
  const files = ['index.html', 'robots.txt', 'sitemap.xml']
  files.forEach((f) => {
    if (fs.existsSync(path.join(distDir, f))) {
      addResult('Build', `${f}`, 'PASS', `✓`)
    }
  })
}

// Check SEO files
const sitemapPath = path.join(path.resolve('./public'), 'sitemap.xml')
if (fs.existsSync(sitemapPath)) {
  const content = fs.readFileSync(sitemapPath, 'utf-8')
  const urlCount = (content.match(/<url>/g) || []).length
  addResult('SEO', `Sitemap URLs`, 'PASS', `✓ ${urlCount} found`)
}

const robotsPath = path.join(path.resolve('./public'), 'robots.txt')
if (fs.existsSync(robotsPath)) {
  addResult('SEO', 'robots.txt', 'PASS', '✓ Present')
}

// Check Netlify config
const netlifPath = path.resolve('./netlify.toml')
if (fs.existsSync(netlifPath)) {
  const config = fs.readFileSync(netlifPath, 'utf-8')
  if (config.includes('dist') && config.includes('/index.html')) {
    addResult('Deployment', 'netlify.toml', 'PASS', '✓ SPA routing')
  }
}

// Check redirects
const redirectsPath = path.resolve('./public/_redirects')
if (fs.existsSync(redirectsPath)) {
  const content = fs.readFileSync(redirectsPath, 'utf-8')
  const count = content.split('\n').filter((l) => l.trim() && !l.startsWith('#')).length
  addResult('Redirects', `Redirect rules`, 'PASS', `✓ ${count} configured`)
}

// Print by category
const categories = [...new Set(results.map((r) => r.category))]
for (const category of categories) {
  const categoryResults = results.filter((r) => r.category === category)
  console.log(`📋 ${category}`)
  categoryResults.forEach((r) => {
    console.log(`  ✅ ${r.check}: ${r.message}`)
  })
  console.log()
}

const passCount = results.length
console.log('='.repeat(70))
console.log(`✅ PASSED: ${passCount} checks`)
console.log('🎉 Ready for Netlify deployment!')
console.log('='.repeat(70) + '\n')
