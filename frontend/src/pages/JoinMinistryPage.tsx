import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { JoinMinistryForm } from "../components/JoinMinistryForm";

export const JoinMinistryPage: React.FC = () => (
  <MainLayout>
    <section
      className="relative flex h-[40vh] min-h-[260px] items-center justify-center overflow-hidden bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/assets/images/mbbc1.jpg')" }}
    >
      <div className="absolute inset-0 bg-mutcu-navy/80" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-heading font-bold drop-shadow-lg">
          Join a Ministry
        </h1>
        <p className="mt-3 text-base md:text-xl text-white/90">
          There is a place for your gifts and calling in MUTCU. Choose a
          ministry and get involved.
        </p>
      </div>
    </section>
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <JoinMinistryForm />
      </div>
    </section>
  </MainLayout>
);