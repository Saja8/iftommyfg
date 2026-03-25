export const SITE_CONTACT_EMAIL = 'contact@iftommyfg.org';
export const SITE_LINKEDIN_URL =
  'https://www.linkedin.com/company/iftomm-young-faculty-group';

export function createSiteMailto(subject: string) {
  return `mailto:${SITE_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
