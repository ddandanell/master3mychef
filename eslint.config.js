import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // .worktrees holds full checkouts of other branches (7 of them, ~2,435 .ts/.tsx
  // files as of 2026-07-30). It is gitignored, so CI never sees it — but locally
  // `eslint .` was linting the whole codebase eight times over, taking minutes and
  // reporting errors from other branches as though they were current. That made
  // `pnpm lint` unusable as a pre-commit habit and hid the real result.
  globalIgnores(['dist', '.worktrees']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // Honour the leading-underscore convention the codebase already uses for
      // intentionally-unused values. Without this, deliberately-kept signatures
      // are reported as errors — e.g. aggregateRatingSchema(_ratingValue,
      // _reviewCount) in SeoHead.tsx, whose args are kept on purpose (see the
      // note above it about self-serving AggregateRating being rejected by
      // Search Console), and _serviceType in StickyMobileCTA.tsx.
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }],

      // Downgraded from error to warning on 2026-07-30.
      //
      // This rule only affects Vite's dev-time Fast Refresh: when a module
      // exports something other than a component, editing it triggers a full
      // page reload instead of a hot update. It has no effect on the production
      // bundle whatsoever.
      //
      // All 28 violations were in 4 files, and every one is an idiomatic pattern
      // rather than a mistake:
      //   SeoHead.tsx (23)      component plus the JSON-LD schema builders it
      //                         belongs with; splitting them would touch every
      //                         import site to buy nothing at runtime
      //   AllInPrice.tsx (3)    component plus its price helpers
      //   ui/button.tsx (1)     shadcn/ui's canonical `buttonVariants` export
      //   UniverseContext (1)   provider plus its hook — the standard React
      //                         context shape
      //
      // Left as a warning rather than switched off, so genuinely careless cases
      // still surface. Errors nobody intends to fix only teach people to ignore
      // the linter.
      'react-refresh/only-export-components': 'warn',
    },
  },
])
