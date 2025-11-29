import React from "react";
import { MainLayout } from "../layout/MainLayout";

const galleryItems = [
  {
    title: "Worship Service",
    image: "/assets/images/music1.jpg",
  },
  {
    title: "Evangelism",
    image: "/assets/images/mission1.jpg",
  },
  {
    title: "Creative Night",
    image: "/assets/images/film1.jpg",
  },
  {
    title: "Bible Study",
    image: "/assets/images/bs1.jpg",
  },
  // Add more if you have them
];

export const GalleryPage: React.FC = () => (
  <MainLayout>
    {/* Hero */}
    <section
      className="relative flex h-[40vh] min-h-[260px] items-center justify-center overflow-hidden bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/assets/images/church2.jpg')" }}
    >
      <div className="absolute inset-0 bg-mutcu-navy/80" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-heading font-bold drop-shadow-lg">
          Gallery
        </h1>
        <p className="mt-3 text-base md:text-xl text-white/90">
          Moments from our fellowship, events, and outreach activities.
        </p>
      </div>
    </section>

    {/* Grid */}
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mutcu-section-title">Highlights</h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-slate-600">
          A glimpse into the life of MUTCU—worship, missions, creative arts, and
          community.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-mutcu-card transition-all hover:-translate-y-1 hover:shadow-mutcu-card-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-mutcu-navy/60 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex items-center gap-2 text-sm font-semibold uppercase text-white">
                  <i className="fas fa-search-plus" />
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </MainLayout>
);