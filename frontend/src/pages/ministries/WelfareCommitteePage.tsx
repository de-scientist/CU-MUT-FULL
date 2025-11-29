// src/pages/ministries/WelfareCommitteePage.tsx
import React from "react";
import { MinistryDetailLayout } from "../../components/MinistryDetailLayout";

export const WelfareCommitteePage: React.FC = () => (
  <MinistryDetailLayout
    heroImage="/assets/images/prayer1.jpg"
    heroTitle="Welfare Committee"
    heroSubtitle="Demonstrating Practical Love and Support"
    coordinator={undefined} // chaired by 2nd Vice Chair
    overviewTitle="About the Welfare Committee"
    overviewParagraphs={[
      "The Welfare Committee is dedicated to expressing Christ's love through practical care and support for members facing financial, social, or personal challenges.",
      "Working closely with the Executive Council and various ministries, the committee coordinates visitations, financial support, and other acts of compassion.",
    ]}
    rolesTitle="Key Roles & Activities"
    rolesIntro="Welfare demonstrates MUTCU’s care in very practical ways."
    roles={[
      "Identifying and responding to welfare needs among members.",
      "Coordinating visitations and support during times of sickness, bereavement, or crisis.",
      "Mobilizing funds and in-kind support to assist affected members.",
      "Working with the Treasurer and leadership to manage welfare resources responsibly.",
      "Promoting a culture of mutual care and generosity within MUTCU.",
    ]}
    ctaTitle="Be Part of Practical Care!"
    ctaSubtitle="Join the Welfare Committee and help us care for the MUTCU family."
    primaryCtaLabel="Join This Ministry"
    primaryCtaHref="/contact"
    secondaryCtaLabel="Explore All Ministries"
    secondaryCtaHref="/ministries"
  />
);