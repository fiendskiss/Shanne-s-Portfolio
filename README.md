# Student portfolio

A responsive Next.js App Router portfolio inspired by the playful collage spirit of sebinjeon.com, with original CSS-built project artwork. All names, projects, skills, and project dates are explicitly illustrative samples.

## Run

Use Node.js 20.9 or newer. Install with `npm install`, then run `npm run dev`. Open http://localhost:3000. Use `npm run build` to produce a static website in `out/`.

## Make it yours

- Edit `lib/content.ts` for your name, initials, introduction, email, social links, and projects. Empty contact and social fields intentionally do not generate fake links.
- Add optional `url` and `github` properties to projects to display real links in the project dialog.
- Update the sample labels, about text, toolkit, and contact wording in `app/page.tsx` after adding real content.
- Update page title and description in `app/layout.tsx`.
- Customize colors and responsive layouts in `app/globals.css`.
- Replace the illustrative previews in `components/project-art.tsx` with your actual project screenshots.

Includes category filtering, text search, accessible native project dialogs, keyboard focus styling, reduced-motion support, and mobile layouts. Google Fonts are optional; local system fonts provide fallbacks. No database or API keys are needed.
