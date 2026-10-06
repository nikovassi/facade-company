import type { Certificate, ImageAsset, TrustFact, VideoAsset } from './types'

/**
 * Company data. Every `null` value is rendered as a visible placeholder or hidden
 * (contact channels are shown ONLY when provided — e.g. WhatsApp / Viber).
 * Replace with real, verified data before launch.
 */
export const site = {
  /** Source: recom.bg (НАЧАЛО, КОНТАКТИ) */
  brand: 'РЕКОМ ГРУП',
  brandTagline: 'фасадни системи',
  legalName: 'РЕКОМ ГРУП ЕООД' as string | null,
  /** ЕИК */
  vatId: '204601228' as string | null,
  /** Founded 19 May 2017 (recom.bg) */
  foundedYear: 2017 as number | null,

  url: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || 'https://nikovassi.github.io/recom',

  contacts: {
    /** E.164 format, e.g. "+359888123456" */
    phone: '+359888527137' as string | null,
    phoneDisplay: '0888 527 137' as string | null,
    email: 'office@recom.bg' as string | null,
    privacyEmail: 'office@recom.bg' as string | null,
    /** Number in international format without "+" for wa.me links */
    whatsapp: null as string | null,
    viber: null as string | null,
    address: { street: 'р-н Красна поляна, бл. 15, вх. А, ет. 4', city: 'София' } as { street: string; city: string; postalCode?: string } | null,
    workingHours: '08:00 – 18:00' as string | null,
  },

  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    linkedin: null as string | null,
    youtube: null as string | null,
  },

  /** Hero visual. Replace with a real facade photo (and optional short video with poster). */
  hero: {
    image: { src: 'images/projects/keramika-zhilishtna/cover', alt: 'Вентилируема керамична фасада, изпълнена от РЕКОМ ГРУП' } as ImageAsset,
    video: null as VideoAsset | null,
  },

  /** Promise shown in the quote flow. null → placeholder until the company confirms it. */
  responseTime: null as string | null,

  serviceArea: {
    summary: 'София и региона' as string | null,
    cities: ['София'] as string[],
    international: [] as string[],
  },

  /**
   * Local SEO landing pages. Add a region ONLY when the company has real projects and
   * unique content there — each entry generates /fasadi-<slug>.
   */
  regions: [] as { slug: string; city: string; intro: string }[],

  /** Facts for the trust section. value: null → placeholder (never invent numbers). */
  trustFacts: [
    { id: 'years', value: 8, suffix: '+', label: 'години опит' },
    { id: 'clients', value: 100, suffix: '+', label: 'доволни клиенти' },
    { id: 'projects', value: 500, suffix: '+', label: 'завършени обекта' },
  ] satisfies TrustFact[],

  /** Logos of clients / partners / manufacturers — only with written permission. */
  partners: [] as { name: string; logo: string; href?: string }[],
}

/** Add real certificates (ISO, IPAF, manufacturer trainings) here — the section appears automatically. */
export const certificates: Certificate[] = []

export const hasPhone = () => Boolean(site.contacts.phone)
export const phoneHref = () => (site.contacts.phone ? `tel:${site.contacts.phone}` : undefined)
export const emailHref = () => (site.contacts.email ? `mailto:${site.contacts.email}` : undefined)
