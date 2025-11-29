import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { Button } from "@/components/ui/button";

type Resource = {
  title: string;
  description: string;
  type: "devotional" | "sermon" | "guide";
  link?: string;
};

const devotionals: Resource[] = [
  {
    title: "Weekly Campus Devotional",
    description:
      "Short reflections designed for students navigating campus life with Christ at the center.",
    type: "devotional",
  },
  {
    title: "Hope in Uncertain Times",
    description:
      "A devotional series on trusting God amid pressure, exams, and transitions.",
    type: "devotional",
  },
];

const sermons: Resource[] = [
  {
    title: "Cultivating Christ-Centeredness",
    description:
      "A message on living out MUTCU’s vision in daily student life.",
    type: "sermon",
  },
  {
    title: "The Call to Missions",
    description: "A sermon on God’s heart for the nations and campus outreach.",
    type: "sermon",
  },
];

const guides: Resource[] = [
  {
    title: "New Believers Guide",
    description:
      "A simple guide for those who have recently come to faith in Christ.",
    type: "guide",
  },
  {
    title: "Bible Study Guide",
    description:
      "Tips and tools to help you study Scripture personally and in groups.",
    type: "guide",
  },
];

export const ResourcesPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero */}
      <section
        className="relative flex h-[40vh] min-h-[260px] items-center justify-center overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/assets/images/bs1.jpg')" }}
      >
        <div className="absolute inset-0 bg-mutcu-navy/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold drop-shadow-lg">
            Resources
          </h1>
          <p className="mt-3 text-base md:text-xl text-white/90">
            Devotionals, sermons, and guides to help you grow in Christ.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 space-y-12">
          {/* Devotionals */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading mb-2 text-mutcu-navy">
              Devotionals
            </h2>
            <p className="mb-6 text-sm md:text-base text-slate-600 max-w-2xl">
              Short, Scripture-centered thoughts for your daily walk and campus
              life.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {devotionals.map((d) => (
                <article
                  key={d.title}
                  className="rounded-2xl bg-white p-5 shadow-mutcu-card"
                >
                  <h3 className="mb-1 text-lg font-semibold text-mutcu-navy">
                    {d.title}
                  </h3>
                  <p className="text-sm text-slate-700">{d.description}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Sermons */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading mb-2 text-mutcu-navy">
              Sermons & Media
            </h2>
            <p className="mb-6 text-sm md:text-base text-slate-600 max-w-2xl">
              Key messages from MUTCU services and special events.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {sermons.map((s) => (
                <article
                  key={s.title}
                  className="flex flex-col rounded-2xl bg-white p-5 shadow-mutcu-card"
                >
                  <h3 className="mb-1 text-lg font-semibold text-mutcu-navy">
                    {s.title}
                  </h3>
                  <p className="mb-4 text-sm text-slate-700">
                    {s.description}
                  </p>
                  <Button
                    variant="outline"
                    className="mt-auto w-fit border-mutcu-navy text-mutcu-navy hover:bg-mutcu-navy hover:text-white"
                  >
                    Watch / Listen
                  </Button>
                </article>
              ))}
            </div>
          </div>

          {/* Guides */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading mb-2 text-mutcu-navy">
              Guides & Tools
            </h2>
            <p className="mb-6 text-sm md:text-base text-slate-600 max-w-2xl">
              Practical resources for new believers and growing disciples.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {guides.map((g) => (
                <article
                  key={g.title}
                  className="flex flex-col rounded-2xl bg-white p-5 shadow-mutcu-card"
                >
                  <h3 className="mb-1 text-lg font-semibold text-mutcu-navy">
                    {g.title}
                  </h3>
                  <p className="mb-4 text-sm text-slate-700">
                    {g.description}
                  </p>
                  <Button
                    size="sm"
                    className="mt-auto bg-mutcu-orange hover:bg-[#e68a00]"
                  >
                    Download / View
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};