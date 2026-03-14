# Kotlin Website - React Router 7 Migration

Migration of the [kotlinlang.org](https://kotlinlang.org) homepage from a legacy stack (Flask + Webpack + React 17) to **React Router 7 Framework Mode** with Server-Side Rendering.

## What was done

**Stack migration:**

- Replaced Flask (Python) backend and Webpack bundler with React Router 7 + Vite
- Enabled full SSR - the page renders on the server and hydrates on the client
- Migrated from JavaScript to TypeScript with strict mode

**Preserved from the original:**

- All five page sections: Hero, Latest from Kotlin, Why Kotlin, Usage Highlights, Get Started
- Interactive elements: tab switching with syntax highlighting (highlight.js), sort toggle with localStorage persistence
- Responsive grid system and all visual styles
- `@rescui` component library (Button, Card, TabList, Typography, ThemeProvider)
- `@jetbrains/kotlin-web-site-ui` Header and Footer components

**SSR adaptations:**

- `localStorage` access moved into `useEffect` to avoid server errors
- `window.innerWidth` check replaced with CSS @media for card visibility
- `highlight.js` uses `hljs.highlight()` API instead of `highlightBlock()`

## Getting Started

### Prerequisites

- Node.js >= 18

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Production build

```bash
npm run build
npm start
```

The production server runs on [http://localhost:3000](http://localhost:3000).

### Type checking

```bash
npm run typecheck
```

## Project Structure

```
app/
  components/
    footer/          - Footer
    header/          - Header
    layout/          - Section and Container layout components
  pages/index/
    overview-page.tsx       - Main page (all sections connected)
    header-section/         - Hero banner
    latest-from-kotlin-section/ - News and blog links
    why-kotlin-section/     - Language features with code example
      programming-language/ - Interactive tab list with syntax highlighting
    usage-section/          - Companies list with sorting
    start-section/          - Button get started + gradient background
  routes/
    home.tsx         - Home route with meta tags
  styles/            - Global SCSS
public/
  assets/            - Static images, fonts, favicons
```

## Tech Stack

| Layer             | Technology                               |
| ----------------- | ---------------------------------------- |
| Framework         | React Router 7 (Framework Mode with SSR) |
| Build             | Vite                                     |
| Language          | TypeScript                               |
| UI                | React 18, @rescui components             |
| Styles            | SCSS                                     |
| Code highlighting | highlight.js 10.5.0                      |
