# Elementum Assignment

A responsive React implementation of the Elementum landing page based on the provided Figma design. The page is built with reusable section components, responsive CSS, and Vite for a fast development workflow.

## Live Demo

Vercel: Add your deployed project link here

## Preview

![Elementum landing page preview](./actual-current.png)

## Figma Reference

[Assignment Design](https://www.figma.com/design/0K35IOZ4Qwqur0b9o2PXlN/Assignment?node-id=0-1&t=Tdq2Ng34b481G6aS-1)

## Features

- React-based landing page implementation
- Responsive layout for mobile, tablet, and desktop screens
- Reusable components for Navbar, Hero, Offerings, Progress, Testimonials, Newsletter, and Footer
- Custom CSS for typography, spacing, colors, hover states, and layout details
- Optimized Vite setup for development and production build

## Tech Stack

- React
- Vite
- CSS3

## Project Structure

```text
src/
  assets/
  components/
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    Newsletter.jsx
    Offerings.jsx
    ProgressSection.jsx
    Testimonials.jsx
  App.jsx
  main.jsx
public/
  favicon.svg
  icons.svg
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## GitHub Upload Checklist

Upload these files and folders:

- `src/`
- `public/`
- `index.html`
- `package.json`
- `package-lock.json`
- `vite.config.js`
- `eslint.config.js`
- `.gitignore`
- `README.md`
- `actual-current.png` if you want the screenshot to appear in this README

Do not upload these:

- `node_modules/`
- `dist/`
- `.env`
- `.env.local`
- editor/system files such as `.vscode/`, `.idea/`, `.DS_Store`

## Deployment

This project can be deployed on Vercel directly from GitHub.

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Keep the framework preset as Vite.
4. Use `npm run build` as the build command.
5. Use `dist` as the output directory.

## Author

Pratik
