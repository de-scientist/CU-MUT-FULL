import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useUIStore } from "@/store/uiStore";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

type EventItem = {
  id: number;
  title: string;
  dateLabel: string;
  timeLabel: string;
  description: string;
  image: string;
};

type Testimonial = {
  id: number;
  quote: string;
  author: string;
};

const heroSlides = [
  {
    id: 1,
    title: "Inspire Love, Hope & Godliness",
    description:
      "Join MUTCU to grow in faith, fellowship, and service at Murang’a University of Technology.",
    image: "/assets/images/Lumii_20241023_192938507.jpg",
    primaryHref: "#contact",
    primaryLabel: "Join Us",
    secondaryHref: "#resources",
    secondaryLabel: "Watch Live",
  },
  {
    id: 2,
    title: "We Are One, We Are MUTCU",
    description:
      "A family united in Christ, reaching out to transform lives within and beyond.",
    image: "/assets/images/church2.jpg",
    primaryHref: "#ministries",
    primaryLabel: "Explore Ministries",
    secondaryHref: "#events",
    secondaryLabel: "Join an Event",
  },
  {
    id: 3,
    title: "Cultivating Christ-Centeredness",
    description:
      "Our vision is to be a model Christian Union impacting society.",
    image: "/assets/images/church3.jpg",
    primaryHref: "#about",
    primaryLabel: "Our Vision",
    secondaryHref: "#gallery",
    secondaryLabel: "View Gallery",
  },
];

const coreValues = [
  {
    icon: "fa-cross",
    title: "Faith",
    text: "Rooted in the Bible and a personal relationship with Jesus Christ, expressed through prayer, worship, and in-depth Bible study.",
  },
  {
    icon: "fa-heart",
    title: "Love",
    text: 'Demonstrating God’s unconditional love through genuine fellowship and a welcoming heart for all, as we are a "home away from home".',
  },
  {
    icon: "fa-lightbulb",
    title: "Hope",
    text: "Inspiring our community through positive words, encouraging actions, and unwavering faith in a world crambling with uncertainities.",
  },
  {
    icon: "fa-church",
    title: "Godliness",
    text: "A commitment to striving for lives that honor and glorify God in all things, reflected in both personal conduct and collective activities.",
  },
  {
    icon: "fa-users",
    title: "Community",
    text: "Dedicated to building a strong sense of belonging and mutual support among members, where everyone feels valued and connected.",
  },
  {
    icon: "fa-hand-holding-heart",
    title: "Service",
    text: "A core belief in putting faith into action by actively reaching out to serve the practical and spiritual needs of others.",
  },
];

const ministries = [
  {
    title: "Music Ministry",
    text: "Leading and ministering worship through Choir, Band, Instrumentalism and Praise & Worship.",
    image: "/assets/images/music1.jpg",
    icon: "fa-music",
  },
  {
    title: "Bible Study & Discipleship",
    text: "Deepening faith through small groups- Bible Study, nurturing classes for new believers, and resourcefull training programs.",
    image: "/assets/images/bs1.jpg",
    icon: "fa-book-open",
  },
  {
    title: "Missions & Evangelism",
    text: "Sharing the Gospel through campus outreach, annual missions, and hope ministry visits to children homes, prisons and hospitals.",
    image: "/assets/images/mission1.jpg",
    icon: "fa-globe",
  },
  {
    title: "Creative Ministry",
    text: "Expressing faith through drama, dance, spoken word,modelling and other artistic talents.",
    image: "/assets/images/dance3.jpg",
    icon: "fa-paint-brush",
  },
];

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
];

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "“MUTCU has been my family away from home. The fellowship and discipleship have deepened my faith and helped me navigate university life.”",
    author: "– Prudence Chepkurui, Computer Science, 4th Year",
  },
  {
    id: 2,
    quote:
      "“The Music Ministry has transformed my worship, teaching me to serve with excellence and passion. It's truly inspiring.”",
    author: "– Joseph Mbogo, Electrical Engineering, 2nd Year",
  },
  {
    id: 3,
    quote:
      "“The Missions and Evangelism docket showed me how God uses ordinary students to bring hope and transformation to communities. It was a life-changing experience.”",
    author: "– Grace Akinyi, Medical Lab, 2nd Year",
  },
];

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
      "Experience a night full of creativity on the theme Ashes to Beauty though special ministrations and performance by our Creative Arts Ministry (CREAM).",
    image: "/assets/images/final poster.png",
  },
];

function useEventsQuery() {
  return useQuery<EventItem[]>({
    queryKey: ["events"],
    queryFn: async () => {
      // simulate async fetch
      await new Promise((res) => setTimeout(res, 200));
      return eventsData;
    },
  });
}

function useTestimonialsQuery() {
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      await new Promise((res) => setTimeout(res, 200));
      return testimonialsData;
    },
  });
}

// Smooth scroll helper
const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const nav = document.getElementById("mutcu-navbar");
  const offset = nav ? nav.offsetHeight : 0;
  const top = el.offsetTop - offset;
  window.scrollTo({ top, behavior: "smooth" });
};

const Navbar: React.FC = () => {
  const isScrolled = useUIStore((s) => s.isScrolled);

  useEffect(() => {
    const onScroll = () => {
      useUIStore.getState().setScrolled(window.scrollY > 50);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToId(sectionId);
  };

  return (
    <header
      id="mutcu-navbar"
      className={`fixed inset-x-0 top-0 z-40 transition-colors ${
        isScrolled
          ? "bg-mutcu-navy/95 shadow-lg"
          : "bg-slate-50/90 backdrop-blur border-b border-slate-200"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="flex items-center gap-3">
          <img
            src="/assets/images/Full Logo.png"
            alt="MUTCU Logo"
            className="h-12 md:h-14 w-auto transition-transform hover:scale-105"
          />
        </a>
        <div className="hidden gap-6 md:flex text-sm font-heading uppercase font-semibold">
          {[
            ["Home", "top"],
            ["About", "about"],
            ["Ministries", "ministries"],
            ["Events", "events"],
            ["Resources", "resources"],
            ["Gallery", "gallery"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className="relative text-mutcu-red hover:text-mutcu-orange transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-mutcu-orange after:transition-all hover:after:w-full"
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

const ConfirmationDialog: React.FC = () => {
  const { confirmation, closeConfirmation } = useUIStore();
  return (
    <Dialog open={confirmation.open} onOpenChange={(open) => !open && closeConfirmation()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-mutcu-navy">Thank You!</DialogTitle>
          <DialogDescription className="text-slate-700">
            {confirmation.message}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={closeConfirmation} className="bg-mutcu-orange hover:bg-[#e68a00]">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = heroSlides[activeIndex];

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative h-[90vh] min-h-[540px] w-full overflow-hidden"
    >
      <img
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] scale-105"
      />
      <div className="absolute inset-0 bg-mutcu-navy/70" />
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-3xl text-center text-white space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-wide drop-shadow-lg">
            {slide.title}
          </h1>
          <p className="text-base md:text-xl text-slate-100/90">
            {slide.description}
          </p>
          <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center">
            <Button
              className="bg-mutcu-orange hover:bg-[#e68a00] px-6 py-2 rounded-full text-sm md:text-base font-heading uppercase shadow-lg shadow-black/20"
              onClick={() => scrollToId(slide.primaryHref.replace("#", ""))}
            >
              {slide.primaryLabel}
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-6 py-2 rounded-full text-sm md:text-base font-heading uppercase"
              onClick={() => scrollToId(slide.secondaryHref.replace("#", ""))}
            >
              {slide.secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setActiveIndex(idx)}
            className={`h-2 w-2 rounded-full transition-all ${
              idx === activeIndex ? "w-6 bg-mutcu-orange" : "bg-white/60"
            }`}
            title="set"
          />
        ))}
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => (
  <section id="about" className="bg-white py-16 md:py-20">
    <div className="mx-auto max-w-6xl px-4 md:px-6">
      <h2 className="mutcu-section-title">About MUTCU</h2>
      <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-slate-600">
        Murang’a University of Technology Christian Union (MUTCU) is a lively,
        student-led society in MUT. We are affiliated with FOCUS-Kenya, dedicated
        to inspiring love, hope, and godliness through discipleship, evangelism,
        mission work, and leadership development.
      </p>
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-mutcu-navy mb-2">
              Our Mission
            </h3>
            <p className="text-slate-700">
              To raise a family well-equipped in all aspects of life, exemplary
              to Jesus Christ, by encouraging unity as one body of Christ and
              reaching out to non-believers within and beyond.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-mutcu-navy mb-2">
              Our Vision
            </h3>
            <p className="text-slate-700">
              To be a model Christian Union cultivating Christ-centeredness among
              members to impact society.
            </p>
          </div>
          <Button
            className="bg-mutcu-orange hover:bg-[#e68a00] mt-2"
            onClick={() => scrollToId("about")}
          >
            Learn More About Us
          </Button>
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/images/prayer1.jpg"
            alt="MUTCU Community"
            className="w-full max-w-md rounded-2xl shadow-mutcu-card-lg object-cover transition-transform hover:scale-[1.02]"
          />
        </div>
      </div>
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-mutcu-navy mb-3">
          Doctrinal Basis
        </h3>
        <p className="mx-auto max-w-4xl text-sm md:text-base text-slate-600">
          The Union&apos;s beliefs are based on the fundamental truths of
          Christianity as outlined in its constitution. This includes the unity
          of the Trinity, the sovereignty of God in creation and redemption, the
          divine inspiration and supreme authority of the Holy Scripture, the
          universal sinfulness of man, redemption solely through the sacrificial
          death of Jesus Christ, His bodily resurrection and ascension, and the
          sanctifying work of the Holy Spirit in every believer. This shared
          doctrinal foundation ensures unity in belief and purpose across all of
          MUTCU&apos;s diverse activities.
        </p>
      </div>
    </div>
  </section>
);

const CoreValuesSection: React.FC = () => (
  <section className="bg-gradient-to-r from-mutcu-navy to-[#00002a] py-16 md:py-20 text-white">
    <div className="mx-auto max-w-6xl px-4 md:px-6">
      <h2 className="mutcu-section-title text-white">Our Core Values</h2>
      <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-white/70">
        Rooted in faith and community, our values guide everything we do.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {coreValues.map((value) => (
          <div
            key={value.title}
            className="flex flex-col items-center rounded-2xl border border-white/20 bg-white/10 p-6 text-center shadow-lg backdrop-blur-sm transition-all hover:-translate-y-2 hover:bg-white/20"
          >
            <i
              className={`fas ${value.icon} mb-3 text-4xl text-mutcu-orange`}
            />
            <h4 className="mb-2 text-lg font-semibold text-mutcu-orange">
              {value.title}
            </h4>
            <p className="text-sm text-white/80">{value.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MinistriesSection: React.FC = () => (
  <section id="ministries" className="bg-slate-50 py-16 md:py-20">
    <div className="mx-auto max-w-6xl px-4 md:px-6">
      <h2 className="mutcu-section-title">Our Ministries</h2>
      <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-slate-600">
        Join a ministry to grow in faith and serve others.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {ministries.map((m) => (
          <div
            key={m.title}
            className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-mutcu-card transition-all hover:-translate-y-2 hover:shadow-mutcu-card-lg"
          >
            <img
              src={m.image}
              alt={m.title}
              className="h-44 w-full object-cover"
            />
            <div className="flex flex-1 flex-col items-center px-5 pb-5 pt-4 text-center">
              <i
                className={`fas ${m.icon} mb-2 text-3xl text-mutcu-navy`}
              />
              <h4 className="mb-1 text-lg font-semibold text-mutcu-navy">
                {m.title}
              </h4>
              <p className="mb-3 text-sm text-slate-600">{m.text}</p>
              <Button
                size="sm"
                className="mt-auto bg-mutcu-orange hover:bg-[#e68a00]"
                onClick={() => scrollToId("ministries")}
              >
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Button
          variant="outline"
          className="border-mutcu-navy text-mutcu-navy hover:bg-mutcu-navy hover:text-white px-7"
          onClick={() => scrollToId("ministries")}
        >
          View All Ministries
        </Button>
      </div>
    </div>
  </section>
);

const EventsSection: React.FC = () => {
  const { data: events } = useEventsQuery();

  return (
    <section id="events" className="bg-slate-100 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mutcu-section-title">Upcoming Events</h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-slate-600">
          Join us for worship, fellowship, and outreach!
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events?.map((e) => (
            <div
              key={e.id}
              className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-mutcu-card transition-all hover:-translate-y-2 hover:shadow-mutcu-card-lg"
            >
              <img
                src={e.image}
                alt={e.title}
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                <h4 className="mb-2 text-xl font-semibold text-mutcu-navy">
                  {e.title}
                </h4>
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
                  onClick={() => scrollToId("events")}
                >
                  Details & RSVP
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button
            variant="outline"
            className="border-mutcu-navy text-mutcu-navy hover:bg-mutcu-navy hover:text-white px-7"
            onClick={() => scrollToId("events")}
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

const PrayerSection: React.FC = () => {
  const showConfirmation = useUIStore((s) => s.showConfirmation);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("prayerName") as HTMLInputElement)
      ?.value;
    const request = (form.elements.namedItem(
      "prayerRequest"
    ) as HTMLTextAreaElement)?.value;

    if (!request.trim()) {
      // simple client-side validation
      (form.elements.namedItem(
        "prayerRequest"
      ) as HTMLTextAreaElement)?.focus();
      return;
    }

    // Placeholder for real submission (API, email, etc.)
    console.log("Prayer Request Submitted:", { name, request });

    showConfirmation(
      "Thank you for your prayer request! Our Prayer Ministry will intercede for you."
    );
    form.reset();
  };

  return (
    <section
      id="contact"
      className="bg-mutcu-teal py-16 md:py-20 text-white"
    >
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="mutcu-section-title text-mutcu-navy">
          Need Prayers?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-white/90">
          Our Prayer Ministry is here to support you in faith and intercession.
          Submit your requests confidentially.
        </p>
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/30 bg-white/15 p-6 shadow-lg backdrop-blur"
        >
          <div className="mb-4">
            <label
              htmlFor="prayerName"
              className="mb-1 block text-sm font-semibold text-mutcu-navy"
            >
              Your Name (Optional)
            </label>
            <input
              id="prayerName"
              name="prayerName"
              type="text"
              className="w-full rounded-lg border border-white/40 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/70 focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/40"
              placeholder="Enter your name"
            />
            <p className="mt-1 text-xs text-mutcu-navy">
              You may submit anonymously if preferred.
            </p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="prayerRequest"
              className="mb-1 block text-sm font-semibold text-mutcu-navy"
            >
              Prayer Request <span className="text-mutcu-red">*</span>
            </label>
            <textarea
              id="prayerRequest"
              name="prayerRequest"
              rows={5}
              required
              className="w-full rounded-lg border border-white/40 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/70 focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/40"
              placeholder="Share your prayer request here..."
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-mutcu-orange hover:bg-[#e68a00] text-white font-heading uppercase"
          >
            Submit Request
          </Button>
        </form>
      </div>
    </section>
  );
};

const TestimonialsSection: React.FC = () => {
  const { data: testimonials } = useTestimonialsQuery();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      7000
    );
    return () => window.clearInterval(id);
  }, [testimonials]);

  if (!testimonials || testimonials.length === 0) return null;

  const t = testimonials[index];

  return (
    <section className="bg-gradient-to-r from-mutcu-navy to-mutcu-red py-16 md:py-20 text-mutcu-orange">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="mutcu-section-title text-[#e68a00]">
          What Our Members Say
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-[#ffe0a6]">
          Hear from our Members about their MUTCU experience.
        </p>
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/30 bg-white/15 p-8 text-center text-mutcu-teal shadow-lg backdrop-blur">
          <i className="fas fa-quote-left mb-4 text-3xl text-mutcu-orange" />
          <p className="text-lg leading-relaxed">{t.quote}</p>
          <p className="mt-4 text-sm font-semibold text-mutcu-orange">
            {t.author}
          </p>
          <div className="mt-4 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-mutcu-orange" : "bg-white/70"
                }`}
                title="set-index"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const GallerySection: React.FC = () => (
  <section id="gallery" className="bg-white py-16 md:py-20">
    <div className="mx-auto max-w-6xl px-4 md:px-6">
      <h2 className="mutcu-section-title">Our Gallery</h2>
      <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-slate-600">
        Moments from our fellowship, events, and outreach activities.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {galleryItems.map((g) => (
          <div
            key={g.title}
            className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-mutcu-card transition-all hover:-translate-y-1 hover:shadow-mutcu-card-lg"
          >
            <img
              src={g.image}
              alt={g.title}
              className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-mutcu-navy/60 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="flex items-center gap-2 text-sm font-semibold uppercase text-white">
                <i className="fas fa-search-plus" />
                {g.title}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Button
          variant="outline"
          className="border-mutcu-navy text-mutcu-navy hover:bg-mutcu-navy hover:text-white px-7"
          onClick={() => scrollToId("gallery")}
        >
          View Full Gallery
        </Button>
      </div>
    </div>
  </section>
);

const NewsletterSection: React.FC = () => {
  const showConfirmation = useUIStore((s) => s.showConfirmation);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem(
      "newsletterEmail"
    ) as HTMLInputElement)?.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      (form.elements.namedItem(
        "newsletterEmail"
      ) as HTMLInputElement)?.focus();
      return;
    }

    console.log("Newsletter Signup Email:", email);
    showConfirmation(
      "Thank you for subscribing to our newsletter! You’ll receive our latest updates directly in your inbox."
    );
    form.reset();
  };

  return (
    <section
      id="resources"
      className="bg-gradient-to-r from-mutcu-navy to-mutcu-teal py-16 md:py-20 text-mutcu-navy"
    >
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="mutcu-section-title text-mutcu-orange">
          Stay Connected
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-mutcu-navy">
          Subscribe to our newsletter for updates on events, devotionals, and
          ministry opportunities.
        </p>
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/30 bg-white/20 p-6 shadow-lg backdrop-blur"
        >
          <div className="mb-5">
            <label
              htmlFor="newsletterEmail"
              className="mb-1 block text-sm font-semibold text-mutcu-navy"
            >
              Email Address <span className="text-yellow-400">*</span>
            </label>
            <input
              id="newsletterEmail"
              name="newsletterEmail"
              type="email"
              required
              className="w-full rounded-lg border border-white/40 bg-white/60 px-3 py-2 text-sm text-mutcu-navy placeholder:text-mutcu-navy/70 focus:border-mutcu-orange focus:outline-none focus:ring-2 focus:ring-mutcu-orange/40"
              placeholder="your.email@example.com"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-mutcu-orange hover:bg-[#e68a00] text-white font-heading uppercase"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-mutcu-navy py-10 text-sm text-white">
    <div className="mx-auto max-w-6xl px-4 md:px-6">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h5 className="mb-3 text-lg font-heading uppercase text-mutcu-orange">
            About MUTCU
          </h5>
          <p className="text-white/80">
            Murang’a University of Technology Christian Union is a
            non-denominational community dedicated to inspiring love, hope, and
            godliness through faith, unity, and service.
          </p>
        </div>
        <div>
          <h5 className="mb-3 text-lg font-heading uppercase text-mutcu-orange">
            Quick Links
          </h5>
          <div className="flex flex-col gap-1 text-white/80">
            {["Home", "About", "Ministries", "Events", "Resources", "Gallery", "Contact"].map(
              (label) => {
                const id = label.toLowerCase();
                return (
                  <button
                    key={label}
                    onClick={() => scrollToId(id === "home" ? "top" : id)}
                    className="w-fit text-left hover:text-mutcu-orange"
                  >
                    {label}
                  </button>
                );
              }
            )}
          </div>
        </div>
        <div>
          <h5 className="mb-3 text-lg font-heading uppercase text-mutcu-orange">
            Connect With Us
          </h5>
          <p className="mb-1 text-white/80">
            <i className="fas fa-map-marker-alt mr-2 text-mutcu-orange" />
            Murang’a University of Technology, Murang’a, Kenya
          </p>
          <p className="mb-1 text-white/80">
            <i className="fas fa-phone mr-2 text-mutcu-orange" />+254 712 345
            678
          </p>
          <p className="mb-1 text-white/80">
            <i className="fas fa-envelope mr-2 text-mutcu-orange" />
            info@mutcu.ac.ke
          </p>
          <p className="mb-3 text-white/80">
            <i className="fas fa-clock mr-2 text-mutcu-orange" />
            Office Hours: Mon-Fri, 8:00 AM - 5:00 PM
          </p>
          <div className="flex items-center gap-3 text-xl">
            <a href="#" className="hover:text-mutcu-orange">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="hover:text-mutcu-orange">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="hover:text-mutcu-orange">
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-xs text-white/70">
        <p>
          &copy; 2025 Murang’a University of Technology Christian Union. All
          rights reserved.
        </p>
        <p>Designed by MUTCU Tech Team</p>
      </div>
    </div>
  </footer>
);

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="pt-[70px]">
        <HeroSection />
        <AboutSection />
        <CoreValuesSection />
        <MinistriesSection />
        <EventsSection />
        <PrayerSection />
        <TestimonialsSection />
        <GallerySection />
        <NewsletterSection />
      </main>
      <Footer />
      <ConfirmationDialog />
    </div>
  );
};

export default HomePage;