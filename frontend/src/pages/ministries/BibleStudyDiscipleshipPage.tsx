// src/pages/ministries/BibleStudyDiscipleshipPage.tsx
import React from "react";
import { MinistryDetailLayout } from "../../components/MinistryDetailLayout";

export const BibleStudyDiscipleshipPage: React.FC = () => (
  <MinistryDetailLayout
    heroImage="/assets/images/bs1.jpg"
    heroTitle="Bible Study & Discipleship"
    heroSubtitle="Deepening Faith Through God's Word"
    coordinator={{
      name: "Purity Njeri",
      role: "Bible Study & Discipleship  Coordinator",
      image: "/assets/images/PURITY.jpg",
      border: "orange",
    }}
    overviewTitle="About the Bible Study & Discipleship Ministry"
    overviewParagraphs={[
      "The Bible Study & Discipleship Ministry is dedicated to equipping MUTCU members with a deeper understanding of Scripture and empowering spiritual maturity. The ministry runs small group Bible studies, nurturing classes for new believers, and intensive training programs such as BEST-P (Bible Exposition Self-Training Program).",
      "Its aim is to raise a family well-equipped in all aspects of life, exemplary to Jesus Christ, by grounding members in sound doctrine and practical application of God's Word.",
    ]}
    rolesTitle="Key Roles & Activities"
    rolesIntro="This ministry focuses on discipleship, Bible study, and structured training."
    roles={[
      "Coordinating weekly Bible study groups across hostels and campus zones.",
      "Organizing nurturing classes for new believers and those desiring foundational teaching.",
      "Facilitating BEST-P and other Bible exposition trainings.",
      "Developing and distributing Bible study guides and materials.",
      "Encouraging a lifestyle of personal Bible reading and accountability partnerships.",
    ]}
    ctaTitle="Grow in the Word!"
    ctaSubtitle="Join our Bible Study and Discipleship programs and deepen your walk with Christ."
    primaryCtaLabel="Join This Ministry"
    primaryCtaHref="/contact"
    secondaryCtaLabel="Explore All Ministries"
    secondaryCtaHref="/ministries"
  />
);