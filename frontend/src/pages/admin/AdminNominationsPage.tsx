import React from "react";
import { AdminLayout } from "../../layout/AdminLayout";

export const AdminNominationsPage: React.FC = () => {
  return (
    <AdminLayout>
      <h1 className="mb-3 text-2xl font-heading text-mutcu-navy">
        Nominations (Placeholder)
      </h1>
      <p className="max-w-xl text-sm text-slate-700">
        This admin page is intended for managing leadership or committee
        nominations. To complete this feature, call the nominations endpoints
        under <code className="font-mono text-xs">/api/nominations</code> and
        provide workflows for viewing, approving, or rejecting nominations.
      </p>
    </AdminLayout>
  );
};