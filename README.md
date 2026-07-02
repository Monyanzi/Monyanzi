# AI Founder Garage

Production site for AI tools, automation articles, and small-business build examples. The app is a Vite + React single-page site with route-level code splitting, SEO metadata, consent-aware analytics, and generated sitemap output.

## Live Site

- `https://mosesnyanzi.co.za`

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS
- Motion (`motion/react`) for animations
- React Helmet for route-level SEO tags
- Vercel Analytics + optional Google Analytics (consent-gated)

## Key Features

- Homepage with hero, featured articles, selected work, and collaboration paths
- Insights listing and individual insight article pages
- Route-level lazy loading for improved initial bundle throughput
- Consent-aware analytics (`CookieConsent` + `GoogleAnalytics`)
- SEO support:
  - Canonical tags and social metadata per route
  - JSON-LD in `index.html` and article-level schema in `InsightArticle`
  - Sitemap generation via build script

## Scripts

```bash
npm run dev              # Local dev server
npm run lint             # ESLint
npm run verify:content   # Validates insight summary/detail sync
npm run sitemap          # Regenerates public/sitemap.xml
npm run build            # verify:content + sitemap + vite build
npm run preview          # Preview production build
```

## Project Structure

```text
src/
  App.tsx
  main.tsx
  index.css
  assets/
    insights/
  components/
    Navigation.tsx
    HeroSection.tsx
    FeaturedInsightsSection.tsx
    SelectedWorkSection.tsx
    CollaborateSection.tsx
    BottomNavigation.tsx
    CookieConsent.tsx
    GoogleAnalytics.tsx
    SearchModal.tsx
    SiteFooter.tsx
    ShareBar.tsx
    audio/
    ui/
    insights/
      ArticleCard.tsx
      CategoryFilter.tsx
      SortSelect.tsx
  pages/
    Index.tsx
    Insights.tsx
    InsightArticle.tsx
    NotFound.tsx
  data/
    articleSummaries.ts
    audioBriefings.ts
    insights.tsx
  utils/
    useThrottledScroll.ts
    useFocusTrap.ts
    cookieConsent.ts
scripts/
  verify-article-data-sync.mjs
  generate-sitemap.mjs
public/
  robots.txt
  sitemap.xml
  social-share.png
  audio/
```

## Notes

- `node_modules` is intentionally excluded from all cleanup/refactor operations.
- Build refreshes `public/sitemap.xml` with current article URLs and date.

## Contact

- Email: `moses.k.nyanzi@gmail.com`
- LinkedIn: `https://linkedin.com/in/moses-nyanzi`
