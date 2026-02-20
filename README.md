# 🌿 Rica's Plants — E-Commerce Store

A responsive plant e-commerce web app built as a capstone project. Browse a catalog of plants, view individual plant details, manage a shopping cart, and authenticate with sign-in/sign-up flows.

---

## ✨ Features

- **Authentication** — Sign up and sign in with JWT-based sessions persisted in `localStorage`
- **Plant Catalog** — Browse all available plants with responsive grid layout
- **Plant Detail Page** — View full plant info including pot color variants, description, and pricing
- **Shopping Cart** — Add items with quantity/color selection; remove items; view subtotal
- **Responsive Design** — Mobile-friendly layout with a dedicated mobile nav menu
- **Route Protection** — Redirects unauthenticated users to sign-in, and signed-in users away from auth pages

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | [Preact](https://preactjs.com/) (React-compatible) |
| Routing | React Router DOM v6 |
| Styling | Tailwind CSS v3 |
| Build Tool | Vite |
| Fonts | Google Fonts — Playfair Display, Lato |
| Icons | Font Awesome |
| Auth | JWT (`jwt-decode`) |
| Scroll Lock | `react-remove-scroll` |

---

## 📁 Project Structure

```
src/
├── auth/                   # Sign-in and sign-up pages + shared form components
├── context/                # React context for session state
├── pages/
│   ├── PlantListPage/      # Plant catalog grid
│   ├── PlantShowPage/      # Individual plant detail view
│   └── PlantItem.jsx       # Plant card component
├── services/               # API abstraction layer (plants, cart, user, fetch)
└── sharedComponents/
    ├── NavBar/             # Nav with user menu, cart modal, mobile menu
    ├── LoadingSpinner.jsx
    ├── RedirectToPlantsIfSignedIn.jsx
    ├── RedirectToSignInIfSignedOut.jsx
    └── util.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm

### Install & Run

```bash
npm install
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔌 API

This app connects to a private learning API backend. The base URL and API key are hardcoded in `src/services/apiFetch.js`. The backend is not publicly available, so the app cannot be fully deployed without access to that service.

---

## 📸 Screenshots

> Sign-in page features a full-height botanical photo overlay alongside the auth form. The plant catalog renders responsive cards with interactive pot color swatches. The cart modal slides in from the right with live item totals.

---

## 📝 Notes

- This is a capstone/learning project — the checkout flow displays a placeholder alert rather than processing real payments.
- The `tailwind.config.js` extends the theme with Playfair Display and Lato font families.

---

