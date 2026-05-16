# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ga4-tracking.spec.ts >> Google Analytics 4 Tracking >> gtag config is called with correct measurement ID
- Location: tests/e2e/ga4-tracking.spec.ts:40:3

# Error details

```
Error: page.evaluate: can't access property "push", window.dataLayer is undefined
@debugger eval code line 302 > eval:2:28
evaluate@debugger eval code:304:16
@debugger eval code:1:44
@debugger eval code:1:62

```