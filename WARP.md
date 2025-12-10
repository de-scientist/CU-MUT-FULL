# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project layout

- `backend/` – Node.js/Express REST API backed by MongoDB (Mongoose). Handles admin authentication, members, events, finances, resources, gallery, programs, evaluations, nominations, and reporting.
- `frontend/` – Vite + React + TypeScript single-page app for the public MUTCU site and the admin dashboard.

There is currently no root-level README or WARP rules file; this document is the primary project-specific guidance.

## Commands and workflows

### Backend (`backend/` – mutcu-admin-api)

From the repository root:

- Install dependencies:
  - `cd backend`
  - `npm install`
- Run the API in development (with auto-reload via nodemon):
  - `cd backend`
  - `npm run dev`
- Run the API in a simple production-style mode:
  - `cd backend`
  - `npm start`

Environment configuration for the backend:

- Expected environment variables (e.g. in a `.env` file in `backend/` which is **not** committed):
  - `MONGODB_URI` – MongoDB connection string (required for the API to start).
  - `JWT_SECRET` – secret key for signing and verifying admin JWTs.
  - `ADMIN_SETUP_SECRET` – shared secret required to call the one-time admin registration endpoint (`POST /api/auth/register`).
  - `PORT` (optional) – port for the Express server; defaults to `4000` if not set.

Notes:

- The Express server entrypoint is `backend/src/server.js`. It connects to MongoDB first (via `connectDB`) and then starts listening on `PORT`.
- If `MONGODB_URI` is missing or the connection fails, the process exits with a non-zero code.

### Frontend (`frontend/` – mutcu-frontend)

From the repository root:

- Install dependencies:
  - `cd frontend`
  - `npm install`
- Run the Vite dev server:
  - `cd frontend`
  - `npm run dev`
- Build the production bundle:
  - `cd frontend`
  - `npm run build`
- Preview the production build with Vite:
  - `cd frontend`
  - `npm run preview`

Environment configuration for the frontend:

- API base URL is configured at build time using Vite env variables in `frontend/src/lib/api.ts`:
  - `VITE_API_BASE_URL` – if set, `apiFetch` will send requests to `${VITE_API_BASE_URL}{path}`.
  - If `VITE_API_BASE_URL` is **not** set, the frontend falls back to `http://localhost:4000/api`, which assumes the backend is running locally on port `4000`.

### Testing and linting

- As of this snapshot, there are **no** defined test or lint scripts in `backend/package.json` or `frontend/package.json`, and there are no `*.test.*`/`*.spec.*` files or Jest/Vitest config files.
- If you introduce testing or linting tooling, update this section with the appropriate `npm run` commands and how to run a focused/single test.

## Backend architecture

### Overview

The backend is a classic Express + Mongoose API organized by domain:

- `src/server.js` – main entrypoint. Loads environment variables, configures CORS and JSON body parsing, defines a simple health route on `/`, and mounts feature routers under `/api/*` prefixes.
- `src/config/db.js` – exports `connectDB()`, which reads `MONGODB_URI` and connects via Mongoose. The server only starts listening once this resolves successfully.
- `src/models/` – Mongoose models for each domain:
  - `AdminUser.js` – admin login accounts with `email` and `passwordHash`, plus helpers for hashing and comparing passwords (using `bcryptjs`).
  - `Member.js` – members of the union, including contact info, gender, course, year, residence, baptism status, and ministries of interest.
  - `Event.js`, `FinanceTransaction.js`, `GalleryItem.js`, `MinistryApplication.js`, `Program.js`, `Resource.js`, `Evaluation.js`, `Nomination.js` – additional domain entities used by the admin area and reports.
- `src/middleware/auth.js` – JWT-based auth middleware:
  - Expects an `Authorization: Bearer <token>` header.
  - Verifies the token with `JWT_SECRET` and attaches `req.adminId` on success.
  - Returns `401` for missing or invalid tokens.
- `src/validation/` – request validation with `zod` for specific domains (e.g. `memberSchemas.js`, `eventSchemas.js`, `financeSchemas.js`, `ministryApplicationSchemas.js`).
- `src/routes/` – Express routers grouped by feature and mounted under `/api/*` prefixes in `server.js`:
  - `auth.js` – admin authentication and one-time admin user creation.
  - `members.js` – public member registration and admin-only member queries/statistics.
  - `events.js`, `resources.js`, `gallery.js` – CRUD operations for public-facing content managed via the admin UI.
  - `ministryApplications.js`, `finances.js`, `programs.js`, `evaluations.js`, `nominations.js` – admin-only management endpoints for their respective domains.
  - `reports.js` – summary reporting endpoints including CSV and PDF exports.

### Request lifecycle patterns

1. **Routing and mounting**
   - `src/server.js` wires up the routers:
     - `/api/auth` → `routes/auth.js`
     - `/api/events` → `routes/events.js`
     - `/api/resources` → `routes/resources.js`
     - `/api/gallery` → `routes/gallery.js`
     - `/api/ministry-applications` → `routes/ministryApplications.js`
     - `/api/members` → `routes/members.js`
     - `/api/finances` → `routes/finances.js`
     - `/api/reports` → `routes/reports.js`
     - `/api/programs` → `routes/programs.js`
     - `/api/evaluations` → `routes/evaluations.js`
     - `/api/nominations` → `routes/nominations.js`.

2. **Validation**
   - Routes that accept structured payloads first validate `req.body` with a corresponding Zod schema.
   - Example: `routes/members.js` uses `memberCreateSchema` from `validation/memberSchemas.js` to parse input when registering a new member, returning a `400` response with detailed `errors` if validation fails.

3. **Authentication and authorization**
   - Public operations (e.g. member self-registration) are exposed without auth.
   - Admin operations add the `auth` middleware:
     - Either per-route (e.g. `router.get("/", auth, ...)`) or via `router.use(auth)` for entire routers like `reports.js`.
   - Authenticated routes typically use Mongoose models directly to perform CRUD or aggregation.

4. **Persistence and domain logic**
   - Mongoose models encapsulate schemas and some behavior, e.g.:
     - `AdminUser` exposes `hashPassword` (static) and `comparePassword` (instance) to manage password storage and checking.
   - Aggregations are used for reporting endpoints:
     - `routes/members.js` aggregates gender stats.
     - `routes/reports.js` aggregates finance totals and overall counts.

5. **Reporting and exports**
   - `routes/reports.js` demonstrates advanced outputs:
     - `/api/reports/overview` – JSON summary of counts and finance totals.
     - `/api/reports/overview.csv` – same data serialized to CSV via `json2csv`.
     - `/api/reports/overview.pdf` – PDF report generated with `pdfkit`, streamed directly to the response with appropriate headers.

### Admin authentication flow

- **Admin registration (one-time setup)**
  - `POST /api/auth/register` expects `{ email, password, secret }`.
  - The `secret` must match `ADMIN_SETUP_SECRET` or the request is rejected with `403`.
  - On success, a new `AdminUser` is created with a hashed password.
- **Admin login**
  - `POST /api/auth/login` expects `{ email, password }`.
  - On successful credential check, responds with `{ token, email }`.
  - The token is a JWT signed with `JWT_SECRET` and carries the admin id and email.
- **Using the token**
  - The frontend stores the token in a Zustand store and in `localStorage` (`mutcu_token` / `mutcu_email`).
  - `apiFetch` attaches `Authorization: Bearer <token>` for requests where `authRequired` is `true` and clears auth state on `401` responses.

## Frontend architecture

### Tooling and config

- The frontend is a Vite app with React and TypeScript:
  - `vite.config.ts`:
    - Uses `@vitejs/plugin-react` and `@tailwindcss/vite`.
    - Configures an alias `"@"` → `./src` used throughout the codebase.
  - `tsconfig.json`:
    - `strict` TypeScript settings, `noEmit`, React JSX, and path mapping for `@/*`.
    - Adds type definitions for `node`, `react`, and `jest` (though Jest itself is not yet configured).

### Application entry and data layer

- `src/main.tsx`:
  - Creates a `QueryClient` from `@tanstack/react-query` and wraps the app with `QueryClientProvider`.
  - Imports global styles from `index.css`.
- `src/App.tsx`:
  - Delegates to the router via `<AppRouter />`.
- `src/router.tsx`:
  - Uses `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`.
  - Defines routes for:
    - Public pages (home, about, ministries, events, resources, gallery, contact, join ministry).
    - Committee/leadership profile pages.
    - Admin login and admin-only dashboards.
  - Wraps admin routes in a `RequireAdmin` component that reads the auth token from `useAuthStore` and redirects to `/admin/login` if missing.

### State management

- Zustand is used for simple global state, in `src/store/`:
  - `authStore.ts`:
    - Holds `token` and `email`.
    - Persists both in `localStorage` under `mutcu_token` and `mutcu_email` when `setAuth` is called.
    - Clears both from `localStorage` and memory when `clearAuth` is called.
    - Used by admin layouts and `apiFetch` to drive authentication.
  - `uiStore.ts`:
    - Tracks `isScrolled` for navbar styling.
    - Manages a global confirmation dialog state (`confirmation`) with helpers `showConfirmation` and `closeConfirmation`.
    - Used by `HomePage` for things like the prayer request and newsletter confirmation dialogs.

### API access

- `src/lib/api.ts` centralizes HTTP access:
  - Determines `API_BASE` from `import.meta.env.VITE_API_BASE_URL` or `"http://localhost:4000/api"` as a fallback.
  - `apiFetch<T>(path, options, authRequired)`:
    - Reads `token` and `clearAuth` from `useAuthStore`.
    - Assembles `fetch` options with JSON `Content-Type` and optional `Authorization: Bearer <token>` header.
    - Clears auth state automatically on `401` responses for authenticated calls.
    - Attempts to parse JSON error payloads and surfaces `status` and any Zod validation `errors` as `zodErrors` in a custom `ApiError` type.
  - All admin API interactions should go through `apiFetch` to keep error handling and auth consistent.

### Layout and components

- Layout components in `src/layout/`:
  - `AdminLayout.tsx`:
    - Provides the left-hand navigation and top bar for the admin area.
    - Reads the current admin `email` from `useAuthStore` and exposes a `Logout` action that clears auth and navigates to `/admin/login`.
    - Wraps `children` in a responsive layout (sidebar on larger screens, top bar on small screens).
  - `MainLayout.tsx` (not fully described here) is used for public-facing page structure.
- UI components in `src/components/`:
  - High-level components like `Navbar`, `Footer`, `JoinMinistryForm`, `LeaderProfileLayout`, and `MinistryDetailLayout` encapsulate common page sections.
  - `components/ui/` contains reusable, styled primitives (e.g. `button.tsx`, `dialog.tsx`, `utils.ts`) built on top of Radix UI and Tailwind CSS classes, similar to the shadcn/ui pattern.

### Pages and routing structure

- `src/pages/` holds screen-level components:
  - Public site pages (`HomePage`, `AboutPage`, `EventsPage`, `ResourcesPage`, etc.) compose sections and components to render the marketing/informational site. `HomePage` is a good starting point to see the overall design system and data flow.
  - `pages/admin/` contains admin-facing pages like `AdminDashboardPage`, `AdminEventsPage`, `AdminMinistryApplicationsPage`, etc. These typically wrap their content in `AdminLayout` and use `apiFetch` plus React Query to call the backend.
  - `pages/committees/` and `pages/ministries/` provide profile/detail pages for leaders and ministries.

## Coordination between frontend and backend

- **URL and routing conventions**
  - Backend routes are mounted under `/api/*` and the frontend assumes the same path structure when calling `apiFetch` (e.g. `apiFetch("/auth/login", ...)` → `POST /api/auth/login`).
- **Authentication**
  - The admin login page (`AdminLoginPage`) uses `useMutation` from React Query to call `/auth/login` via `apiFetch`.
  - On success, the response `{ token, email }` is stored in `authStore`, enabling `RequireAdmin` and `AdminLayout` to gate and personalize admin routes.
- **Error and validation handling**
  - Backend endpoints that use Zod (e.g. member registration) return a `400` response with an `errors` array.
  - `apiFetch` maps this into `zodErrors` on the thrown `ApiError`, allowing pages to display field-level validation messages if desired.
- **Reporting**
  - Admin-facing reporting or dashboard features should use the `/api/reports/*` endpoints, which already aggregate counts and finance totals and provide CSV/PDF exports.

When extending this project, prefer to follow the existing patterns:

- Add new Mongo-backed entities under `backend/src/models/` with a matching `backend/src/routes/*.js` router and (optionally) a `backend/src/validation/*` Zod schema module.
- Add new admin or public-facing screens under `frontend/src/pages/`, wire them into `frontend/src/router.tsx`, and reuse `AdminLayout`, `MainLayout`, `apiFetch`, and the Zustand stores where appropriate.
