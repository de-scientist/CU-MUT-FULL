import React from "react";
import { AdminLayout } from "../../layout/AdminLayout";

export const AdminFinancesPage: React.FC = () => {
  return (
    <AdminLayout>
      <h1 className="mb-3 text-2xl font-heading text-mutcu-navy">
        Finances (Placeholder)
      </h1>
      <p className="max-w-xl text-sm text-slate-700">
        This admin page will surface income and expense transactions managed by
        the backend finance routes under <code className="font-mono text-xs">/api/finances</code>.
        A full implementation should allow admins to record transactions and
        view summaries that line up with the data used in reports.
      </p>
    </AdminLayout>
  );
};