// src/pages/committees/ChairmanPage.tsx
import React from "react";
import { LeaderProfileLayout } from "@/components/LeaderProfileLayout";

export const ChairmanPage: React.FC = () => (
  <LeaderProfileLayout
    heroImage="/assets/images/EZEKIEL.jpg"
    heroTitle="The Chairman's Office"
    heroSubtitle="Leading MUTCU with Vision and Dedication"
    person={{
      name: "Ezekiel Thaara",
      role: "Chairman",
      image: "/assets/images/EZEKIEL.jpg",
      border: "orange",
    }}
    aboutTitle="About the Chairman's Office"
    aboutParagraphs={[
      "The Chairman's office is the highest executive position within the Murang'a University of Technology Christian Union. It is responsible for the overall leadership, strategic direction, and spiritual oversight of the Union. The Chairman ensures that all activities align with MUTCU's motto, vision, and mission, fostering a Christ-centered environment for all members.",
      "Ezekiel Thaara, as Chairman, embodies the Union's commitment to inspiring love, hope, and godliness. He presides over Executive Council meetings, represents MUTCU in various forums like FOCUS Regional and National Meetings, and works closely with all dockets and ministries to ensure the smooth and effective operation of the Union.",
    ]}
    responsibilitiesTitle="Key Roles & Responsibilities"
    responsibilitiesIntro="The Chairman's office is central to MUTCU's governance and spiritual guidance."
    responsibilities={[
      "Overall leadership and strategic direction of the Union.",
      "Ensuring adherence to the MUTCU Constitution and operational policies.",
      "Presiding over all Executive Council meetings and general Union meetings.",
      "Representing MUTCU in external engagements and partnerships.",
      "Fostering unity, spiritual growth, and accountability among all executive members and ministries.",
      "Overseeing the implementation of the Union's vision, mission, and aims.",
      "Facilitating smooth transitions of leadership during annual elections and handovers.",
    ]}
    ctaTitle="Join Us in Our Mission!"
    ctaSubtitle="Inspired by the leadership of our Chairman, we invite you to be part of MUTCU's journey."
    primaryCtaLabel="Connect with Leadership"
    primaryCtaHref="/contact"
    secondaryCtaLabel="Explore Ministries"
    secondaryCtaHref="/ministries"
  />
);