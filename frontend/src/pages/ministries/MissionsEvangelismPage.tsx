// src/pages/ministries/MissionsEvangelismPage.tsx
import React from "react";
import { MinistryDetailLayout } from "../../components/MinistryDetailLayout";

export const MissionsEvangelismPage: React.FC = () => (
  <MinistryDetailLayout
    heroImage="/assets/images/mission1.jpg"
    heroTitle="Missions & Evangelism"
    heroSubtitle="Sharing the Gospel and Impacting Communities"
    coordinator={{
      name: "Yusuf Muchiri",
      role: "Missions & Evangelism Coordinator",
      image: "/assets/images/YUSUF.jpg",
      border: "orange",
    }}
    overviewTitle="About the Missions & Evangelism Ministry"
    overviewParagraphs={[
      "The Missions and Evangelism Ministry is at the forefront of MUTCU's outreach efforts, dedicated to sharing the Gospel of Jesus Christ within the university and beyond. The ministry organizes campus outreaches, annual missions, and Hope Ministry visits to prisons and hospitals to bring both spiritual and material support.",
      "It also facilitates the Kairos Course, helping members understand and participate in God's global mission, and works closely with partners and well-wishers for effective mission work.",
    ]}
    rolesTitle="Key Roles & Activities"
    rolesIntro="This ministry is dedicated to spreading the Gospel and serving others."
    roles={[
      "Organizing and leading campus outreach programs to share the Gospel with students.",
      "Planning and executing annual missions to various communities, including pre-visits and follow-up.",
      "Coordinating the Hope Ministry for visits to prisons and hospitals.",
      "Developing and using mission checklists to ensure thorough planning and execution.",
      "Facilitating the Kairos Course and other mission-focused trainings.",
      "Partnering with churches and organizations for financial and material support.",
    ]}
    ctaTitle="Be a Part of Our Outreach!"
    ctaSubtitle="Join the Missions & Evangelism team and help us transform lives."
    primaryCtaLabel="Join This Ministry"
    primaryCtaHref="/contact"
    secondaryCtaLabel="Explore All Ministries"
    secondaryCtaHref="/ministries"
  />
);