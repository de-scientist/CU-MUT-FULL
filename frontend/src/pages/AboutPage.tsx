// src/pages/AboutPage.tsx
import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { Button } from "@/components/ui/button";

const guidingPrinciples = [
  {
    icon: "fa-bullhorn",
    title: "Our Motto",
    lead: '"To Inspire Love, Hope, and Godliness."',
    text: "This motto serves as our daily call to action, reminding us of our core purpose in every interaction and activity.",
  },
  {
    icon: "fa-eye",
    title: "Our Vision",
    lead:
      '"To be a model Christian Union cultivating Christ-centeredness among members in impacting the society."',
    text: "Our long-term aspiration is to be an exemplary union that develops deep spiritual growth and positive societal influence.",
  },
  {
    icon: "fa-hands-helping",
    title: "Our Mission",
    lead:
      '"To raise a family well-equipped in all aspects of life, exemplary to Jesus Christ, by encouraging the existence of members as one body of Christ and reaching out to non-believers within and beyond."',
    text: "Our mission focuses on equipping members holistically and extending our reach to non-believers, embodying unity in Christ.",
  },
];

const aims = [
  {
    icon: "fa-book-bible",
    title: "Biblical Discipleship",
    text:
      "To deepen members' understanding of the Bible and encourage practical application of its teachings in their daily lives.",
  },
  {
    icon: "fa-user-plus",
    title: "Evangelism & Outreach",
    text:
      "To reach out to non-believers within the university and beyond, sharing the Gospel through various initiatives.",
  },
  {
    icon: "fa-users-line",
    title: "Fellowship & Unity",
    text:
      "To foster a strong sense of community, encouraging members to live as one body of Christ, supporting each other.",
  },
  {
    icon: "fa-handshake",
    title: "Leadership Development",
    text:
      "To identify, train, and equip student leaders with spiritual and practical skills for effective service within and outside the Union.",
  },
  {
    icon: "fa-graduation-cap",
    title: "Academic Excellence",
    text:
      "To encourage members to excel in their academic pursuits as a testimony to God's glory and a means of impacting society.",
  },
  {
    icon: "fa-hands-holding-circle",
    title: "Social Responsibility",
    text:
      "To engage in community service and social justice initiatives, reflecting Christ's love and compassion.",
  },
];

const doctrinalPoints = [
  "The unity of the Father, the Son and the Holy Spirit in the Godhead.",
  "The sovereignty of God in creation, revelation, redemption and final judgment.",
  "The divine inspiration and infallibility of the Holy Scripture as originally given, and its supreme authority in all matters of faith and conduct.",
  "The universal sinfulness and guilt of all men since the fall, rendering them subject to God’s wrath and condemnation.",
  "Redemption from the guilt, penalty, dominion and pollution of sin, solely through the sacrificial death (as our representative and substitute) of the Lord Jesus Christ, the incarnate Son of God.",
  "The bodily resurrection of the Lord Jesus Christ from the dead and His ascension to the right hand of God the Father.",
  "The presence and power of the Holy Spirit in the work of regeneration.",
  "The justification of the sinner by grace alone through faith alone.",
  "The indwelling and work of the Holy Spirit in the believer.",
  "The one Holy Universal Church which is the Body of Christ and to which all true believers belong.",
  "The expectation of the personal, visible return of the Lord Jesus Christ.",
];

const execMembers = [
  {
    name: "Ezekiel Thaara",
    role: "Chairman",
    image: "/assets/images/EZEKIEL.jpg",
    border: "orange",
    href: "/committees/chairman",
  },
  {
    name: "Jesca Kinya",
    role: "1st Vice Chair",
    image: "/assets/images/JES.jpg",
    border: "navy",
    href: "/committees/vice-chair1",
  },
  {
    name: "Martin Gitau",
    role: "2nd Vice Chair",
    image: "/assets/images/MARTIN.jpg",
    border: "orange",
    href: "/committees/vice-chair2",
  },
  {
    name: "Grace Kanyiri",
    role: "Secretary",
    image: "/assets/images/GRACE.jpg",
    border: "navy",
    href: "/committees/secretary",
  },
  {
    name: "Daisy Mutheu",
    role: "Vice Secretary",
    image: "/assets/images/DAISY.jpg",
    border: "orange",
    href: "/committees/vice-secretary",
  },
  {
    name: "Joy Karimi",
    role: "Treasurer",
    image: "/assets/images/JOY.jpg",
    border: "navy",
    href: "/committees/treasurer",
  },
  {
    name: "Purity Njeri",
    role: "Bible Study & Discipleship  Coordinator",
    image: "/assets/images/PURITY.jpg",
    border: "orange",
    href: "/committees/bible-study",
  },
  {
    name: "Roy Ndege",
    role: "Prayer Coordinator",
    image: "/assets/images/PRAYER.jpg",
    border: "navy",
    href: "/committees/prayer",
  },
  {
    name: "Yusuf Muchiri",
    role: "Missions & Evangelism Coordinator",
    image: "/assets/images/YUSUF.jpg",
    border: "orange",
    href: "/committees/missions",
  },
  {
    name: "Jabez Ayugu",
    role: "Music Coordinator",
    image: "/assets/images/JABEZ.jpg",
    border: "navy",
    href: "/committees/music",
  },
  {
    name: "Joseph Mbogo",
    role: "Technical Coordinator",
    image: "/assets/images/JOSEPH.jpg",
    border: "orange",
    href: "/committees/technical",
  },
  {
    name: "Brian Ingwee",
    role: "Creative Ministry Coordinator",
    image: "/assets/images/Ingwee.JPG",
    border: "navy",
    href: "/committees/creative",
  },
];

const joinReasons = [
  {
    icon: "fa-hands-clapping",
    title: "lively Fellowship",
    text:
      "Experience genuine Christian fellowship and build lasting friendships in a supportive environment.",
  },
  {
    icon: "fa-brain",
    title: "Spiritual Growth",
    text:
      "Deepen your faith through Bible studies, discipleship programs, and powerful worship experiences.",
  },
  {
    icon: "fa-person-digging",
    title: "Service Opportunities",
    text:
      "Engage in meaningful ministry and outreach, making a tangible difference in the university and beyond.",
  },
  {
    icon: "fa-user-graduate",
    title: "Leadership Development",
    text:
      "Develop essential leadership skills through various roles and mentorship opportunities.",
  },
  {
    icon: "fa-hand-holding-dollar",
    title: "Welfare Support",
    text:
      "Receive and offer support through our Welfare Committee, a tangible expression of community care.",
  },
  {
    icon: "fa-lightbulb",
    title: "Impactful Presence",
    text:
      "Contribute to a Christ-centered environment that impacts the entire university and wider society.",
  },
];

export const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[320px] items-center justify-center overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/assets/images/church2.jpg')" }}>
        <div className="absolute inset-0 bg-mutcu-navy/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold drop-shadow-lg">
            About MUTCU
          </h1>
          <p className="mt-3 text-base md:text-xl text-white/90">
            Inspiring Love, Hope &amp; Godliness
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-mutcu-navy">
              Who We Are
            </h2>
            <p className="mb-4 text-slate-700 text-lg">
              The Murang&apos;a University of Technology Christian Union (MUTCU) is a lively,
              student-led religious organization operating within the university. We are a
              non-denominational, non-political and non-profit making society committed to
              building in spiritual growth, nurturing leadership, and impacting society with
              the Gospel of Jesus Christ.
            </p>
            <p className="text-slate-700">
              As a proud member of the{" "}
              <a
                href="https://focuskenya.org/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-mutcu-orange hover:text-[#e68a00] underline-offset-2 hover:underline"
              >
                Fellowship of Christian Unions - Kenya (FOCUS-KENYA)
              </a>
              , MUTCU benefits from a national network of support and accountability. This
              affiliation ensures our activities are theologically sound, well-guided, and
              contribute to broader Christian initiatives. Our identity and all functions are
              meticulously guided by a comprehensive constitution and detailed operational
              policies for each ministry.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/images/Full Logo.png"
              alt="MUTCU Community"
              className="w-full max-w-sm rounded-2xl shadow-lg object-contain bg-white p-4"
            />
          </div>
        </div>
      </section>

      {/* Guiding principles */}
      <section className="bg-slate-100 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mutcu-section-title">Our Guiding Principles</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-slate-600">
            Our motto, vision, and mission are interconnected, forming the bedrock of our
            existence.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {guidingPrinciples.map((p) => (
              <div
                key={p.title}
                className="h-full rounded-2xl bg-white p-6 text-center shadow-mutcu-card transition-all hover:-translate-y-2 hover:shadow-mutcu-card-lg"
              >
                <i className={`fas ${p.icon} mb-3 text-4xl text-mutcu-orange`} />
                <h3 className="mb-2 text-xl font-semibold text-mutcu-navy">
                  {p.title}
                </h3>
                <p className="mb-2 text-sm font-semibold text-slate-700">{p.lead}</p>
                <p className="text-sm text-slate-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aims */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mutcu-section-title">Aims of The Union</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-slate-600">
            MUTCU operates with clear objectives to fulfill its mission and vision.
          </p>
          <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2">
            {aims.map((a) => (
              <div
                key={a.title}
                className="flex h-full items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <i
                  className={`fas ${a.icon} mt-1 text-2xl text-mutcu-teal`}
                />
                <div>
                  <h4 className="text-lg font-semibold text-mutcu-navy">
                    {a.title}
                  </h4>
                  <p className="text-sm text-slate-600">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctrinal basis */}
      <section className="bg-gradient-to-r from-mutcu-navy to-mutcu-red py-16 md:py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mutcu-section-title text-white">Our Doctrinal Basis</h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-white/80">
            Our beliefs are founded on the fundamental truths of the Holy Scripture, guiding
            all our activities and teachings.
          </p>
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/30 bg-white/10 p-6 shadow-lg backdrop-blur">
            <p className="mb-4 text-sm md:text-base">
              The Murang&apos;a University of Technology Christian Union believes in and
              holds to the following fundamental truths:
            </p>
            <ul className="space-y-2 text-sm md:text-base">
              {doctrinalPoints.map((d) => (
                <li key={d} className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-mutcu-orange" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Structure & leadership */}
      <section className="bg-slate-100 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mutcu-section-title">Organizational Structure &amp; Leadership</h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-slate-600">
            MUTCU is a student-led organization with a robust structure ensuring effective
            governance and ministry.
          </p>
          <div className="mx-auto mb-8 max-w-3xl rounded-2xl bg-white p-6 shadow-mutcu-card">
            <h3 className="mb-3 text-center text-2xl font-semibold text-mutcu-navy">
              Executive Council
            </h3>
            <p className="mb-3 text-slate-700">
              The Executive Council is the highest governing leadership body of MUTCU,
              responsible for overseeing all Union activities and ensuring adherence to the
              constitution and policies. It comprises appointed student leaders who serve
              diligently to guide the Union&apos;s spiritual and administrative affairs.
            </p>
            <p className="text-slate-700">
              New leaders are nominated annually through a democratic and spiritually led
              process managed by an Electoral Commission of final-year students, involving
              recommendations from the general membership. A formal orientation and
              handing-over process ensures a smooth transition of responsibilities, fostering
              mentorship and continuity of institutional knowledge.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <i className="fas fa-sitemap mb-3 text-3xl text-mutcu-navy" />
              <h4 className="mb-2 text-xl font-semibold text-mutcu-navy">
                Committees
              </h4>
              <p className="text-sm text-slate-700">
                The Executive Council delegates responsibilities to various committees, each
                focusing on specific areas of ministry such as Prayer, Music, Missions &
                Evangelism, Creative Arts, Technical, and Welfare. Each ministry is managed
                by its respective committee Coordinator, ensuring focused and efficient
                operations.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <i className="fas fa-users-gear mb-3 text-3xl text-mutcu-navy" />
              <h4 className="mb-2 text-xl font-semibold text-mutcu-navy">
                Operational Policies
              </h4>
              <p className="text-sm text-slate-700">
                All Union functions are meticulously guided by detailed operational policies
                for each ministry. These policies ensure accountability, transparency, and
                consistency in all activities, from financial procedures managed by the
                Treasury to asset management and event organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive committee */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mutcu-section-title">Meet Our Executive Committee</h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-slate-600">
            Leading MUTCU with dedication and vision for the 2024/2025 Spiritual Year.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {execMembers.map((m) => (
              <a
                key={m.name}
                href={m.href}
                className="flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 text-center text-mutcu-navy shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg"
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className={`mb-3 h-28 w-28 rounded-full border-4 object-cover shadow ${
                    m.border === "orange" ? "border-mutcu-orange" : "border-mutcu-navy"
                  }`}
                />
                <h4 className="text-sm md:text-base font-semibold">{m.name}</h4>
                <p className="mt-1 text-xs md:text-sm text-slate-600">
                  {m.role}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why join */}
      <section className="bg-gradient-to-r from-mutcu-navy to-mutcu-teal py-16 md:py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mutcu-section-title text-white">Why Join MUTCU?</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-white/80">
            Become part of a thriving community dedicated to spiritual growth and impactful
            service.
          </p>
          <div className="mx-auto mb-8 max-w-5xl grid gap-6 md:grid-cols-3">
            {joinReasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-white/30 bg-white/10 p-5 text-center shadow-lg backdrop-blur transition-all hover:-translate-y-2 hover:bg-white/20"
              >
                <i className={`fas ${r.icon} mb-3 text-3xl text-mutcu-orange`} />
                <h4 className="mb-2 text-sm md:text-base font-semibold text-mutcu-orange uppercase">
                  {r.title}
                </h4>
                <p className="text-xs md:text-sm text-white/85">{r.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              className="mr-3 bg-mutcu-orange hover:bg-[#e68a00]"
              onClick={() => (window.location.href = "/contact")}
            >
              Join MUTCU Today!
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => (window.location.href = "/ministries")}
            >
              Explore Ministries
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};