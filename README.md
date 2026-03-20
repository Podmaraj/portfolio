# 🚀 Podmaraj Boruah — Developer Portfolio

A modern, scalable **Next.js 14 portfolio** built with **TypeScript, Tailwind CSS, and Docker**.
Designed with clean UI, performance, and production-ready architecture.

---

## 🌐 Live Preview

> *(Add your deployed link here)*

---

## 🛠️ Tech Stack

* ⚡ Next.js 14 (App Router)
* 🎯 TypeScript
* 🎨 Tailwind CSS
* 🐳 Docker (Containerized)
* 🚀 Vercel (Deployment)



## ✨ Features

* Modern UI & animations
* Fully responsive design 📱
* Clean component architecture
* Docker-ready setup
* Security headers configured 🔒
* Scalable folder structure

---

## ⚡ Quick Start

```bash
npm install
npm run dev
```

👉 Open: http://localhost:3000

---

## 🐳 Run with Docker

```bash
docker build -t portfolio-app .
docker run -p 3000:3000 portfolio-app
```

---

## 🚀 Deployment (Vercel)

```bash
npm install -g vercel
vercel --prod
```

## 📁 Project Structure

```
portfolio/
├── public/                  # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Main page
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── sections/        # Page sections (Hero, About, etc.)
│   │   └── ui/
│   │       └── Cursor.tsx
│   │
│   ├── data/
│   │   └── index.ts         # Static content
│   │
│   ├── hooks/
│   │   └── index.ts         # Custom hooks
│   │
│   └── lib/                 # Utility functions
│
├── .dockerignore
├── .gitignore
├── Dockerfile               # Docker config
├── next.config.js           # Next.js config (standalone enabled)
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── README.md
```

---

## 🔒 Security

Configured HTTP headers:

* X-Frame-Options
* X-Content-Type-Options
* Referrer Policy
* Permissions Policy

##

---

## 🤝 Contributing

Feel free to fork and contribute!

---

## 📬 Contact

**Podmaraj Boruah**\

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
