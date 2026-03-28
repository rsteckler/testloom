# TestLoom Blog — Documentation Site

Static HTML documentation for the TestLoom Blog application.

## What's Inside

| File | Purpose |
|------|---------|
| `index.html` | Single-page documentation with all sections |
| `styles.css` | Stylesheet — sidebar, responsive layout, code blocks |
| `script.js` | Mobile menu toggle and scroll-based nav highlighting |

## Viewing the Docs

Open `index.html` directly in a browser — no build step or server required.

```bash
# macOS
open docs/index.html

# Linux
xdg-open docs/index.html

# Or use any static server
npx serve docs
```

## Sections

- **Overview** — what the app does and its high-level structure
- **Getting Started** — prerequisites and setup steps
- **Architecture** — ASCII diagram showing frontend/backend interaction
- **Frontend** — React tech stack, commands, and component reference
- **Backend** — Express tech stack, commands, API endpoint reference with examples

## Design Decisions

- **Single HTML file** — easy to host, easy to browse, no routing needed.
- **No frameworks** — plain HTML, CSS, and vanilla JS to keep it lightweight.
- **Responsive** — sidebar collapses to a hamburger menu on narrow screens.
- **Scroll spy** — sidebar highlights the section currently in view.
