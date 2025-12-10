import React from "react";
import { MainLayout } from "../layout/MainLayout";

export const RegisterMemberPage: React.FC = () => {
  return (
    <MainLayout>
      <section className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="mb-3 text-2xl font-heading text-mutcu-navy">
          Member Registration
        </h1>
        <p className="mb-4 text-sm text-slate-700">
          This page will allow new members to register directly with MUTCU.
          The implementation is currently a placeholder; when building the
          full feature, post the form data to the public members endpoint on
          the backend (<code className="font-mono text-xs">POST /api/members</code>)
          and surface validation errors from the API.
        </p>
        <div className="rounded-2xl bg-white p-6 shadow-mutcu-card">
          <p className="text-sm text-slate-600">
            For now, please use the contact and ministry join sections on the
            homepage to express interest in joining the union or specific
            ministries.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};