# Shanne Quitlong — photo portfolio

A Next.js portfolio with a single-screen photo collage homepage, a riverside train video background, and separate About, Works, Contact, and project pages.

## Run locally

Use Node.js 20.9 or newer with npm installed. From `D:\Documents\Portfolio`, run:

```powershell
npm --prefix student-portfolio install
npm run dev
```

Open http://localhost:3000. If that port is occupied, use the address printed by Next.js. Stop the server with Ctrl+C. The install command is only needed for initial setup or when dependencies change.

You can also run `npm install` and `npm run dev` directly inside `student-portfolio`. Build a static export with `npm run build` (output: `student-portfolio/out/` when launched from the workspace root). If `npm` is not recognized, install Node.js with npm and reopen your terminal.

## Customize

- Replace photo URLs in `lib/photos.ts`. You can put local photos in `public/photos/` and reference them as `/photos/name.jpg`.
- The center portrait flips between two placeholders when clicked. Replace both portrait URLs.
- Edit sample projects and contact links in `lib/content.ts`.
- Edit your bio in `app/about/page.tsx` and contact wording in `app/contact/page.tsx`.
- Sample project images link to individual `/works/[slug]` pages. All sample labels should be updated when adding real work.
- The video uses the official YouTube iframe player for `q8nPaqfRm_c`, with muted autoplay, looping, and a play/pause control. YouTube availability, ads, embedding rules, network access, and browser autoplay policy can affect playback. A thumbnail remains behind the video as a fallback; an embed error provides a YouTube link.
- Reduced-motion preferences disable autoplay. Photos and links remain usable without video playback.

Placeholder photos are served from Unsplash. No contact messages are submitted until you add your email or a real contact integration.

