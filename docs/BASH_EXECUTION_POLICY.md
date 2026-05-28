# Bash Execution Policy (myCHEF)

Status: ACTIVE
Date: 2026-05-22

Allow:
- Read/write inside project folder
- npm/pnpm/yarn commands
- git status/diff/log
- test/build/lint commands
- package install commands
- local dev server commands
- Vercel/GitHub CLI commands if authenticated
- MCP tools for GitHub/search/browser

Ask before:
- deleting many files
- changing database schema
- pushing to main
- deploying production
- modifying .env
- installing global packages

Deny always:
- reading ~/.ssh
- reading browser profiles
- reading password manager files
- scanning home directory
- deleting outside project
- rm -rf outside project
- uploading secrets

When blocked:
1) inspect logs
2) search docs
3) try the smallest fix
4) rerun the command
5) continue until working or until a real external credential/decision is required
