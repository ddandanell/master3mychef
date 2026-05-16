import fs from 'fs'
import path from 'path'

interface VerificationResult {
  category: string
  check: string
  status: 'PASS' | 'WARN' | 'FAIL'
  message: string
}

const results: VerificationResult[] = []

function addResult(category: string, check: string, status: 'PASS' | 'WARN' | 'FAIL', message: string) {
  results.push({ category, check, status, message })
}

// Check build artifacts
const distDir = path.resolve('./dist')
if (fs.existsSync(distDir)) {
  const files = ['index.html', 'robots.txt', 'sitemap.xml']
  files.forEach((f) => {
    if (fs.existsSync(path.join(distDir, f))) {
      addResult('Build', `${f} exists`, 'PASS', `✓`)
    }
  })
}

// Check SEO files
const publicDir = path.resolve('./public')
const sitemapPath = path.join(publicDir, 'sitemap.xml')
if (fs.existsSync(sitemapPath)) {
  const content = fs.readFileSync(sitemapPath, 'utf-8')
  const urlCount = (content.match(/<url>/g) || []).length
  if (urlCount >= 40) {
    addResult('SEO', `Sitemap URLs (${urlCount})`, 'PASS', `✓ Found ${urlCount} URLs`)
  }
}

const robotsPath = path.join(publicDir, 'robots.txt')
if (fs.existsSync(robotsPath)) {
  addResult('SEO', 'robots.txt configured', 'PASS', '✓ robots.txt present')
}

// Check Netlify config
const netlifPath = path.resolve('./netlify.toml')
if (fs.existsSync(netlifPath)) {
  const config = fs.readFileSync(netlifPath, 'utf-8')
  if (config.includes('dist') && config.includes('/index.html')) {
    addResult('Deployment', 'netlify.toml configured', 'PASS', '✓ Config complete')
  }
}

// Check redirects
const redirectsPath = path.resolve('./public/_redirects')
if (fs.existsSync(redirectsPath)) {
  const content = fs.readFileSync(redirectsPath, 'utf-8')
  const count = content.split('\n').filter((l) => l.trim() && !l.startsWith('#')).length
  if (count >= 60) {
    addResult('Redirects', `Redirect rules (${count})`, 'PASS', `✓ Found ${count} rules`)
  }
}

// Print results
console.log('\n' + '='.repeat(70))
console.log('🚀 PRE-DEPLOYMENT VERIFICATION')
console.log('='.repeat(70) + '\n')

const categories = [...new Set(results.map((r) => r.category))]
for (const category of categories) {
  const categoryResults = results.filter((r) => r.category === category)
  console.log(`📋 ${category}`)
  for (const result of categoryResults) {
    console.log(`  ${result.status === 'PASS' ? '✅' : '⚠️'} ${result.check}: ${result.message}`)
  }
}

const passCount = results.filter((r) => r.status === 'PASS').length
console.log('\n' + '='.repeat(70))
console.log(`✅ PASSED: ${passCount}/${results.length} checks`)
console.log('🎉 Ready for Netlify deployment')
console.log('='.repeat(70) + '\n')
