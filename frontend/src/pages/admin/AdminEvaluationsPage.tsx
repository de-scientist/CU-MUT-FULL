import React from "react";
import { AdminLayout } from "../../layout/AdminLayout";

export const AdminEvaluationsPage: React.FC = () => {
  return (
    <AdminLayout>
      <h1 className="mb-3 text-2xl font-heading text-mutcu-navy">
        Evaluations (Placeholder)
      </h1>
      <p className="max-w-xl text-sm text-slate-700">
        This admin page is reserved for managing event, program, or ministry
        evaluations. When implementing fully, fetch evaluation data from the
        backend evaluations endpoints under <code className="font-mono text-xs">/api/evaluations</code>
        and present it in a table or dashboard.
      </p>
    </AdminLayout>
  );
};