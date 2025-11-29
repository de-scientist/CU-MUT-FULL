// src/pages/MinistriesPage.tsx
import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { Button } from "@/components/ui/button";

const ministries = [
  {
    title: "Music Ministry",
    href: "/ministries/music",
    image: "/assets/images/music1.jpg",
    icon: "fa-music",
    text:
      "Leading and ministering worship through Choir, Band, Instrumentalism and Praise & Wowrship.",
  },
  {
    title: "Bible Study & Discipleship",
    href: "/ministries/bible-study-discipleship",
    image: "/assets/images/bs1.jpg",
    icon: "fa-book-open",
    text:
      "Deepening faith through small groups, nurturing classes for new believers, and intensive training programs.",
  },
  {
    title: "Missions & Evangelism",
    href: "/ministries/missions-evangelism",
    image: "/assets/images/mission1.jpg",
    icon: "fa-globe",
    text:
      "Sharing the Gospel through campus outreach, annual missions, and hope ministry visits to prisons and hospitals.",
  },
  {
    title: "Creative Arts Ministry (CREAM)",
    href: "/ministries/creative-arts",
    image: "/assets/images/dance3.jpg",
    icon: "fa-paint-brush",
    text:
      "Expressing faith through drama, dance, spoken word, and other artistic talents.",
  },
  {
    title: "Prayer Ministry",
    href: "/ministries/prayer",
    image: "/assets/images/church2.jpg",
    icon: "fa-pray",
    text:
      "Cultivating a deep culture of prayer and intercession for the Union, university, and wider community.",
  },
  {
    title: "Welfare Committee",
    href: "/ministries/welfare-committee",
    image: "/assets/images/prayer1.jpg",
    icon: "fa-hand-holding-heart",
    text:
      "Actively raising funds and providing support to members facing financial and personal difficulties.",
  },
  {
    title: "Hospitality Ministry",
    href: "/ministries/hospitality",
    image: "/assets/images/tlp.jpg",
    icon: "fa-handshake-angle",
    text:
      "Ensuring a welcoming environment for all members and visitors, managing amenities and visitor care.",
  },
  {
    title: "Technical Department",
    href: "/ministries/technical-department",
    image: "/assets/images/mbbc1.jpg",
    icon: "fa-laptop-code",
    text:
      "Providing essential technical support for all Union activities, including sound, Publicity, Ushering and live streaming.",
  },
  {
    title: "Resource Mobilisation Commitee (RMC)",
    href: "/ministries/rmc",
    image: "/assets/images/prayer1.jpg",
    icon: "fa-lightbulb",
    text:
      "Working in conjunction with all other ministries to enhance the transformative gospel through creative and innovative ways of acquiring resources.",
  },
];

export const MinistriesPage: React.FC = () => (
  <MainLayout>
    {/* Hero */}
    <section
      className="relative flex h-[50vh] min-h-[320px] items-center justify-center overflow-hidden bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/assets/images/mbbc1.jpg')" }}
    >
      <div className="absolute inset-0 bg-mutcu-navy/80" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-heading font-bold drop-shadow-lg">
          Our Ministries
        </h1>
        <p className="mt-3 text-base md:text-xl text-white/90">
          Where Faith Becomes Action: Serve, Grow, Impact
        </p>
      </div>
    </section>

    {/* Overview */}
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mutcu-section-title">Explore Our Diverse Ministries</h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-slate-600">
          MUTCU&apos;s ministries are the heartbeat of our Union, providing avenues for
          spiritual growth, service, and community impact. Each ministry operates under a
          dedicated committee, ensuring focused and effective work in alignment with our
          motto, vision, and mission.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ministries.map((m) => (
            <a
              key={m.title}
              href={m.href}
              className="flex h-full flex-col overflow-hidden rounded-2xl bg-white text-center shadow-mutcu-card transition-all hover:-translate-y-2 hover:shadow-mutcu-card-lg"
            >
              <img
                src={m.image}
                alt={m.title}
                className="h-48 w-full object-cover"
              />
              <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                <i
                  className={`fas ${m.icon} mb-2 text-3xl text-mutcu-navy`}
                />
                <h4 className="mb-2 text-lg font-semibold text-mutcu-navy">
                  {m.title}
                </h4>
                <p className="mb-4 text-sm text-slate-600">{m.text}</p>
                <span className="mt-auto inline-flex items-center justify-center rounded-full border border-mutcu-orange px-3 py-1 text-xs font-semibold uppercase text-mutcu-orange transition-colors hover:bg-mutcu-orange hover:text-white">
                  Learn More <i className="fas fa-arrow-right ml-2" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gradient-to-r from-mutcu-navy to-mutcu-teal py-16 md:py-20 text-white">
      <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
        <h2 className="mutcu-section-title text-white">
          Find Your Place to Serve!
        </h2>
        <p className="mb-8 text-lg text-white/80">
          There&apos;s a ministry for every passion and gift. Join us in making a
          difference.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            className="bg-mutcu-orange hover:bg-[#e68a00]"
            onClick={() => (window.location.href = "/contact")}
          >
            Get Involved
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10"
            onClick={() => (window.location.href = "/about")}
          >
            Learn About Leadership
          </Button>
        </div>
      </div>
    </section>
  </MainLayout>
);