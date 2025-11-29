// src/pages/ministries/HospitalityMinistryPage.tsx
import React from "react";
import { MinistryDetailLayout } from "../../components/MinistryDetailLayout";

export const HospitalityMinistryPage: React.FC = () => (
  <MinistryDetailLayout
    heroImage="/assets/images/tlp.jpg"
    heroTitle="Hospitality Ministry"
    heroSubtitle="Creating a Warm and Welcoming Environment"
    coordinator={undefined} // coordinated via 1st Vice Chair; leave generic
    overviewTitle="About the Hospitality Ministry"
    overviewParagraphs={[
      "The Hospitality Ministry ensures a welcoming environment for all members and visitors, helping MUTCU truly become a 'home away from home'.",
      "The ministry oversees welcoming, seating, follow-up of visitors, and practical care during services, meetings, and special events.",
    ]}
    rolesTitle="Key Roles & Activities"
    rolesIntro="Hospitality expresses the love of Christ through care and welcome."
    roles={[
      "Welcoming and receiving visitors at all MUTCU gatherings.",
      "Helping with seating, order, and general comfort of attendees.",
      "Coordinating simple refreshments where applicable.",
      "Following up on new members and visitors in partnership with other ministries.",
      "Supporting special functions, conferences, and events with logistical care.",
    ]}
    ctaTitle="Serve Through Hospitality!"
    ctaSubtitle="Join the Hospitality Ministry and help us care for members and visitors."
    primaryCtaLabel="Join This Ministry"
    primaryCtaHref="/contact"
    secondaryCtaLabel="Explore All Ministries"
    secondaryCtaHref="/ministries"
  />
);