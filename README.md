# Quantum Affect - Philosophical Contemplations

A contemplative and minimal philosophy blog exploring the intersection of quantum physics, consciousness, and philosophical inquiry. Built with Astro.js and Tailwind CSS.

## About

Quantum Affect is a space for deep philosophical reflection on consciousness, existence, and the nature of reality. Each essay is a meditation on the mysteries that lie at the intersection of mind, matter, and meaning.

## Features

- **Minimal Design**: Clean, contemplative interface optimized for reading
- **Philosophical Content**: Long-form essays on consciousness, metaphysics, and quantum philosophy
- **Responsive**: Works beautifully on all devices
- **Fast**: Built with Astro.js for optimal performance
- **SEO Optimized**: Built-in sitemap and meta tags

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/quantum-affect-blog.git
cd quantum-affect-blog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

## Deployment to GitHub Pages

This site is configured for automatic deployment to GitHub Pages:

1. **Push to GitHub**: The site automatically deploys when you push to the `main` branch
2. **Enable GitHub Pages**: Go to your repository Settings > Pages and select "GitHub Actions" as the source
3. **Custom Domain**: Update the `siteConfig.website` in `src/data/site-config.ts` with your domain

## Adding New Essays

Create new markdown files in `src/content/blog/` with the following frontmatter:

```markdown
---
title: "Your Essay Title"
description: "Brief description of the essay"
pubDate: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
heroImage: "/image.jpg"
---

Your essay content here...
```

## Customization

- **Site Configuration**: Edit `src/data/site-config.ts` to update site metadata
- **Styling**: Modify `src/styles/global.css` for custom styles
- **Layout**: Customize components in `src/components/`

## License

This project is based on the Dante Astro theme by JustGoodUI.

---

*Quantum Affect - Where philosophy meets quantum reality.*
