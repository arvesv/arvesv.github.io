# AGENTS.md

## Git & Commit Guidelines

- **Default branch**: `master` (pushes to `master` trigger deployment to GitHub Pages).
- **Co-author trailer**: All commits created or assisted by Antigravity **must** include the co-author trailer:
  ```text
  Co-authored-by: Antigravity <antigravity@users.noreply.github.com>
  ```

## Project Overview

Personal blog (**Arve's Playground**, `https://www.arvesv.com/`) built with **Hugo Extended** and the **[PaperMod](https://github.com/adityatelange/hugo-PaperMod)** theme (tracked as a Git submodule in `themes/PaperMod`).

### Key Files & Directories

- `hugo.yaml`: Main Hugo configuration (`baseURL`, `params.socialIcons`, `params.mainSections`, menu items, and PaperMod flags).
- `content/posts/`: Blog posts. Newer posts are organized by year (e.g., `content/posts/2026/<slug>.md`).
- `content/*.md`: Standalone top-level pages (`about.md`, `archives.md`, `search.md`, `important-concepts-in-computing.md`).
- `layouts/`: Theme template overrides:
  - `layouts/rss.xml`: Custom RSS template supporting full-text feeds and `Params.hiddenInRss`.
  - `layouts/partials/extend_head.html`: Injects custom `<head>` scripts (`static/js/head.js` and PostHog analytics).
  - `layouts/partials/comments.html`: Giscus comments widget with automatic light/dark theme syncing for PaperMod.
  - `layouts/_partials/templates/`: Overrides for OpenGraph, Schema/JSON-LD, and Twitter cards.
- `static/`: Static assets served at the site root (`images/`, `js/`, favicons, `CNAME`).
- `.github/workflows/deploy.yml`: GitHub Actions workflow that installs the latest Hugo Extended release, builds with `hugo --gc --minify`, and deploys to GitHub Pages.

## Content & Authoring Conventions

1. **Use Root-Relative Internal Links**:
   - Always link to other posts using root-relative paths with trailing slashes (e.g., `[link text](/posts/2026/moreai/)` or `[link text](/posts/specialitnetwork/)`), not relative paths like `../moreai`.
   - Why: `ShowFullTextinRSS: true` embeds post HTML directly into `/index.xml`, where relative links resolve against the site root and 404 in RSS readers.

2. **Avoid Duplicate `<h1>` Headings**:
   - PaperMod renders the frontmatter `title` as the page's `<h1>`.
   - Start markdown section headings at `##` (`<h2>`) or `###` (`<h3>`).

3. **Standalone Pages vs. Blog Posts**:
   - `params.mainSections` is restricted to `["posts"]`.
   - When adding or editing top-level standalone pages in `content/`, disable blog chrome and RSS indexing in frontmatter as needed:
     ```yaml
     ---
     title: "Page Title"
     comments: false
     ShowToc: false
     ShowReadingTime: false
     ShowShareButtons: false
     ShowBreadCrumbs: false
     hiddenInRss: true
     hiddenInHomeList: true
     ---
     ```

4. **Images & Static Assets**:
   - Place images in `static/images/` and reference them with root-relative paths (e.g., `![Alt text](/images/example.jpg)`).

5. **GitHub Actions Security**:
   - Pin third-party GitHub Actions in `.github/workflows/` to full commit SHAs with a trailing version comment (e.g., `uses: actions/checkout@<sha>  # v7.0.1`).

## Local Development & Verification

- Clone/update submodules if `themes/PaperMod` is empty:
  ```bash
  git submodule update --init --recursive
  ```
- Preview locally (requires `hugo` extended):
  ```bash
  hugo server -D
  ```
- Production test build:
  ```bash
  hugo --gc --minify
  ```
