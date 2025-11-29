// src/pages/ministries/TechnicalDepartmentPage.tsx
import React from "react";
import { MinistryDetailLayout } from "../../components/MinistryDetailLayout";

export const TechnicalDepartmentPage: React.FC = () => (
  <MinistryDetailLayout
    heroImage="/assets/images/mbbc1.jpg"
    heroTitle="Technical Department"
    heroSubtitle="Enhancing Worship Through Technology and Service"
    coordinator={{
      name: "Joseph Mbogo",
      role: "Technical Coordinator",
      image: "/assets/images/JOSEPH.jpg",
      border: "orange",
    }}
    overviewTitle="About the Technical Department"
    overviewParagraphs={[
      "The Technical Department oversees all technical and logistical aspects to ensure seamless operations during services and events. Sub-ministries include Ushering, Sound, Digital Ministry (livestreaming and social media), and MBBC / Publicity (posters and event promotion).",
      "The department manages MUTCU's public image and provides high-quality technical support, enhancing the worship experience through excellence in technology and service.",
    ]}
    rolesTitle="Key Roles & Activities"
    rolesIntro="The Technical Department supports MUTCU practically and creatively."
    roles={[
      "Managing sound systems and equipment for all Union meetings and events.",
      "Handling livestreaming of fellowships, services, and special events.",
      "Designing and distributing publicity materials (posters, social media content).",
      "Coordinating ushering teams to create a welcoming, organized atmosphere.",
      "Maintaining and safeguarding technical equipment.",
      "Training new members in media, sound, ushering, and digital ministry.",
    ]}
    ctaTitle="Join Our Technical Team!"
    ctaSubtitle="If you love tech, media or logistics, this is a great place to serve."
    primaryCtaLabel="Join This Ministry"
    primaryCtaHref="/contact"
    secondaryCtaLabel="View Technical Events"
    secondaryCtaHref="/events"
  />
);