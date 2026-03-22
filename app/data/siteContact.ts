export const SITE_CONTACT_EMAIL = 'info@iftommyfg.org';

export function createSiteMailto(subject: string) {
  return `mailto:${SITE_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
