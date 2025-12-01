# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and ESLint rules.

Currently, two official plugins are available:

- **@vitejs/plugin-react** – uses Babel (or OXC when used with Rolldown) for Fast Refresh.
- **@vitejs/plugin-react-swc** – uses SWC for Fast Refresh.

## React Compiler

The React Compiler is not enabled by default due to its impact on development and build performance. To enable it, review the official documentation:
[https://react.dev/learn/react-compiler/installation](https://react.dev/learn/react-compiler/installation)

---

# Tailwind CSS Installation

Below are the correct steps to install Tailwind CSS **using the Vite plugin method**:

## 1. Install Tailwind CSS with the official Vite plugin

```
npm install tailwindcss @tailwindcss/vite
```

## 2. Update `vite.config.js`

Add the Tailwind plugin:

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

## 3. Add Tailwind directives to `src/index.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 4. Run the Vite development server

```
npm run dev
```

---

# Additional Components

The project includes additional UI components styled with Tailwind CSS, such as:

### • Feature cards

Reusable cards displaying application features using grid layouts and responsive design.

### • Centered section layout

A fully centered page section using:

```
min-h-screen flex justify-center items-center
```

### • Typography presets

Consistent headings and paragraphs using Tailwind’s text utilities.

### • Responsive grid

A flexible responsive grid using:

```
grid gap-4 lg:grid-cols-3 lg:grid-rows-2
```

These components are customizable and can be reused across the project.

---

# Expanding ESLint Configuration

For production-grade applications, we recommend using **TypeScript** with **type-aware linting**. Refer to the official TypeScript template:
[https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)

This provides integration with `typescript-eslint` and stricter development safety.

---

If you want, I can also add:
✅ Project architecture
✅ Screenshots section
✅ Deployment instructions
✅ Branding or preview GIFs

Just let me know!
