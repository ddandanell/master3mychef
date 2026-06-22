# Hermes Configuration Update - 2026-05-18 10:55 WITA

## COMPLETED CHANGES

### 1. ✅ Disabled Problematic MCP Servers

**Disabled the following to prevent Chrome/Google API issues:**
- `chrome-devtools` - Chrome automation causing browser job failures
- `google-news-trends-mcp` - Google API dependency
- `gsc` (Google Search Console) - Google API dependency  
- `search-console-mcp` - Google API dependency

**Kept active MCP servers:**
- `playwright` - Local browser automation (no Google API)
- `yfinance` - Financial data
- `perplexity` - Search without Google
- `supabase` - Database operations
- `meta-ads` - Meta advertising
- `gemini` - Google Gemini (via direct API, not Search Console)
- `filesystem` - File operations
- `elevenlabs` - Text-to-speech

### 2. ✅ Configured Cheapest Model for All Cron Jobs

**Model:** `deepseek/deepseek-chat` via OpenRouter  
**Cost:** ~$0.14 per 1M input tokens, ~$0.28 per 1M output tokens  
**Reason:** Cheapest reliable model for GitHub coding automation

**Updated all 5 cron jobs:**
1. **Daily project controller check** (6cec87a86958) - 08:00 daily
2. **myCHEF Daily Project Controller** (cf7e4658ab84) - 08:00 daily  
3. **myCHEF Minute Control Check** (0cddf3bbe389) - every 1 minute
4. **myCHEF Auto Project Manager** (867ee4c924f2) - every 10 minutes
5. **myCHEF Background Session Watchdog** (f817af059ae4) - every 5 minutes

### 3. ✅ Backup Created

**Backup location:** `~/.hermes/config.yaml.backup-20260518-105526`

### 4. ✅ Configuration Validated

Config check passed - version 23, all settings valid.

## WHAT THIS FIXES

### Chrome/Google API Issues
- No more Chrome DevTools automation failures
- No more Google Search Console API errors
- No more "Chrome jobs mistake" errors
- Playwright still available for local browser testing when needed

### Cost Optimization
All GitHub coding automation now uses DeepSeek Chat:
- **Previous cost estimate:** $2-15 per 1M tokens (depending on model used)
- **New cost:** $0.14-0.28 per 1M tokens
- **Savings:** ~90-98% reduction in automation costs

## TELEGRAM LOGGING

Your Telegram channel will now receive cron job updates using the cheapest model. All automation messages will come from DeepSeek running on OpenRouter.

## NEXT STEPS

1. Wait for next cron run to verify DeepSeek model works correctly
2. Monitor Telegram for automation messages  
3. If any cron job fails, check logs: `hermes cronjob list`
4. Can manually test with: `hermes cronjob run --job-id <job_id>`

## ROLLBACK (If Needed)

If anything breaks, restore the backup:

```bash
cp ~/.hermes/config.yaml.backup-20260518-105526 ~/.hermes/config.yaml
hermes config check
```

Then manually reset each cron job model back to default (or pause them).

---

**Status:** ✅ COMPLETE - All changes applied and validated.
