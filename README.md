# Shanne Quitlong — photo portfolio

A Next.js portfolio with a single-screen photo collage homepage, a riverside train video background, and separate About, Works, Contact, and project pages.

## Run locally

Use Node.js 20.9 or newer. Run `pnpm install` then `pnpm dev`, or use `npm install` and `npm run dev`. Build a static export with `pnpm build` (output: `out/`).

## Customize

- Replace photo URLs in `lib/photos.ts`. You can put local photos in `public/photos/` and reference them as `/photos/name.jpg`.
- The center portrait flips between two placeholders when clicked. Replace both portrait URLs.
- Edit sample projects and contact links in `lib/content.ts`.
- Edit your bio in `app/about/page.tsx` and contact wording in `app/contact/page.tsx`.
- Sample project images link to individual `/works/[slug]` pages. All sample labels should be updated when adding real work.
- The video uses the official YouTube iframe player for `q8nPaqfRm_c`, with muted autoplay, looping, and a play/pause control. YouTube availability, ads, embedding rules, network access, and browser autoplay policy can affect playback. A thumbnail remains behind the video as a fallback; an embed error provides a YouTube link.
- Reduced-motion preferences disable autoplay. Photos and links remain usable without video playback.

Placeholder photos are served from Unsplash. No contact messages are submitted until you add your email or a real contact integration.

