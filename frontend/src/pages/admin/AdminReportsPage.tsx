import React from "react";
import { AdminLayout } from "../../layout/AdminLayout";

export const AdminReportsPage: React.FC = () => {
  return (
    <AdminLayout>
      <h1 className="mb-3 text-2xl font-heading text-mutcu-navy">
        Reports (Placeholder)
      </h1>
      <p className="max-w-xl text-sm text-slate-700">
        This admin page is designed to surface metrics from the reporting
        endpoints under <code className="font-mono text-xs">/api/reports</code>
        (including JSON, CSV, and PDF exports). A completed implementation
        should summarize members, events, ministry applications, and finance
        totals for admins.
      </p>
    </AdminLayout>
  );
};