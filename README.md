# Wick's World

Public website for Wick's World, the trading name of W's Creative Studios Ltd, a creative studio and production house in Lagos, Nigeria.

The site is a business presentation, not a portfolio gallery. Selected work is shown as capability studies with editorial placeholders until commissioned frames are cleared for the archive.

## Stack

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Newsreader and Geist via next/font, Vercel Analytics, optional Resend email.

## Setup

Use the scripts in package.json: dev, typecheck, build, lint. Copy .env.example to .env.local for local env. Open the app on port 3000.

## Environment

See .env.example.

NEXT_PUBLIC_SITE_URL is the canonical origin for metadata, sitemap, robots, and Open Graph. No trailing slash.

CONTACT_EMAIL and RESEND_API_KEY are optional. Enquiry emails send only when both are set. Otherwise valid submissions are written to .data/leads.json and the form does not claim that an email was sent.

.data is for local persistence. Do not commit live leads.

## Content

Copy lives in TypeScript modules under src/content/. Edit those files rather than hard-coding pages: site, home, about, services, solutions, work, process, journal, faq, legal.

Do not invent clients, testimonials, phone numbers, street addresses, performance stats, TikTok, or YouTube.

## Routes

Home, services, services slug, solutions, solutions slug, about, work, work slug, process, journal, journal slug, contact, faq, privacy, terms, sitemap.xml, robots.txt.

## Contact

The contact form posts to the submitContact server action. A hidden website field is a basic honeypot. Validation lives in src/lib/validation.ts.

Built for Vercel. Set NEXT_PUBLIC_SITE_URL to the production origin before launch. This workspace finish does not deploy.
