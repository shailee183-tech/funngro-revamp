# Funngro Website Revamp

A responsive, SEO-friendly website revamp inspired by **Funngro**, connecting young minds with verified brand projects and experiential learning opportunities.

Built as an assessment deliverable focused on two main pages:
1. **Teen / Earn Page** (`/teen`)
2. **For Brands Page** (`/for-brands`)

---

## 🌟 Highlights & Key Features

- **Editorial Dark-Green Design System**: Custom forest-green palette (`#07150D`, `#08B76A`, `#56D995`) with elegant typography combining Fraunces serif headlines with italic emerald accents and clean Plus Jakarta Sans body copy.
- **Fluid & Responsive Layouts**: Built entirely using CSS custom properties and `clamp()` typography, tested across 375px (mobile), 768px (tablet), 1024px (laptop), and 1440px (desktop) viewports with zero horizontal overflow.
- **Interactive Teen Journey**: 5-step progression walkthrough with interactive tabbed details, 3 growth levels (Start, Grow, Build), 6 growth principles, and a 7-stage vertical progression timeline.
- **Enterprise Brand Capabilities**: 4-column animated statistics strip, problem statement breakdown (impressions vs. action), 12-category brand service explorer with instant filtering, 12 industry vertical frameworks, and an accessible validated contact form.
- **Technical SEO & Accessibility**: Dynamic title/meta tags, Open Graph cards, canonical tags, `robots.txt`, `sitemap.xml`, accessible FAQ accordion, and full `prefers-reduced-motion` compliance.
- **Zero Broken Links**: Verified destination modals for secondary links (Stories, SheLancer, Arcade, About, Terms of Service, Privacy Policy) and an interactive mobile app download dialog.

---

## 🛠️ Technology Stack

- **React 18**: Component-driven UI architecture
- **Vite 6**: Ultra-fast build tool and dev server
- **React Router 6**: Client-side routing for `/teen`, `/for-brands`, and custom 404
- **Lucide React**: Clean, accessible vector icons
- **Custom CSS**: Pure modular CSS with CSS variables, keyframe animations, and zero heavy UI framework overhead
- **Intersection Observer**: Scroll-triggered reveal animations and animated number counters

---

## 📁 Project Structure

```text
Funngro/
├── public/
│   ├── favicon.svg          # Emerald Funngro monogram SVG
│   ├── robots.txt           # Search engine crawler directives
│   ├── sitemap.xml          # XML sitemap with canonical URLs
│   └── _redirects           # Netlify SPA routing configuration
├── src/
│   ├── components/
│   │   ├── AppDownloadModal.jsx # App download modal with QR code & verified store links
│   │   ├── Button.jsx           # Reusable pill-shaped button with hover lift & glow
│   │   ├── ContactForm.jsx      # Validated client-side brand inquiry form
│   │   ├── Counter.jsx          # Intersection Observer animated counter
│   │   ├── FAQ.jsx              # Accessible expandable accordion
│   │   ├── Footer.jsx           # Reusable four-column footer with social links
│   │   ├── Header.jsx           # Sticky frosted-glass header with mobile drawer
│   │   ├── InfoModal.jsx        # Disclosures for non-dead navigation links
│   │   ├── Reveal.jsx           # Scroll-triggered entrance animation wrapper
│   │   ├── SectionHeading.jsx   # Editorial section titles with italic green highlight
│   │   └── SEO.jsx              # Dynamic head metadata & canonical tag manager
│   ├── data/
│   │   ├── brandContent.js      # Statistics, services, industries & outcomes data
│   │   └── teenContent.js       # Journey, levels, principles, timeline & FAQs data
│   ├── pages/
│   │   ├── BrandsPage.jsx       # For Brands page (/for-brands)
│   │   ├── NotFoundPage.jsx     # Custom 404 page
│   │   └── TeenPage.jsx         # Teen / Earn page (/teen)
│   ├── styles/
│   │   ├── components.css       # Buttons, cards, header, footer, modals & forms
│   │   ├── global.css           # Design tokens, reset, typography & clamp scaling
│   │   └── pages.css            # Page-specific grids, timelines & interactive states
│   ├── App.jsx                  # Route definitions & scroll anchor management
│   └── main.jsx                 # Application entry point
├── index.html                   # HTML template with Google Fonts preconnect
├── package.json                 # Project dependencies & build scripts
├── README.md                    # Project documentation
├── SEO_AUDIT.md                 # 12-section technical SEO and accessibility audit
├── vercel.json                  # Vercel deployment & security header configuration
└── vite.config.js               # Vite build configuration
```

---

## 🎨 Design Tokens

```css
:root {
  --bg-main: #07150D;           /* Main dark forest background */
  --bg-alt: #0A1910;            /* Alternate section background */
  --bg-card: #10271B;           /* Card background */
  --bg-card-hover: #153223;     /* Card hover state */
  --primary-emerald: #08B76A;   /* Primary brand emerald */
  --emerald-light: #56D995;     /* Light green highlight */
  --text-main: #F0F5EF;         /* High-contrast off-white copy */
  --text-secondary: #A7B7AC;    /* Muted sage body text */
  --border-subtle: #284535;     /* Thin container borders */
  --border-highlight: #3B664F;  /* Hover border accent */
}
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### 1. Installation
Clone or navigate to the project directory and install dependencies:
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The application will be accessible at `http://localhost:3000/`.

### 3. Production Build
```bash
npm run build
```
Generates an optimized static bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Install the Vercel CLI (`npm i -g vercel`) or import your repository directly on [Vercel](https://vercel.com).
2. The project contains a pre-configured `vercel.json` with SPA route rewrites (`/(.*) -> /index.html`) and security headers.
3. Deploy command:
   ```bash
   vercel --prod
   ```

### Deploy to Netlify
1. Connect repository or run `netlify deploy --prod --dir=dist`.
2. The `public/_redirects` file automatically handles single-page app rewrites (`/* /index.html 200`).

*Note: After deploying to your production domain, update the canonical URL in `public/robots.txt`, `public/sitemap.xml`, and `src/components/SEO.jsx`.*

---

## 📊 SEO Audit

A comprehensive 12-section technical audit has been completed and saved in [`SEO_AUDIT.md`](./SEO_AUDIT.md).
