# Elimuhub Webmaster Toolkit

A free, professional resource hub for [Elimuhub Education Consultants](https://elimuhubconsultants.blogspot.com) built on GitHub Pages.

## Features

- SEO inspection & optimization tools
- Analytics dashboard (Google Analytics, PageSpeed Insights)
- Easy integration with Blogger

## Setup

1. Clone the repo.
2. Add your logo to `assets/images/elimuhub-logo-circular.jpg`.
3. Customize `assets/js/analytics.js` with your API keys.
4. Deploy with GitHub Pages!

## Repository structure 

```
.github.io-elimuhub-blogmaster-toolkit/
│
├── _config.yml                     # Jekyll config for GitHub Pages
├── index.md                        # Main landing page (Markdown, easier to maintain)
├── assets/
│   ├── css/
│   │   └── style.css               # Custom styles
│   ├── js/
│   │   └── analytics.js            # Scripts for analytics and API integration
│   └── images/
│       └── logo.png                # Elimuhub logo (placeholder)
│
├── _includes/
│   └── header.html                 # Header partial for reuse
│   └── footer.html                 # Footer partial for reuse
│
├── _layouts/
│   └── default.html                # Main layout template
│
├── pages/
│   ├── seo-tools.md                # SEO tools/inspector page
│   ├── analytics.md                # Analytics dashboard page
│   └── blogger-integration.md      # Info/integration with Blogger
│
└── README.md                       # Project
```
