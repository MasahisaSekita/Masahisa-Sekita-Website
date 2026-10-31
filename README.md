# Masahisa Sekita — Personal Portfolio Website

A sleek, responsive, and data-driven portfolio website designed to showcase professional experience in **Product & Business Intelligence Engineering**, full-stack software development, and AI systems. Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, optimized for instant zero-configuration deployment to **Vercel**.

---

## ✨ Features

- **⚡ Modern Tech Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + Lucide React.
- **🎯 Tailored Content:** Highlights experience at **YOBOLabs.ai**, academic foundation at the **University of Toronto (UTSC)**, and featured projects like **Course Matrix**.
- **🧩 Single Source of Truth:** All projects, experiences, skills, and links live in `data/portfolio.ts`—edit this one file to update your site!
- **📱 Fully Responsive:** Clean layout across mobile phones, tablets, and desktop displays.
- **🚀 Vercel Ready:** Pre-configured for automatic build and deployment upon git push.
- **🔍 SEO & OpenGraph Ready:** Includes complete meta tags, keywords, social card preview settings, and favicon support.

---

## 🛠️ Project Structure

```
Masahisa-Sekita-Website/
├── app/
│   ├── globals.css         # Tailwind directives and custom utility styles
│   ├── layout.tsx          # Root layout with SEO and OpenGraph metadata
│   └── page.tsx            # Main page assembling all portfolio sections
├── components/
│   ├── Navbar.tsx          # Sticky glassmorphism header & navigation
│   ├── Hero.tsx            # Hero introduction, status badge, and CTAs
│   ├── About.tsx           # Narrative, focus areas, and education
│   ├── ExperienceSection.tsx # Timeline showcasing YOBOLabs experience
│   ├── ProjectsSection.tsx # Interactive filterable project showcase
│   ├── SkillsSection.tsx   # Categorized skills matrix
│   ├── ContactSection.tsx  # Direct email copy, LinkedIn & GitHub links
│   └── Footer.tsx          # Footer and quick navigation
├── data/
│   └── portfolio.ts        # Editable personal data, experiences, and projects
├── tailwind.config.ts      # Tailwind CSS styling configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Scripts & dependencies
```

---

## 💻 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🚀 Deploying to Vercel (1-Click)

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Build personal portfolio website"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New Project"** and select **`Masahisa-Sekita-Website`**.
4. Leave all build settings as default (Vercel automatically detects Next.js).
5. Click **"Deploy"**!
6. Your portfolio will be live at `https://masahisa-sekita.vercel.app` (or your custom domain) with free SSL and automatic redeployments on every git push.

---

## 📝 Updating Your Content

To update any text, roles, project links, or skills, simply edit [`data/portfolio.ts`](./data/portfolio.ts). Changes will instantly reflect on the website without needing to touch any UI component code.
