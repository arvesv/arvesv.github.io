# Arve's Playground

Source repository for my personal blog at **[www.arvesv.com](https://www.arvesv.com/)**, where I share thoughts on software development, DevOps, Cloud, AI, Security, and Home IT.

## Tech Stack

- **Static Site Generator**: [Hugo Extended](https://gohugo.io/)
- **Theme**: [PaperMod](https://github.com/adityatelange/hugo-PaperMod) (included as a Git submodule in `themes/PaperMod`)
- **Comments**: [Giscus](https://giscus.app/) (GitHub Discussions)
- **Hosting & CI/CD**: GitHub Pages via [GitHub Actions](.github/workflows/deploy.yml)

## Local Development

Clone the repository including the `PaperMod` theme submodule:

```bash
git clone --recurse-submodules https://github.com/arvesv/arvesv.github.io.git
cd arvesv.github.io
```

If already cloned without submodules:

```bash
git submodule update --init --recursive
```

Start the local preview server (requires Hugo Extended):

```bash
hugo server -D
```

## License & Copyright

© Arve Svendsen. All rights reserved. The blog posts and content in `content/` and `static/` may not be republished without permission.
