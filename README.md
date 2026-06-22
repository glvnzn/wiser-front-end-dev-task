# Wiser Frontend Task — Figma to Build (Pixel Perfect)

Thanks for taking the time to do this frontend exercise.

The goal of this task is to assess how you translate a Figma design into a clean, accurate frontend build — focusing on layout, spacing, typography, and attention to detail.

---

## 🧩 Task

👉 **[View the Figma design here](https://www.figma.com/design/3EZV6GR1RwDd6YlJBvBtrS/FED---TASK?node-id=0-1&t=DsKb8uM2zJ2DVmjb-1)**

Your job is to build this UI as closely as possible in **Next.js**, matching the design pixel-perfectly.

---

## ✅ What to build

Build:

- A **Hero** component that renders a h1, body, image and search bar
  - The hero image can be exported directly from the Figma file
- A **Job Listing** component that renders multiple rows
- A **Job Row** component that matches the Figma layout
- Each row should include:
  - Job title
  - Team
  - Brand/logo placeholder text
  - Location
  - “View job” button/link

Mock job data is already provided.

---

## 🗂 Where to work

The starter project is already set up.

You’ll mainly be editing:

- `app/components/Hero/Hero.tsx`
- `app/components/JobListing/JobListing.tsx`
- `app/components/JobRow/JobRow.tsx`
- `app/components/Hero/Hero.module.scss`
- `app/components/JobListing/JobListing.module.scss`
- `app/components/JobRow/JobRow.module.scss`

The mock data lives here:

- `data/mockJobs.ts`

---

## 🎯 What we’re looking for

This task is mostly about design accuracy:

- Grid/alignment (ensure Figma layout guides are on and followed)
- Spacing (padding, margins, gaps)
- Typography hierarchy
- Button styling
- Responsiveness — the design includes a mobile layout, so the build should adapt cleanly between desktop and mobile
- Clean, readable component structure
- Optional: hover states, favourite functionality, navigation bar (only needed if you're adding the favourite functionality), test files

Feel free to stick with system fonts — no need to match the exact typeface.

---

## ⏱ Time expectation

Please spend no more than **60-120 minutes**.

We’d rather see a smaller piece done really well than lots of unfinished extras.

---

## ▶️ Running the project

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

---

## 📤 Submission

Follow the instructions in order to complete the test and push your changes back to your fork. Spend no longer than 2 hours doing the initial task and extended tasks.

If you would like to add any notes about the test such as how you would further improve it or productionise it, feel free to outline these in your README.

Send us the URL of your fork or a Vercel deployment (no zip files) and ensure we can access it.
