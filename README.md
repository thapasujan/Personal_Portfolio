# Personal Portfolio 👨‍💻

**Welcome!**
This repository contains my personal portfolio website — a modern, responsive platform built with **React** and **Tailwind CSS** to showcase my skills, projects, and professional experience as a software and web developer.

---

## 🚀 About the Project

My personal portfolio is designed to present who I am, what I build, and how I solve problems with clean, reliable code. It highlights:

* 💼 My experience and roles
* 🛠 Skills in full-stack technologies
* 📂 Projects with links and descriptions
* 📬 Contact section for connecting with me

This portfolio helps me share my work with prospective employers, collaborators, and anyone interested in my development journey.

---

## 💻 Built With

✔ **React** — UI library for building interactive interfaces
✔ **Tailwind CSS** — utility-first styling framework
✔ **Vite** — fast build tooling for development

---

## 🌟 Features

* Fully responsive layout
* Clean and modern design
* Easy navigation between sections
* Showcases skills, projects, and contact information

---

## 📁 Folder Structure

```
📦 Personal_Portfolio
├── public
├── src
├── .gitignore
├── README.md
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ Getting Started (Clone & Run Locally)

Follow these steps to run the project on your local machine:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/Personal_Portfolio.git
```

--Change the details shown in portfolio as per yours in code.

### 2️⃣ Navigate into the project folder

```bash
cd Personal_Portfolio
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start the development server

```bash
npm run dev
```

The app will run locally at:

```
http://localhost:5173
```

---

## 📦 Build the Project

To create a production-ready build:

```bash
npm run build
```

This command generates an optimized **`dist/`** folder, which is used for deployment.

---

## 🚀 Deploying on Vercel

You can easily deploy this portfolio on **Vercel**:

### Option 1: Deploy using GitHub (Recommended)

1. Push this repository to GitHub
2. Go to 👉 [https://vercel.com](https://vercel.com)
3. Click **New Project**
4. Import your GitHub repository
5. Configure the project:

   * **Framework Preset:** Vite
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
6. Click **Deploy**

🎉 Your portfolio will be live in seconds!

---

### ⚠️ Important Note (Vite + Vercel)

Make sure your `vite.config.js` **does NOT** have a custom base path like this:

```js
base: "/Personal_Portfolio/"
```

For Vercel, the base should be `/` (default):

```js
export default defineConfig({
  plugins: [react()],
})
```

---

## 📌 Want to Contribute?

This portfolio is open source! You’re welcome to:

* 📝 Suggest improvements
* ✨ Add new sections
* 🐛 Report bugs

Just fork the repo, make your changes, and create a pull request 🎉

---

## 📫 Connect With Me

I’d love to connect! Feel free to reach out on GitHub or through links on the website.

---

## 🧾 License

This project is open source — feel free to use or adapt it as a reference ❤️
