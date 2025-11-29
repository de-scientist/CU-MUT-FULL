// src/pages/ministries/MusicMinistryPage.tsx
import React from "react";
import { MinistryDetailLayout } from "../../components/MinistryDetailLayout";

export const MusicMinistryPage: React.FC = () => (
  <MinistryDetailLayout
    heroImage="/assets/images/music1.jpg"
    heroTitle="Music Ministry"
    heroSubtitle="Leading Worship and Glorifying God Through Song"
    coordinator={{
      name: "Jabez Ayugu",
      role: "Music Coordinator",
      image: "/assets/images/JABEZ.jpg",
      border: "navy",
    }}
    overviewTitle="About the Music Ministry"
    overviewParagraphs={[
      "The Music Ministry of MUTCU is dedicated to leading the Union in vibrant and spiritually uplifting worship experiences. Comprising various teams including the choir, band, instrumentalists, and praise and worship leaders, this ministry plays a crucial role in creating an atmosphere where members can connect with God through music and song.",
      "Our goal is to foster a heart of worship and praise among the MUTCU family, ensuring that all musical presentations are excellent and align with the Union's spiritual goals. We believe that music is a powerful tool for evangelism, edification, and glorifying God.",
    ]}
    rolesTitle="Key Roles & Activities"
    rolesIntro="The Music Ministry leads MUTCU in worship and praise through various ensembles and events."
    roles={[
      "Leading praise and worship during weekly fellowships and Sunday services.",
      "Holding weekly rehearsals for choir, band, instrumentalists, and praise teams.",
      "Ministering during major Union events like MULEWO, Praise Fests, and creative nights.",
      "Training and mentoring aspiring musicians in the Union.",
      "Collaborating with other ministries for creative worship experiences.",
    ]}
    ctaTitle="Join Our Music Ministry!"
    ctaSubtitle="If you have a passion for worship through music, we invite you to serve with us."
    primaryCtaLabel="Join This Ministry"
    primaryCtaHref="/contact"
    secondaryCtaLabel="View Music Events"
    secondaryCtaHref="/events"
  />
);