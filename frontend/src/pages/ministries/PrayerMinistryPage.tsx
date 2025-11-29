// src/pages/ministries/PrayerMinistryPage.tsx
import React from "react";
import { MinistryDetailLayout } from "../../components/MinistryDetailLayout";

export const PrayerMinistryPage: React.FC = () => (
  <MinistryDetailLayout
    heroImage="/assets/images/church2.jpg"
    heroTitle="Prayer Ministry"
    heroSubtitle="Cultivating a Deep Culture of Prayer and Intercession"
    coordinator={{
      name: "Roy Ndege",
      role: "Prayer Coordinator",
      image: "/assets/images/PRAYER.jpg",
      border: "navy",
    }}
    overviewTitle="About the Prayer Ministry"
    overviewParagraphs={[
      "The Prayer Ministry is the spiritual backbone of MUTCU, dedicated to building a strong culture of intercession, worship, and dependence on God for the Union, the university, and the nation.",
      "Through prayer chains, keshas, seasons of fasting, and regular corporate prayer meetings, the ministry continually seeks God's guidance and power for all MUTCU activities.",
    ]}
    rolesTitle="Key Roles & Activities"
    rolesIntro="The Prayer Ministry leads and structures the prayer life of MUTCU."
    roles={[
      "Coordinating weekly corporate prayer meetings and seasons of fasting.",
      "Organizing prayer keshas and special nights of intercession.",
      "Mobilizing members to pray for leadership, missions, the university and the nation.",
      "Encouraging personal prayer disciplines among members.",
      "Partnering with other ministries to cover their activities in prayer.",
    ]}
    ctaTitle="Stand in the Gap!"
    ctaSubtitle="Join the Prayer Ministry and help cover MUTCU in intercession."
    primaryCtaLabel="Join This Ministry"
    primaryCtaHref="/contact"
    secondaryCtaLabel="Explore All Ministries"
    secondaryCtaHref="/ministries"
  />
);