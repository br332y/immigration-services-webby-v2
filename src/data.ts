import { VisaService, Testimonial } from "./types";

export const SERVICES_DATA: VisaService[] = [
  {
    id: "temporary-residence",
    title: "Temporary Residence Visas",
    section: "Various Sections",
    iconName: "Home",
    description: "Visitor, Business, Study, Medical Treatment, Relative, and Retirement Visas.",
    longDescription: "We assist with a wide range of Temporary Residence Visas, ensuring you meet all requirements for short or long-term stays in South Africa. Whether you are visiting, doing business, studying, receiving medical treatment, joining relatives, or retiring, our firm handles the entire application process.",
    requirements: [
      "Visitor Visas",
      "Business Visas",
      "Study Visas",
      "Medical Treatment Visas",
      "Relative Visas",
      "Retirement Visas"
    ]
  },
  {
    id: "work-visas",
    title: "Work Visas",
    section: "Section 19 & 21",
    iconName: "Briefcase",
    description: "Critical Skills, General Work, Corporate, and Employer-Sponsored Work Visas.",
    longDescription: "South Africa offers several work visa categories. We provide comprehensive guidance on Critical Skills Work Visas for highly qualified professionals, General Work Visas (Points System) for those with specific job offers, as well as Corporate and Employer-Sponsored Work Visas for companies transferring or hiring international talent.",
    pointsSystemApplicable: true,
    requirements: [
      "Critical Skills Work Visas",
      "General Work Visas",
      "Corporate Work Visas",
      "Employer-Sponsored Work Visas"
    ]
  },
  {
    id: "permanent-residence",
    title: "Permanent Residence",
    section: "Section 26 & 27",
    iconName: "Building",
    description: "Permanent Residence Applications, Renewals, and Consultations.",
    longDescription: "Securing Permanent Residence in South Africa provides long-term stability. We assist with initial Permanent Residence Applications across various categories (such as 5 years of continuous work, critical skills, or spousal routes), handle Renewals (Proof of Residency), and provide detailed Permanent Residence Consultations.",
    requirements: [
      "Permanent Residence Applications",
      "Permanent Residence Renewals",
      "Permanent Residence Consultations"
    ]
  },
  {
    id: "professional-consultations",
    title: "Professional Consultations",
    section: "Advisory Services",
    iconName: "Handshake",
    description: "Immigration Assessments, Application Reviews, Appeal Guidance, and Compliance Advice.",
    longDescription: "Before submitting any application, proper strategy is essential. Our professional consultations cover full Immigration Assessments to determine eligibility, Application Reviews for self-prepared files, Appeal Guidance for rejected applications, and Corporate Compliance Advice for employers.",
    requirements: [
      "Immigration Assessments",
      "Application Reviews",
      "Appeal Guidance",
      "Compliance Advice"
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    quote: "Ida guided us through the entire critical skills visa process from start to finish. The documentation checklist was precise and nothing was missing. Approved first time.",
    author: "Priya M.",
    visaType: "Critical Skills Work Visa",
    date: "March 2024"
  },
  {
    id: "t2",
    quote: "As a company bringing in coded welders from Zimbabwe, we needed a corporate visa urgently. Ida's office handled everything efficiently and professionally. Highly recommended.",
    author: "Operations Manager, Fabrication Co.",
    visaType: "Corporate Work Visa",
    date: "October 2023"
  },
  {
    id: "t3",
    quote: "My spousal visa was complex — different country of origin, previous visa refusal. Ida knew exactly what was needed and got it approved. Couldn't have done it without her.",
    author: "Fatima K.",
    visaType: "Spousal Visa (Section 11.6)",
    date: "January 2025"
  }
];

export const POINTS_SYSTEM_TABLE = [
  { criteria: "Occupation", detail: "Occupation on critical skills list", points: 100 },
  { criteria: "Qualifications", detail: "NQF level 9 & 10", points: 50 },
  { criteria: "Qualifications (Alt)", detail: "NQF levels 7 and 8", points: 30 },
  { criteria: "Offer of Employment", detail: "Above R976,194 gross per annum (or ~R82,000 monthly)", points: 50 },
  { criteria: "Offer of Employment (Alt)", detail: "Between R650,796 and R976,194 gross per annum (~R55,000 monthly)", points: 20 },
  { criteria: "Work Experience", detail: "5 – 10 Years", points: 20 },
  { criteria: "Work Experience (Alt)", detail: "10+ Years", points: 30 },
  { criteria: "Employment Status", detail: "Offer from a SA Goverment Trusted Employer", points: 20 },
  { criteria: "Language Skills", detail: "Proficient in at least one SA official language", points: 10 }
];
