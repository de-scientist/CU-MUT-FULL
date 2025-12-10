import React from "react";
import { AdminLayout } from "../../layout/AdminLayout";

export const AdminMembersPage: React.FC = () => {
  return (
    <AdminLayout>
      <h1 className="mb-3 text-2xl font-heading text-mutcu-navy">
        Members (Placeholder)
      </h1>
      <p className="max-w-xl text-sm text-slate-700">
        This admin page will list registered MUTCU members and basic
        demographics. When implementing this fully, connect it to the members
        endpoints under <code className="font-mono text-xs">/api/members</code>
        and reuse the gender statistics and other aggregates already provided
        by the backend.
      </p>
    </AdminLayout>
  );
};