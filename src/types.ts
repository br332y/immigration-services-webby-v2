export interface VisaService {
  id: string;
  title: string;
  section: string;
  iconName: string;
  description: string;
  longDescription: string;
  requirements: string[];
  pointsSystemApplicable?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  visaType: string;
  date: string;
}

export interface AssessmentFormInput {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  currentVisaStatus: string;
  visaTypeNeeded: string;
  message: string;
}
