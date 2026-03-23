# Timer Application

Simple React app that displays the current time as a digital clock and updates every second.

Features
- Reusable `Timer` component at `src/components/Timer.jsx` that renders time in the format HH:MM:SS AM/PM.
- Minimal styling in `src/App.css`.

Getting started

Prerequisites: Node.js (recommended 18+) and npm.

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open the app at http://localhost:5173 (Vite default).

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Notes
- The `Timer` component is reusable and accepts an optional `className` prop for styling.
- Time formatting is implemented in `src/components/Timer.jsx`.

Feel free to ask if you want the clock moved, restyled, or extracted into its own page.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
