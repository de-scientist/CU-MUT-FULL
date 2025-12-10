import React from "react";
import { AdminLayout } from "../../layout/AdminLayout";

export const AdminProgramsPage: React.FC = () => {
  return (
    <AdminLayout>
      <h1 className="mb-3 text-2xl font-heading text-mutcu-navy">
        Programs (Placeholder)
      </h1>
      <p className="max-w-xl text-sm text-slate-700">
        This admin page will manage MUTCU programs (e.g., weekly meetings,
        special services). The backend already exposes program-related routes
        under <code className="font-mono text-xs">/api/programs</code> that can
        be wired into this UI for listing and editing program schedules.
      </p>
    </AdminLayout>
  );
};