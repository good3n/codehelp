# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**CodeHelp** is a Gatsby v4-based static site generator serving as a community-driven resource portal (codehelp.io). It aggregates curated links for developers, designers, and marketers across learning materials and development tools.

- **Framework**: Gatsby v4.5.2
- **Language**: JavaScript/React v17
- **Styling**: styled-components (CSS-in-JS)
- **Deployment**: Netlify (automatic on git push)
- **State Management**: React Context API (theme/dark mode)

## Common Development Commands

| Command | Purpose |
|---------|---------|
| `npm start` or `npm run develop` | Start dev server on localhost:8000 with hot reload |
| `npm run build` | Build production-optimized site to `/public` |
| `npm run serve` | Serve the built site locally for testing |
| `npm run clean` | Clear Gatsby cache and build artifacts |
| `npm run format` | Format all code with Prettier (2-space, single quotes) |
| `npm run test` | Currently not implemented—echo stub only |

## Architecture & Code Structure

### Directory Layout

```
src/
├── pages/              # File-based routing (auto-creates routes)
│   ├── index.js       # Homepage (/)
│   ├── learning.js    # /learning resources page
│   ├── resources.js   # /resources development tools page
│   └── 404.js         # Not found page
│
├── components/         # Reusable React components
│   ├── Layout.js      # Main wrapper (contains globalContext Provider via gatsby-browser.js)
│   ├── Header/        # Logo and navigation
│   ├── Nav/           # Main nav links + Discord popup modal
│   ├── Footer/        # Footer with links
│   ├── Sidebar/       # Category navigation with anchor links
│   ├── DataList/      # Maps data array → Resource cards
│   ├── Resource/      # Individual resource card component
│   ├── ThemeToggle/   # Dark/light mode switcher
│   └── Seo.js         # react-helmet wrapper for head management
│
├── context/           # React Context for state
│   └── globalContext.js  # Theme state (dark/light), persists to localStorage
│
├── hooks/
│   └── useWindowSize.js  # Track window dimensions for responsive design
│
├── data/              # Static JSON data (no database)
│   ├── resources.json  # Development tools/frameworks organized by category
│   └── learning.json   # Learning materials organized by category
│
├── assets/            # Static files
│   ├── styles/        # Global + component-level styles
│   ├── fonts/         # Custom fonts (Apercu-Mono-Pro)
│   └── images/        # PNG, SVG assets
│
└── pages/ + components/ → Rendered via Layout wrapper → Theme provider
```

### Data Flow & Structure

**Page rendering**:
1. Pages (`resources.js`, `learning.js`) import static JSON from `src/data/`
2. Pass data to `Sidebar` (category filters) and `DataList` (resource cards)
3. Sidebar renders anchor links for category navigation
4. DataList maps array → Resource components (individual cards)
5. All styled with styled-components, theme-aware via Context

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

- **CSS-in-JS** via styled-components
- **Theme variables** defined in `src/assets/styles/` (e.g., `--color__background`, `--color__text`)
- **Global styles** wrap all components with theme-aware colors
- **Component styles**: Each component has a `.styles.js` file (e.g., `Header.styles.js`)
- **Responsive design**: CSS media queries in component styles

### State Management

**Global Theme**:
- Stored in `src/context/globalContext.js` (React Context)
- Wrapped around entire app in `gatsby-browser.js`
- Persists theme choice to localStorage
- Switch via ThemeToggle component

### Key Plugins & Features

| Plugin | Purpose |
|--------|---------|
| gatsby-plugin-google-analytics | Google Analytics tracking (trackEvent on Discord clicks) |
| gatsby-plugin-image/sharp | Optimized image handling and processing |
| gatsby-plugin-styled-components | styled-components integration |
| gatsby-plugin-anchor-links | Smooth anchor navigation for sidebar categories |
| gatsby-plugin-manifest | PWA manifest for installability |
| gatsby-plugin-offline | Service worker for offline PWA support |
| gatsby-plugin-react-helmet | Head tag management via react-helmet |

## Important Config Files

| File | Notes |
|------|-------|
| `gatsby-config.js` | Plugin setup, site metadata, Google Analytics ID, PWA manifest |
| `gatsby-browser.js` | Wraps app with globalContext Provider for theme state |
| `.prettierrc` | Enforce 2-space indentation, single quotes, no semicolons, trailing commas |
| `.eslintrc` | Airbnb config + React/JSX/a11y plugins |
| `netlify.toml` | Netlify deployment (auto-builds on git push) |
| `.env.development/.env.production` | Google Analytics ID (GOOGLE_ANALYTICS_ID) |

## Code Patterns & Conventions

### Component Structure
- Functional components with hooks
- styled-components for component styles
- PropTypes for prop validation
- File structure: `ComponentName.js` + `ComponentName.styles.js`

### Comments

- Always use **lowercase** unless referencing case-sensitive items (component names, file paths, variable names, etc.)
- Write comments declaratively and directly, like a commit message
- Focus on the "why" rather than obvious "what"
- Examples:
  - ✓ `// toggle dark mode theme in localStorage`
  - ✗ `// This toggles the dark mode theme in localStorage`
  - ✓ `// map categories to sidebar navigation links`
  - ✗ `// Map categories to sidebar navigation links`

### Adding a New Resource/Learning Item
1. Edit `src/data/resources.json` or `src/data/learning.json`
2. Follow existing category/resource structure
3. Run `npm start` to see changes (hot reload works)
4. No build or deployment needed for local testing

### Adding a New Page
1. Create `.js` file in `src/pages/` (Gatsby auto-routes)
2. Export React component with Layout wrapper
3. Use Seo component for head metadata
4. Styling via styled-components

### Theme-Aware Styling
```javascript
import { useContext } from 'react'
import { GlobalContext } from '../context/globalContext'

const MyComponent = () => {
  const { theme } = useContext(GlobalContext)

  return styled.div`
    background: var(--color__background);
    color: var(--color__text);
  `
}
```

## Deployment & Build Process

- **Dev**: `npm start` → localhost:8000
- **Production**: `npm run build` → outputs `/public/` with optimized assets
- **Netlify**: Auto-detects gatsby-config.js, builds and deploys on git push to master
- **Live site**: https://codehelp.io

## Linting & Formatting

- **ESLint**: Airbnb config enforces style rules
- **Prettier**: Auto-format with `npm run format`
- Pre-commit hooks: None currently configured (consider adding)

## Notes for Future Development

- Data is static JSON—no database or API backend
- Theme switching is client-side only (Context + localStorage)
- Analytics tracked on Discord link clicks (see Nav component)
- Accessibility plugins enabled (jsx-a11y, manifest)
- PWA support enabled (installable, offline fallback)
- No automated tests currently—test suite commented in package.json
