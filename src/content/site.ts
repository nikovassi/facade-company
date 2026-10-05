import type { Certificate, ImageAsset, TrustFact, VideoAsset } from './types'

/**
 * Company data. Every `null` value is rendered as a visible placeholder or hidden
 * (contact channels are shown ONLY when provided — e.g. WhatsApp / Viber).
 * Replace with real, verified data before launch.
 */
export const site = {
  /** Working brand name — replace with the real company name and logo (public/logo.svg). */
  brand: 'FACADE',
  brandTagline: 'фасадни системи',
  legalName: null as string | null,
  vatId: null as string | null,
  foundedYear: null as number | null,

  url: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || 'https://nikovassi.github.io/facade-company',

  contacts: {
    /** E.164 format, e.g. "+359888123456" */
    phone: null as string | null,
    phoneDisplay: null as string | null,
    email: null as string | null,
    privacyEmail: null as string | null,
    /** Number in international format without "+" for wa.me links */
    whatsapp: null as string | null,
    viber: null as string | null,
    address: null as { street: string; city: string; postalCode?: string } | null,
    workingHours: null as string | null,
  },

  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    linkedin: null as string | null,
    youtube: null as string | null,
  },

  /** Hero visual. Replace with a real facade photo (and optional short video with poster). */
  hero: {
    image: { alt: 'Фасада от алуминиеви композитни панели', tone: 'acp-graphite', seed: 7 } as ImageAsset,
    video: null as VideoAsset | null,
  },

  /** Promise shown in the quote flow. null → placeholder until the company confirms it. */
  responseTime: null as string | null,

  serviceArea: {
    /** e.g. "Цяла България" — confirm with the company */
    summary: null as string | null,
    cities: [] as string[],
    international: [] as string[],
  },

  /**
   * Local SEO landing pages. Add a region ONLY when the company has real projects and
   * unique content there — each entry generates /fasadi-<slug>.
   */
  regions: [] as { slug: string; city: string; intro: string }[],

  /** Facts for the trust section. value: null → placeholder (never invent numbers). */
  trustFacts: [
    { id: 'years', value: null, suffix: '+', label: 'години опит' },
    { id: 'projects', value: null, suffix: '+', label: 'изпълнени обекта' },
    { id: 'area', value: null, suffix: ' m²', label: 'монтирана фасада' },
    { id: 'warranty', value: null, suffix: ' г.', label: 'гаранция за монтаж' },
  ] satisfies TrustFact[],

  /** Logos of clients / partners / manufacturers — only with written permission. */
  partners: [] as { name: string; logo: string; href?: string }[],
}

export const certificates: Certificate[] = [
  { id: 'iso-9001', title: 'ISO 9001', issuer: 'Сертифициращ орган — placeholder', kind: 'iso', isPlaceholder: true },
  { id: 'ipaf', title: 'IPAF', issuer: 'Работа с подемна техника — placeholder', kind: 'safety', isPlaceholder: true },
  { id: 'manufacturer', title: 'Сертификат от производител', issuer: 'Производител на панели — placeholder', kind: 'manufacturer', isPlaceholder: true },
  { id: 'training', title: 'Обучение за монтаж', issuer: 'Системен доставчик — placeholder', kind: 'training', isPlaceholder: true },
]

export const hasPhone = () => Boolean(site.contacts.phone)
export const phoneHref = () => (site.contacts.phone ? `tel:${site.contacts.phone}` : undefined)
export const emailHref = () => (site.contacts.email ? `mailto:${site.contacts.email}` : undefined)
