// src/pages/ministries/RmcPage.tsx
import React from "react";
import { MinistryDetailLayout } from "../../components/MinistryDetailLayout";

export const RmcPage: React.FC = () => (
  <MinistryDetailLayout
    heroImage="/assets/images/prayer1.jpg"
    heroTitle="Resource Mobilisation Committee (RMC)"
    heroSubtitle="Fueling Ministry Through Creative Resource Mobilisation"
    coordinator={undefined}
    overviewTitle="About the Resource Mobilisation Committee"
    overviewParagraphs={[
      "The Resource Mobilisation Committee (RMC) works in conjunction with all other ministries to enhance the transformative Gospel through creative and innovative ways of acquiring resources.",
      "RMC helps plan, coordinate, and execute initiatives that raise funds and other resources needed for missions, welfare, events, and general ministry operations.",
    ]}
    rolesTitle="Key Roles & Activities"
    rolesIntro="RMC ensures ministries are adequately resourced for impact."
    roles={[
      "Designing creative strategies for raising financial and material resources.",
      "Coordinating resource mobilisation events and campaigns.",
      "Partnering with alumni, churches, and well-wishers for support.",
      "Working closely with the Treasurer and Executive Council to align needs and resources.",
      "Promoting transparency and good stewardship in all mobilisation efforts.",
    ]}
    ctaTitle="Partner in Resource Mobilisation!"
    ctaSubtitle="Serve with RMC or partner with MUTCU to support Kingdom work."
    primaryCtaLabel="Partner With Us"
    primaryCtaHref="/contact"
    secondaryCtaLabel="Explore All Ministries"
    secondaryCtaHref="/ministries"
  />
);