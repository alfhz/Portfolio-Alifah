# 🌟 Alifah's Portfolio

Welcome to the source code repository of my personal portfolio website! This website is designed to showcase my profile, professional experiences, and various assignments/projects (including creative video tasks and organizational case study analysis).

🌐 **Live Demo:** [https://portfolio-alifah.pages.dev/](https://portfolio-alifah.pages.dev/)

---

## 🚀 Technologies Used

This website is built using modern web technologies to ensure fast performance and a fully responsive design:
* **Framework:** [Nuxt 3](https://nuxt.com/) (Vue.js based)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Language:** TypeScript / JavaScript
* **Deployment & Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/)

---

## 🛠️ Getting Started (Local Development)

Follow these instructions to set up the project and run it on your local machine.

### 1. Prerequisites
Before you begin, ensure you have the following installed:
* **Node.js**: Version 18.x or higher (Version 22.x is recommended).
* **Git**: To clone the repository.
* **IDE/Editor**: [VS Code](https://code.visualstudio.com/) is highly recommended, along with the [Vue - Official (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension for the best TypeScript and Vue support.

### 2. Installation
Clone this repository to your local machine and install all the required dependencies:

```bash
# Clone the repository
git clone [https://github.com/alfhz/Portfolio-Alifah.git](https://github.com/alfhz/Portfolio-Alifah.git)

# Navigate into the project directory
cd Portfolio-Alifah

# Install dependencies using npm
npm install
```

### 3. Development Server
To start the local development server with hot-module replacement (HMR) enabled:

```bash
npm run dev
```
Once the server starts, open your browser and visit `http://localhost:3000` to view the website. Any changes you make in the code will automatically reflect in the browser.

### 4. Build for Production (Static Site)
Since this project is hosted on Cloudflare Pages as a static site, use the `generate` command to pre-render every route of the application into static HTML files:

```bash
npm run generate
```
The generated static files will be placed inside the `dist/` directory, ready to be deployed to any static hosting service.

### 5. Preview Production Build Locally
To make sure everything works perfectly before deploying, you can preview the generated static production build locally:

```bash
# You can use npx serve to host the dist folder locally
npx serve dist
```

---

## 📝 Deployment Notes

This project is configured for continuous deployment (CI/CD) via **Cloudflare Pages**. It will automatically trigger a new build and deploy the site whenever a new commit is pushed to the `main` branch on GitHub.

**Cloudflare Build Settings:**
* **Framework preset:** `Nuxt.js`
* **Build command:** `npm run generate`
* **Build output directory:** `dist`

---
*Made with ❤️ by Alifah.*