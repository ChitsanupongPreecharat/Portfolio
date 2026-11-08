# Portfolio – Chitsanupong Preecharat

Personal portfolio site built with React + Vite, deployed to GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Add or edit a project

All content is in `src/data/projects.js`.

- To add a GitHub link, fill in the project's `github` field. The button only shows when it is not empty.
- To add a project, copy one of the objects in `projects` and set `category` to one of the values in `categories`.

## Deploy

Every push to `main` builds the site and deploys it with GitHub Actions (`.github/workflows/deploy.yml`).

One-time setup: in the repo go to **Settings → Pages → Source** and choose **GitHub Actions**.
