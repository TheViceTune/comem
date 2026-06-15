# Cỏ Mềm – Son Dưỡng Gạo · Website Wireframe

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Routes

| URL | View | Sections shown |
|-----|------|----------------|
| `/` | HomeView | All sections (full page as per design) |
| `/san-pham` | SanPhamView | Product, Benefits, Ingredients, Differentiators |
| `/cau-chuyen-thuong-hieu` | CauChuyenView | Concept, Brand Story, Awards/Quote |
| `/media-assets` | MediaView | Media Assets download grid |

---

## File Map

```
src/
├── main.js                          ← entry, mounts app + imports CSS
├── App.vue                          ← root: NavBar + <router-view> + FooterBar
├── assets/
│   └── wireframe.css                ← ALL global styles (edit here for branding)
├── router/
│   └── index.js                     ← 4 routes
├── components/
│   ├── layout/
│   │   ├── NavBar.vue               ← sticky nav with 4 router-links
│   │   └── FooterBar.vue            ← contact info footer
│   └── home/
│       ├── HeroSection.vue          ← headline + 2 CTA buttons + hero image
│       ├── ProductSection.vue       ← 3 variant cards (Hương Dâu, Không màu, Hương Cam)
│       ├── BenefitsSection.vue      ← 3-col: 2 benefits | product image | 2 benefits
│       ├── IngredientsSection.vue   ← 5-col ingredient cards
│       ├── DifferentiatorsSection.vue ← 2×2 grid + sidebar image
│       ├── ConceptSection.vue       ← text left + illustration right
│       ├── BrandStorySection.vue    ← lab photo left + story text right
│       ├── AwardsSection.vue        ← award image + heading + founder quote
│       └── MediaAssetsSection.vue   ← 3-col download grid
└── views/
    ├── HomeView.vue                 ← imports all sections in order
    ├── SanPhamView.vue              ← product sections only
    ├── CauChuyenView.vue            ← brand story sections only
    └── MediaView.vue                ← media assets section only
```

---

## How to Customise

### Replace placeholder images
Every `<div class="img-box">` is a placeholder. Swap with:
```html
<img src="@/assets/your-image.jpg" alt="..." />
```

### Add brand colours
Open `wireframe.css` and add CSS variables at the top:
```css
:root {
  --color-primary: #your-green;
  --color-accent:  #your-gold;
  --font-brand:    'Your Font', sans-serif;
}
```
Then replace the `#333` / `#111` values throughout.

### Wire up real download links
In `MediaAssetsSection.vue`, replace `<button class="btn btn-sm">` with:
```html
<a class="btn btn-sm" href="/assets/files/logo.zip" download>⬇ Tải</a>
```
