import { SITE_CONTACT_EMAIL } from '@app/data/siteContact';

export type SummerSchoolFeeRow = {
  category: string;
  earlyBird: string;
  regular: string;
  onsite: string;
};

export const SUMMER_SCHOOL_EVENT_NAME = 'Tokyo Summer School 2026';
export const SUMMER_SCHOOL_PROGRAM_NAME =
  'Designing the Sustainable City - Tokyo Case Studies';
export const SUMMER_SCHOOL_PUBLIC_CONTACT_EMAIL = SITE_CONTACT_EMAIL;
export const SUMMER_SCHOOL_CONTACT_NAME = 'Dr. Sajjad Keshtkar';
export const SUMMER_SCHOOL_CONTACT_EMAIL = SUMMER_SCHOOL_PUBLIC_CONTACT_EMAIL;
export const SUMMER_SCHOOL_CONTACT_AFFILIATION =
  'Tokyo Metropolitan University';
export const SUMMER_SCHOOL_REGISTRATION_PATH = '/summer-school/registration';
export const SUMMER_SCHOOL_REGISTRATION_SUBJECT = `${SUMMER_SCHOOL_EVENT_NAME} Registration Inquiry`;
export const SUMMER_SCHOOL_REGISTRATION_MAILTO = `mailto:${SUMMER_SCHOOL_CONTACT_EMAIL}?subject=${encodeURIComponent(
  SUMMER_SCHOOL_REGISTRATION_SUBJECT
)}`;

export const SUMMER_SCHOOL_FEE_SCHEDULE: SummerSchoolFeeRow[] = [
  {
    category: 'Partner university',
    earlyBird: '$150',
    regular: '$150',
    onsite: '$150',
  },
  {
    category: 'IFToMM community',
    earlyBird: '€300',
    regular: '€350',
    onsite: '€400',
  },
  {
    category: 'Regular attendees',
    earlyBird: '€350',
    regular: '€400',
    onsite: '€450',
  },
  {
    category: 'Students',
    earlyBird: '€250',
    regular: '€300',
    onsite: '€350',
  },
  {
    category: 'Accompanying persons',
    earlyBird: '€200',
    regular: '€200',
    onsite: '€250',
  },
];

export const SUMMER_SCHOOL_FEE_NOTES = [
  'Partner university rate: a flat $150 USD fee for students and faculty from IFToMM YFG partner institutions.',
  'Included: all course materials, welcome reception/dinner, farewell gathering lunch, and certificate of completion.',
  'Not included: international travel, accommodation, personal expenses, travel insurance, and optional weekend day trip (estimated €50-60).',
  'A limited number of fee waivers may be available pending sponsorship confirmation. Details will be announced with the call for applications.',
];

export const SUMMER_SCHOOL_ACCOMPANYING_NOTE =
  'Accompanying persons may participate in all sightseeing and field study activities.';
