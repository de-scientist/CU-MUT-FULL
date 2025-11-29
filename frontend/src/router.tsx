import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Public pages
import HomePage from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { MinistriesPage } from "./pages/MinistriesPage";
import { EventsPage } from "./pages/EventsPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";
import { JoinMinistryPage } from "./pages/JoinMinistryPage";
//import { RegisterMemberPage } from "./pages/RegisterMemberPage";
import { NotFoundPage } from "./pages/NotFoundPage";

// Admin pages
import { AdminLoginPage } from "./pages/admin/AdminLoginPage";
import { AdminDashboardPage } from "./pages/admin/AdminDashboardPage";
import { AdminEventsPage } from "./pages/admin/AdminEventsPage";
import { AdminMinistryApplicationsPage } from "./pages/admin/AdminMinistryApplicationsPage";
//import { AdminMembersPage } from "./pages/admin/AdminMembersPage";
//import { AdminFinancesPage } from "./pages/admin/AdminFinancesPage";
//import { AdminProgramsPage } from "./pages/admin/AdminProgramsPage";
//import { AdminEvaluationsPage } from "./pages/admin/AdminEvaluationsPage";
//import { AdminNominationsPage } from "./pages/admin/AdminNominationsPage";
//import { AdminReportsPage } from "./pages/admin/AdminReportsPage";

// Committee pages
import { ChairmanPage } from "./pages/committees/ChairmanPage";
import { ViceChair1Page } from "./pages/committees/ViceChair1Page";
import { ViceChair2Page } from "./pages/committees/ViceChair2Page";
import { SecretaryPage } from "./pages/committees/SecretaryPage";
import { ViceSecretaryPage } from "./pages/committees/ViceSecretaryPage";
import { TreasurerPage } from "./pages/committees/TreasurerPage";
import { BibleStudyCoordinatorPage } from "./pages/committees/BibleStudyCoordinatorPage";
import { PrayerCoordinatorPage } from "./pages/committees/PrayerCoordinatorPage";
import { MissionsCoordinatorPage } from "./pages/committees/MissionsCoordinatorPage";
import { MusicCoordinatorPage } from "./pages/committees/MusicCoordinatorPage";
import { TechnicalCoordinatorPage } from "./pages/committees/TechnicalCoordinatorPage";
import { CreativeCoordinatorPage } from "./pages/committees/CreativeCoordinatorPage";

// Ministry detail pages
import { MusicMinistryPage } from "./pages/ministries/MusicMinistryPage";
import { BibleStudyDiscipleshipPage } from "./pages/ministries/BibleStudyDiscipleshipPage";
import { MissionsEvangelismPage } from "./pages/ministries/MissionsEvangelismPage";
import { CreativeArtsPage } from "./pages/ministries/CreativeArtsPage";
import { PrayerMinistryPage } from "./pages/ministries/PrayerMinistryPage";
import { HospitalityMinistryPage } from "./pages/ministries/HospitalityMinistryPage";
import { WelfareCommitteePage } from "./pages/ministries/WelfareCommitteePage";
import { TechnicalDepartmentPage } from "./pages/ministries/TechnicalDepartmentPage";
import { RmcPage } from "./pages/ministries/RmcPage";

import { useAuthStore } from "./store/authStore";

const RequireAdmin: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = useAuthStore((s) => s.token);
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }
  return <>{children}</>;
};

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {/* Public site */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/ministries" element={<MinistriesPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/ministries/join" element={<JoinMinistryPage />} />
      {/* <Route path="/register" element={<RegisterMemberPage />} /> */}

      {/* Committee (Executive Council & Coordinators) */}
      <Route path="/committees/chairman" element={<ChairmanPage />} />
      <Route path="/committees/vice-chair1" element={<ViceChair1Page />} />
      <Route path="/committees/vice-chair2" element={<ViceChair2Page />} />
      <Route path="/committees/secretary" element={<SecretaryPage />} />
      <Route
        path="/committees/vice-secretary"
        element={<ViceSecretaryPage />}
      />
      <Route path="/committees/treasurer" element={<TreasurerPage />} />
      <Route
        path="/committees/bible-study"
        element={<BibleStudyCoordinatorPage />}
      />
      <Route path="/committees/prayer" element={<PrayerCoordinatorPage />} />
      <Route
        path="/committees/missions"
        element={<MissionsCoordinatorPage />}
      />
      <Route path="/committees/music" element={<MusicCoordinatorPage />} />
      <Route
        path="/committees/technical"
        element={<TechnicalCoordinatorPage />}
      />
      <Route
        path="/committees/creative"
        element={<CreativeCoordinatorPage />}
      />

      {/* Ministry detail pages */}
      <Route path="/ministries/music" element={<MusicMinistryPage />} />
      <Route
        path="/ministries/bible-study-discipleship"
        element={<BibleStudyDiscipleshipPage />}
      />
      <Route
        path="/ministries/missions-evangelism"
        element={<MissionsEvangelismPage />}
      />
      <Route path="/ministries/creative-arts" element={<CreativeArtsPage />} />
      <Route path="/ministries/prayer" element={<PrayerMinistryPage />} />
      <Route
        path="/ministries/hospitality"
        element={<HospitalityMinistryPage />}
      />
      <Route
        path="/ministries/welfare-committee"
        element={<WelfareCommitteePage />}
      />
      <Route
        path="/ministries/technical-department"
        element={<TechnicalDepartmentPage />}
      />
      <Route path="/ministries/rmc" element={<RmcPage />} />

      {/* Admin auth */}
      <Route path="/admin/login" element={<AdminLoginPage />} />

      {/* Admin protected routes */}
      <Route
        path="/admin"
        element={
          <RequireAdmin>
            <AdminDashboardPage />
          </RequireAdmin>
        }
      />
      <Route
        path="/admin/events"
        element={
          <RequireAdmin>
            <AdminEventsPage />
          </RequireAdmin>
        }
      />
      <Route
        path="/admin/ministry-applications"
        element={
          <RequireAdmin>
            <AdminMinistryApplicationsPage />
          </RequireAdmin>
        }
      />
      {/* <Route
        path="/admin/members"
        element={
          <RequireAdmin>
            <AdminMembersPage />
          </RequireAdmin>
        }
      /> */}
      {/* <Route
        path="/admin/finances"
        element={
          <RequireAdmin>
            <AdminFinancesPage />
          </RequireAdmin>
        }
      /> */}
      {/* <Route
        path="/admin/programs"
        element={
          <RequireAdmin>
            <AdminProgramsPage />
          </RequireAdmin>
        }
      /> */}
      {/* <Route
        path="/admin/evaluations"
        element={
          <RequireAdmin>
            <AdminEvaluationsPage />
          </RequireAdmin>
        }
      /> */}
      {/* <Route
        path="/admin/nominations"
        element={
          <RequireAdmin>
            <AdminNominationsPage />
          </RequireAdmin>
        }
      /> */}
      {/* <Route
        path="/admin/reports"
        element={
          <RequireAdmin>
            <AdminReportsPage />
          </RequireAdmin>
        }
      /> */}

      {/* 404 fallback */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
