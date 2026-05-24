# Sujal Kumar — Portfolio

Personal portfolio site of **Sujal Kumar**, Software Engineer (Java · Spring Boot · Python · Generative AI).

🔗 **Live:** https://sujalkumar.dev *(replace once deployed)*

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS v4 (inline `@theme`) |
| Routing | React Router 7 |
| Animation | motion (Framer Motion successor) |
| 3D | react-three-fiber + drei + three |
| SEO | react-helmet-async + JSON-LD |
| Icons | lucide-react |

## Run locally

Requires **Node ≥ 20**.

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Vite dev server on port 3000 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build |
| `npm run lint` | TypeScript type-check (`tsc --noEmit`) |

## Project structure

```
src/
├── main.tsx              entry — HelmetProvider + StrictMode
├── App.tsx               Router + global layout
├── constants.ts          PROJECTS & SKILLS (single source of truth for content)
├── index.css             Tailwind theme tokens + custom utilities
├── lib/utils.ts          cn() className merger
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Background3D.tsx  particle field (react-three-fiber)
│   ├── ModelViewer.tsx   interactive 3D placeholder per project category
│   └── ScrollToHash.tsx  smooth scroll on hash/route change
└── pages/
    ├── Home.tsx
    ├── Projects.tsx
    ├── ProjectDetail.tsx
    └── About.tsx
```

## Deployment

Vercel / Netlify-ready — `npm run build` outputs a static `dist/`.

For Vercel: connect the repo, framework preset = **Vite**, no env vars required.

## Contact

- **Email:** sujal31122005@gmail.com
- **LinkedIn:** [sujal-kumar](https://linkedin.com/in/sujal-kumar)
- **GitHub:** [sujalkumar27](https://github.com/sujalkumar27)
