# SHARIF AI — Gemini Chat starter

This is a Vercel deployment with a real server-side Gemini chat endpoint.

## Before deploying
1. Create a Gemini API key in Google AI Studio: https://aistudio.google.com/app/apikey
2. Keep the key private. Never paste it into `app.js`, `index.html`, or a public GitHub repository.
3. Deploy this project to Vercel, preserving the `/api/chat.js` folder structure.
4. In Vercel open Project → Settings → Environment Variables and add:
   - Name: `GEMINI_API_KEY`
   - Value: your Gemini API key
   - Environment: Production (also Preview if desired)
5. Save and redeploy. Vercel environment variable changes apply to new deployments.

Optional variable:
- `GEMINI_MODEL` = `gemini-2.5-flash` (default)

## Important limitations
- This starter enables text chat only. Other tool cards are prompts/ideas, not active image/video generators.
- Login, persistent accounts, database-backed daily quotas, bKash payments, and Pro subscriptions are not implemented.
- Do not advertise unlimited public access. The Gemini free tier has model-specific rate limits and may change. Monitor usage in Google AI Studio.
- For a public paid service, add authentication, durable per-user/IP rate limits, abuse protection, spending alerts, privacy disclosures, and payment verification before launch.
- Free-tier API data handling differs from paid-tier handling; review Google's current Gemini API terms and pricing before processing private user data.
