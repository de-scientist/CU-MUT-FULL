import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Button } from "@/components/ui/button";

export const NotFoundPage: React.FC = () => (
  <MainLayout>
    <section className="flex min-h-[60vh] items-center justify-center bg-slate-50">
      <div className="mx-auto max-w-md px-4 text-center">
        <h1 className="text-6xl font-heading font-bold text-mutcu-navy mb-2">
          404
        </h1>
        <h2 className="text-xl font-heading text-mutcu-navy mb-3">
          Page Not Found
        </h2>
        <p className="mb-6 text-sm text-slate-600">
          The page you are looking for might have been moved, renamed, or does
          not exist. Use the navigation or go back home.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            className="bg-mutcu-orange hover:bg-[#e68a00]"
            asChild
          >
            <Link to="/">Go to Home</Link>
          </Button>
          <Button
            variant="outline"
            className="border-mutcu-navy text-mutcu-navy hover:bg-mutcu-navy hover:text-white"
            asChild
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  </MainLayout>
);