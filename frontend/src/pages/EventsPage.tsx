import React from "react";
import { useQuery } from "@tanstack/react-query";
import { MainLayout } from "../layout/MainLayout";
import { Button } from "@/components/ui/button";

type EventItem = {
  id: number;
  title: string;
  dateLabel: string;
  timeLabel: string;
  description: string;
  image: string;
};

const eventsData: EventItem[] = [
  {
    id: 1,
    title: "Prayer Kesha",
    dateLabel: "September 26, 2025",
    timeLabel: "7:00 PM - 9:30 PM",
    description: "Join us for a night of intercession and spiritual revival.",
    image: "/assets/images/church1.jpg",
  },
  {
    id: 2,
    title: "Praise Fest",
    dateLabel: "November 7, 2025",
    timeLabel: "7:00 PM - 9:30 PM",
    description:
      "Celebrate our God through our Music Ministry in a lively evening of praise and worship.",
    image: "/assets/images/Dance1.jpg",
  },
  {
    id: 3,
    title: "Creative Night",
    dateLabel: "October 10, 2025",
    timeLabel: "8:00 PM - 5:30 AM",
    description:
      "Experience a night full of creativity on the theme Ashes to Beauty through special ministrations and performances by CREAM.",
    image: "/assets/images/final poster.png",
  },
];

function useEventsQuery() {
  return useQuery<EventItem[]>({
    queryKey: ["events-page"],
    queryFn: async () => {
      await new Promise((res) => setTimeout(res, 150));
      return eventsData;
    },
  });
}

export const EventsPage: React.FC = () => {
  const { data: events } = useEventsQuery();

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative flex h-[40vh] min-h-[260px] items-center justify-center overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/assets/images/church3.jpg')" }}>
        <div className="absolute inset-0 bg-mutcu-navy/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold drop-shadow-lg">
            Upcoming Events
          </h1>
          <p className="mt-3 text-base md:text-xl text-white/90">
            Join us for worship, fellowship, and outreach throughout the year.
          </p>
        </div>
      </section>

      {/* Events list */}
      <section className="bg-slate-100 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mutcu-section-title">Featured Events</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-slate-600">
            These are some of the key events in our calendar. Stay tuned for more!
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events?.map((e) => (
              <article
                key={e.id}
                className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-mutcu-card transition-all hover:-translate-y-2 hover:shadow-mutcu-card-lg"
              >
                <img
                  src={e.image}
                  alt={e.title}
                  className="h-44 w-full object-cover"
                />
                <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                  <h3 className="mb-2 text-xl font-semibold text-mutcu-navy">
                    {e.title}
                  </h3>
                  <p className="mb-1 text-sm text-slate-700">
                    <i className="far fa-calendar-alt mr-2 text-mutcu-orange" />
                    <strong>Date:</strong> {e.dateLabel}
                  </p>
                  <p className="mb-2 text-sm text-slate-700">
                    <i className="far fa-clock mr-2 text-mutcu-orange" />
                    <strong>Time:</strong> {e.timeLabel}
                  </p>
                  <p className="mb-3 text-sm text-slate-600">
                    {e.description}
                  </p>
                  <Button
                    size="sm"
                    className="mt-auto bg-mutcu-orange hover:bg-[#e68a00]"
                  >
                    Details & RSVP
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};