import React from "react";
import { AdminLayout } from "../../layout/AdminLayout";

export const AdminDashboardPage: React.FC = () => {
  return (
    <AdminLayout>
      <h1 className="mb-4 text-2xl font-heading text-mutcu-navy">
        Admin Dashboard
      </h1>
      <p className="mb-6 text-sm text-slate-700">
        Manage events, resources, and gallery content for the MUTCU website.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-4 shadow-mutcu-card">
          <h2 className="text-sm font-semibold text-mutcu-navy mb-1">
            Events
          </h2>
          <p className="text-xs text-slate-600">
            Create, edit and delete upcoming events.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-mutcu-card">
          <h2 className="text-sm font-semibold text-mutcu-navy mb-1">
            Resources
          </h2>
          <p className="text-xs text-slate-600">
            Manage devotionals, sermons and guides.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-mutcu-card">
          <h2 className="text-sm font-semibold text-mutcu-navy mb-1">
            Gallery
          </h2>
          <p className="text-xs text-slate-600">
            Update images shown in the public gallery.
          </p>
        </div>
      </div>
    </AdminLayout>
  );
};