// src/pages/ministries/CreativeArtsPage.tsx
import React from "react";
import { MinistryDetailLayout } from "../../components/MinistryDetailLayout";

export const CreativeArtsPage: React.FC = () => (
  <MinistryDetailLayout
    heroImage="/assets/images/dance3.jpg"
    heroTitle="Creative Arts Ministry (CREAM)"
    heroSubtitle="Expressing Faith Through Creative Arts"
    coordinator={{
      name: "Brian Ingwee",
      role: "Creative Ministry Coordinator",
      image: "/assets/images/Ingwee.JPG",
      border: "navy",
    }}
    overviewTitle="About the Creative Arts Ministry"
    overviewParagraphs={[
      "The Creative Arts Ministry (CREAM) uses drama, dance, spoken word, film, modeling and other artistic expressions to creatively communicate the Gospel and edify the body of Christ.",
      "The ministry provides a platform for students to use their God-given talents in a Christ-centered way, complementing preaching, worship, and missions, and engaging both the campus and wider community.",
    ]}
    rolesTitle="Key Roles & Activities"
    rolesIntro="CREAM brings the Gospel to life through arts and creativity."
    roles={[
      "Coordinating drama, dance, film, and spoken word presentations for fellowships and events.",
      "Developing creative concepts for evangelism and campus outreaches.",
      "Organizing events such as Creative Nights and special productions.",
      "Mentoring members to refine and steward their creative gifts.",
      "Collaborating with Music, Missions, and Technical ministries for major productions.",
    ]}
    ctaTitle="Use Your Gifts for God!"
    ctaSubtitle="Join the Creative Arts Ministry and express your faith through arts."
    primaryCtaLabel="Join This Ministry"
    primaryCtaHref="/contact"
    secondaryCtaLabel="Explore All Ministries"
    secondaryCtaHref="/ministries"
  />
);