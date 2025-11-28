# 🍡 Manggahan Sweets

> **Anime-Inspired Desserts @ Manggahan Festival, Guimaras**
> Sweet. Aesthetic. 100% Instagrammable. No app needed — just order and enjoy!

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black"/>
  <img alt="Vite" src="https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"/>
  <img alt="Sanity.io" src="https://img.shields.io/badge/Sanity.io-%23F43B76.svg?style=for-the-badge&logo=sanity&logoColor=white"/>
  <img alt="Web3Forms" src="https://img.shields.io/badge/Web3Forms-White?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzAwMCI+PHBhdGggZD0iTTExLjk5OTkgMS4wMDAxTDIzLjk5OTkgNy4wMDAxTDExLjk5OTkgMTMuMDAwMUYxLjAwMDFaIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTEyLjAwMDIgMTMuMDAwMUwyLjAwMDIgNy4wMDAxTDEyLjAwMDIgMS4wMDAxTDEyLjAwMDIgMTMuMDAwMVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="/>
  <img alt="Vercel" src="https://img.shields.io/badge/Vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"/>
</p>

---

## 🎌 About

**Manggahan Sweets** is a lightweight, festival-exclusive online menu showcasing limited-edition **anime-themed desserts** at the **Manggahan Festival in Guimaras, Philippines**.

Built for **speed, simplicity, and charm** — no login, no app, no fuss. Customers simply browse, tap, and send their order via **Web3Forms**.

Perfect for tourists, locals, and anime fans looking for a sweet, aesthetic treat during the festival!

---

## 🍥 Key Features

The application is built for ultimate speed and convenience in a busy festival environment.

* **Beautiful, Responsive Design:** Works seamlessly on mobile phones, tablets, and desktop computers.
* **Anime-Themed Dessert Menu:** Clearly organized menu with dynamic categories like "Best Seller," "New," and "Drink."
* **Dynamic Content via Sanity.io:** Menu items, prices, and descriptions can be updated by the vendor instantly without needing code changes or redeployment.
* **Zero-Backend Ordering:** Orders are placed using a pre-filled WhatsApp message or via a secure **Web3Forms** contact form, eliminating the need for database storage or user authentication.
* **Fast Static Deployment:** Hosted on **Vercel** with a global CDN for near-instant load times.
* **Aesthetic Branding:** Custom dango logo and a pink-to-purple gradient aesthetic.

---

## 🛠️ Technology Stack

| Layer | Technology Used | Rationale |
| :--- | :--- | :--- |
| **Frontend** | React, Vite, Tailwind CSS | Fast development, minimal bundle size, utility-first styling for quick responsiveness. |
| **Content** | Sanity.io (headless CMS) | Allows non-developers (vendors) to easily update the menu and prices dynamically. |
| **Forms** | Web3Forms (zero-backend) | Handles form submission securely to vendor's email without needing a custom server/API. |
| **Hosting** | Vercel | Provides free, fast, global static site deployment for optimal performance. |

> ⚠️ **Architectural Note:** This is a **static storefront** with a headless CMS. The project deliberately **avoids** complex backend technologies like Firebase, Node.js, Express, or MongoDB to ensure simplicity, zero maintenance, and cost-free operation.

---

## 🌐 Live Application

Experience the live demo of the Manggahan Sweets online menu:

👉 **https://manggahan-sweets.vercel.app**

> 📌 **Order Flow & Disclaimer:**
>
> 1.  User selects desserts.
> 2.  Clicks "Send Order via WhatsApp" (or Web3Forms button).
> 3.  A pre-filled message is sent directly to the vendor (configured in `WelcomePage.jsx`).
> 4.  **No payments are processed online.** All transactions are **cash-on-pickup** at the festival booth.

---

## 📸 Project Gallery

<details>
<summary><strong>✨ Manggahan Sweets Interface Preview</strong></summary>

---
![Manggahan Sweets Hero Section](https://manggahan-sweets.vercel.app/og-preview.jpg)
*Figure 1. Anime desserts meet Filipino festival spirit.*

</details>

---

## 🚀 Getting Started (For Developers)

1.  **Clone the repo**
    ```bash
    git clone [https://github.com/your-username/ManggahanFestival.git](https://github.com/your-username/ManggahanFestival.git)
    cd ManggahanFestival
    ```
2.  **Install dependencies**
    ```bash
    npm install
    ```
3.  **Start dev server**
    ```bash
    npm run dev
    ```
4.  **(Optional) Connect your Sanity project**
    Add your `SANITY_PROJECT_ID` and `SANITY_DATASET` in `.env.local`.
5.  **Deploy to Vercel** with one click!

---

## 🇵🇭 Made with Love for Guimaras

Celebrating the Manggahan Festival — a tribute to Guimaras’ world-famous mangoes and vibrant culture.

*Support local. Eat sweet. Stay anime.*