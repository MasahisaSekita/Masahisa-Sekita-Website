# Masahisa Sekita — Portfolio

An editorial, typography-forward portfolio website designed in the style of [Arlen McCluskey](https://www.arlenmccluskey.com/). Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, optimized for deployment to **Vercel**.

Showcases professional work as a **Full-Stack Developer** specializing in **AI Automation, Data Pipelines, and Internal Tooling**.

---

## 🎨 Design System & Aesthetic

Inspired by high-craft editorial design studios:
- **Palette:** Warm ivory paper canvas (`#FAF8F5`) with deep warm charcoal typography (`#1C1917` / `#44403C`) and delicate hairline dividers (`#E7E2D6`).
- **Typography:** Refined editorial serif headings (*Newsreader*, *Georgia*, *Cormorant Garamond*) paired with technical monospace labels (*JetBrains Mono*, *Pitch Sans*) and clean sans-serif body (*Inter*).
- **Index Architecture:** Numbered editorial case studies and experience breakdown with structured impact metrics.

---

## 📄 Structure & Content

All content is synchronized with Masahisa Sekita's official resume and managed in a single editable file: [`data/portfolio.ts`](./data/portfolio.ts):

- **Introduction / Index:** Core summary, current role at YOBOLabs.ai, U of T Computer Science degree, and direct contact channels.
- **01 — Selected Systems & Projects:**
  - AI Academic Planner (Course Matrix) — Autonomous RAG timetable agent
  - Apache Superset Dependency Modernization — 50+ files refactored, PR #35920
  - Automated Fraud Detection & Video QA Engine — BigQuery, Claude & Gemini API
  - Thrill Bicycles Customer & Dealer Platform — Next.js production platform
  - Cloud Infrastructure & Load Testing Suite — GCP, Docker, JUnit, JMeter
- **02 — Experience & Contributions:**
  - YOBOLabs.ai (Product & Business Intelligence Junior Engineer, Sep 2026 – Present)
  - PT. Lajukarsa Global Industri (Full Stack Web Developer Intern, Jun 2026 – Sep 2026)
  - Apache Superset (Open Source Software Developer, Sep 2025 – Dec 2025)
  - YOBO (Software Development Intern, May 2024 – Sep 2024)
- **03 — Technical Competencies:** Categorized breakdown of AI & Automation, Languages, Frameworks, Databases & Security, Cloud & DevOps, and Engineering Practices.
- **04 — Inquiries & Colophon:** Direct contact information (email, phone, location, LinkedIn, GitHub).

---

## 💻 Local Development

```powershell
# Run the local development server
pnpm run dev
# or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deployment to Vercel

1. Commit and push your changes to GitHub:
   ```powershell
   git add .
   git commit -m "Update portfolio design to match Arlen McCluskey editorial aesthetic"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) &rarr; **Add New Project** &rarr; select **`Masahisa-Sekita-Website`**.
3. Click **Deploy**. Vercel will automatically build and publish your site with continuous deployment on every git push.
