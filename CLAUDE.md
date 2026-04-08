# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**CodeHelp** is an Astro-based static site serving as a community-driven resource portal (codehelp.io). It aggregates curated links for developers, designers, and marketers across learning materials and development tools.

- **Framework**: Astro 5 with React 18 integration
- **Language**: JavaScript/JSX (Astro components + React islands)
- **Styling**: CSS (global) + styled-components (legacy page styles)
- **State Management**: nanostores (theme/dark mode)
- **Deployment**: Netlify (automatic on git push to master)
- **Node**: v20+ (set in `.nvmrc` and `netlify.toml`)

## Common Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Astro dev server on localhost:4321 with hot reload |
| `npm run build` | Build production site to `/dist` |
| `npm run preview` | Serve the built site locally for testing |
| `npm run clean` | Remove `dist` and `.astro` cache directories |
| `npm run format` | Format all code with Prettier (2-space, single quotes) |

## Architecture & Code Structure

### Directory Layout

```
src/
├── pages/              # File-based routing (Astro auto-creates routes)
│   ├── index.astro    # Homepage (/)
│   ├── learning.astro # /learning resources page
│   ├── resources.astro # /resources development tools page
│   └── 404.astro      # Not found page
│
├── layouts/
│   └── Layout.astro   # Main HTML wrapper (head, analytics, theme script)
│
├── components/         # Reusable components (dual Astro + JSX pattern)
│   ├── Header/        # Logo and navigation (.astro + .jsx)
│   ├── Nav/           # Main nav links + Discord popup modal (.jsx only)
│   ├── Footer/        # Footer with links (.astro + .jsx)
│   ├── Sidebar/       # Category navigation with anchor links (.astro + .jsx)
│   ├── DataList/      # Maps data array -> Resource cards (.astro + .jsx)
│   ├── Resource/      # Individual resource card (.astro + .jsx)
│   ├── PageTitle/     # Page heading component (.astro + .jsx)
│   └── ThemeToggle/   # Dark/light mode switcher (.jsx only)
│
├── stores/
│   └── themeStore.js  # nanostores atom for theme state, syncs to localStorage
│
├── utils/
│   └── theme-script.js # Inline script to prevent FOUC on page load
│
├── data/              # Static JSON data (no database)
│   ├── resources.json # Development tools/frameworks organized by category
│   └── learning.json  # Learning materials organized by category
│
├── styles/            # Global CSS
│   ├── global.css     # Theme variables, layout, typography
│   ├── normalize.css  # CSS reset
│   └── fonts.css      # Custom font declarations (Apercu Mono Pro)
│
└── assets/            # Static files
    ├── styles/        # Legacy styled-components page styles
    ├── fonts/         # Custom font files (.woff, .woff2)
    └── images/        # PNG, SVG assets
```

### Component Pattern

Most components have dual implementations:
- `.component.astro` — server-rendered Astro component (preferred for static content)
- `.component.jsx` — React component (used for interactive islands like Nav, ThemeToggle)

### Data Flow & Structure

**Page rendering**:
1. Pages (`.astro`) import static JSON from `src/data/`
2. Pass data to `Sidebar` (category filters) and `DataList` (resource cards)
3. Sidebar renders anchor links for category navigation
4. DataList maps array -> Resource components (individual cards)
5. Layout.astro wraps all pages with head metadata, analytics, and theme initialization

**Data shape** (JSON structure):
```javascript
{
  "resources": [
    {
      "label": {
        "id": "guides-info",
        "name": "General Guides & Information",
        "categories": [
          {
            "category": {
              "id": "web-development",
              "name": "Web Development",
              "resources": [
                {
                  "name": "MDN Web Docs",
                  "description": "...",
                  "url": "https://..."
                }
              ]
            }
          }
        ]
      }
    }
  ]
}
```

### Styling Architecture

- **Global CSS** in `src/styles/global.css` with CSS custom properties (`--color__background`, `--color__text`, etc.)
- **Theme** controlled via `data-theme` attribute on `<html>` element
- **Legacy styled-components** in `src/assets/styles/pages/` for page-level styles
- **Responsive design**: CSS media queries

### State Management

**Theme (nanostores)**:
- Defined in `src/stores/themeStore.js` using nanostores `atom`
- Persists to localStorage, syncs to `document.documentElement.dataset.theme`
- React components access via `@nanostores/react` (`useStore`)
- FOUC prevention via inline script in Layout.astro (`src/utils/theme-script.js`)

### Integrations (astro.config.mjs)

| Integration | Purpose |
|-------------|---------|
| `@astrojs/react` | React component islands |
| `@astrojs/sitemap` | Auto-generated sitemap.xml |
| `@astrojs/partytown` | Google Analytics in web worker (off main thread) |

## Important Config Files

| File | Notes |
|------|-------|
| `astro.config.mjs` | Integrations, site URL, image service, static output |
| `.nvmrc` | Node version (v20) |
| `.prettierrc` | Enforce 2-space indentation, single quotes, no semicolons, trailing commas |
| `.eslintrc` | ESLint configuration |
| `netlify.toml` | Build command, publish dir (`dist`), Node version, redirects |
| `.env.development/.env.production` | Google Analytics ID (`PUBLIC_GA_ID`) |

## Code Patterns & Conventions

### Component Structure
- Astro components for static content, React for interactivity
- styled-components for legacy page styles (in `src/assets/styles/pages/`)
- File naming: `ComponentName.component.astro` / `ComponentName.component.jsx`

### Comments

- Always use **lowercase** unless referencing case-sensitive items (component names, file paths, variable names, etc.)
- Write comments declaratively and directly, like a commit message
- Focus on the "why" rather than obvious "what"
- Examples:
  - `// toggle dark mode theme in localStorage`
  - `// map categories to sidebar navigation links`

### Adding a New Resource/Learning Item
1. Edit `src/data/resources.json` or `src/data/learning.json`
2. Follow existing category/resource structure
3. Run `npm run dev` to see changes (hot reload works)

### Adding a New Page
1. Create `.astro` file in `src/pages/` (Astro auto-routes by filename)
2. Import and use `Layout.astro` as the wrapper
3. Pass `title` and `description` props to Layout for head metadata

### Theme-Aware Styling
```css
/* use CSS custom properties that change with data-theme */
.my-element {
  background: var(--color__background);
  color: var(--color__text);
}
```

```jsx
// react components can read theme from nanostores
import { useStore } from '@nanostores/react'
import { themeStore } from '../stores/themeStore'

const MyComponent = () => {
  const theme = useStore(themeStore)
  // ...
}
```

## Deployment & Build Process

- **Dev**: `npm run dev` -> localhost:4321
- **Production**: `npm run build` -> outputs `/dist` with static assets
- **Netlify**: Builds and deploys on git push to master
- **Live site**: https://codehelp.io

## Linting & Formatting

- **ESLint**: Configured via `.eslintrc`
- **Prettier**: Auto-format with `npm run format`

## Notes

- Data is static JSON — no database or API backend
- Theme switching is client-side only (nanostores + localStorage)
- Analytics via Google Analytics loaded through Partytown (web worker)
- Static output mode (`output: 'static'` in astro.config.mjs)
