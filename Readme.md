# MUTCU Website – React + TypeScript + Tailwind + shadcn/ui

A modern, responsive multi-page application for **Murang’a University of Technology Christian Union (MUTCU)**, built with:

- **React + TypeScript**
- **Vite** (bundler/dev server)
- **Tailwind CSS** (utility‑first styling)
- **shadcn/ui** (accessible React components)
- **React Router** (SPA navigation)
- **React Query** (server/state management)
- **Zustand** (lightweight global state)

The app faithfully reproduces and improves the original multi-page static site using brand fonts, colors, and upgraded UI/UX.

---

## ✨ Features

- **Full site as SPA**
  - Home, About, Ministries, Events, Resources, Gallery, Contact
  - Dedicated subpages for **committees** (executive & ministry coordinators)
  - Detailed **ministry pages** (Music, Bible Study, Missions, Creative Arts, Prayer, Hospitality, Technical, Welfare, RMC)

- **Branding preserved**
  - Fonts: **Montserrat** (headings) & **Lato** (body)
  - Colors:
    - Navy: `#04003d`
    - Orange: `#ff9700`
    - Red: `#ff1229`
    - Teal: `#30d5c8`

- **Modern UI stack**
  - Tailwind for layout and responsive design
  - shadcn/ui for buttons, dialogs, and base components
  - Smooth responsive hero sections and cards

- **State & Data**
  - React Query for events/testimonials/resources data fetching (easily swappable to real APIs)
  - Zustand UI store for navbar scroll state and global confirmation dialog

---

## 🧱 Tech Stack

- **Framework**: React 18 + TypeScript
- **Bundler/Dev**: Vite
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **UI Library**: shadcn/ui (Radix-based components)
- **State Management**:
  - React Query (`@tanstack/react-query`)
  - Zustand
- **Icons**: Font Awesome (via CDN)

---

## 📁 Project Structure

The exact structure may vary slightly, but the core layout looks like:

```text
src/
  main.tsx
  router.tsx
  index.css

  layout/
    MainLayout.tsx

  store/
    uiStore.ts

  components/
    Navbar.tsx
    Footer.tsx
    ConfirmationDialog.tsx
    LeaderProfileLayout.tsx
    MinistryDetailLayout.tsx
    ui/
      button.tsx
      dialog.tsx
      ...   (other shadcn components you generate)

  pages/
    HomePage.tsx
    AboutPage.tsx
    MinistriesPage.tsx
    EventsPage.tsx
    ResourcesPage.tsx
    GalleryPage.tsx
    ContactPage.tsx

    committees/
      ChairmanPage.tsx
      ViceChair1Page.tsx
      ViceChair2Page.tsx
      SecretaryPage.tsx
      ViceSecretaryPage.tsx
      TreasurerPage.tsx
      BibleStudyCoordinatorPage.tsx
      PrayerCoordinatorPage.tsx
      MissionsCoordinatorPage.tsx
      MusicCoordinatorPage.tsx
      TechnicalCoordinatorPage.tsx
      CreativeCoordinatorPage.tsx

    ministries/
      MusicMinistryPage.tsx
      BibleStudyDiscipleshipPage.tsx
      MissionsEvangelismPage.tsx
      CreativeArtsPage.tsx
      PrayerMinistryPage.tsx
      HospitalityMinistryPage.tsx
      TechnicalDepartmentPage.tsx
      WelfareCommitteePage.tsx
      RmcPage.tsx

public/
  assets/
    images/
      ... (original site images)


🚀 Getting Started

1. Install dependencies
npm install

2. Configure Tailwind

Ensure tailwind.config.ts includes:

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mutcu-navy": "#04003d",
        "mutcu-orange": "#ff9700",
        "mutcu-red": "#ff1229",
        "mutcu-teal": "#30d5c8",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
      boxShadow: {
        "mutcu-card": "0 8px 20px rgba(0, 0, 0, 0.12)",
        "mutcu-card-lg": "0 15px 30px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;

And src/index.css should import Tailwind layers and set base typography.

3. Install shadcn/ui components

Install shadcn/ui and generate at least button and dialog:

# Example — adjust if your setup differs
npm install -D tailwindcss postcss autoprefixer
npm install @radix-ui/react-dialog class-variance-authority clsx tailwind-merge
# Run shadcn CLI as per its docs and generate:
#  - button
#  - dialog

Place generated components under src/components/ui/.

4. Install core libraries

If not already installed:
npm install react-router-dom @tanstack/react-query zustand

🧭 Routing

Routing is centralized in src/router.tsx using React Router:

•  Top‑level pages
◦  / – HomePage
◦  /about – AboutPage
◦  /ministries – MinistriesPage
◦  /events – EventsPage
◦  /resources – ResourcesPage
◦  /gallery – GalleryPage
◦  /contact – ContactPage
•  Committees
◦  /committees/chairman
◦  /committees/vice-chair1
◦  /committees/vice-chair2
◦  /committees/secretary
◦  /committees/vice-secretary
◦  /committees/treasurer
◦  /committees/bible-study
◦  /committees/prayer
◦  /committees/missions
◦  /committees/music
◦  /committees/technical
◦  /committees/creative
•  Ministry detail pages
◦  /ministries/music
◦  /ministries/bible-study-discipleship
◦  /ministries/missions-evangelism
◦  /ministries/creative-arts
◦  /ministries/prayer
◦  /ministries/hospitality
◦  /ministries/welfare-committee
◦  /ministries/technical-department
◦  /ministries/rmc

main.tsx wires AppRouter inside a QueryClientProvider for React Query.



🧠 State Management

•  Zustand (src/store/uiStore.ts)
◦  Tracks navbar scroll state for styling (isScrolled).
◦  Global confirmation dialog state (confirmation.open, message).
•  React Query
◦  Used for events, testimonials, and other resource lists (currently mocked).
◦  Easy to replace with real API endpoints later.



🧪 Scripts

Typical Vite scripts (from package.json):

# Start dev server
npm run dev

# Type-check & build for production
npm run build

# Preview production build locally
npm run preview

# (Optional) lint command if configured
npm run lint


🎨 Theming & Customization

•  Fonts
◦  Loaded via Google Fonts in index.html:
▪  Montserrat for headings (font-heading)
▪  Lato for body text (font-body)
•  Colors
◦  Defined in Tailwind theme as mutcu-navy, mutcu-orange, mutcu-red, mutcu-teal.
◦  Buttons, section backgrounds, overlays, and highlights consistently use these.
•  Layout
◦  MainLayout wraps all pages with:
▪  Navbar (React Router links)
▪  Page content (children)
▪  Footer
▪  Global ConfirmationDialog for form submissions.



🔧 How to Integrate Real Backends

Currently, data such as events and resources are mocked in memory for demo purposes. To connect to a real backend:

1. Replace inline arrays (e.g. eventsData in EventsPage) with real fetch functions.
2. Update React Query queryFn to call your API:

const { data } = useQuery({
  queryKey: ["events"],
  queryFn: async () => {
    const res = await fetch("/api/events");
    return res.json();
  },
});

3. Do similar replacements for testimonials, resources, etc.



🤝 Contributing

1. Fork the repository.
2. Create a feature branch:

git checkout -b feature/my-change

3. Make your changes and ensure the app builds:
npm run build

4. Open a Pull Request with a clear description of:
◦  What changed
◦  Why it’s needed
◦  Screenshots (if UI-related)



📜 License

You can choose the license that best fits your context (e.g. MIT). Example:

MIT License – See LICENSE file for details.

🙌 Acknowledgements

•  Original design and content by MUTCU Tech Team.
•  Frameworks and tooling:
◦  React, Vite, TypeScript
◦  Tailwind CSS
◦  shadcn/ui
◦  React Router
◦  React Query
◦  Zustand
