import { site } from '../content/site'
import { PageHero } from '../components/sections/PageHero'
import { TrustSection } from '../components/sections/TrustSection'
import { ServiceArea } from '../components/sections/ServiceArea'
import { Process } from '../components/sections/Process'
import { CtaBand } from '../components/sections/CtaBand'
import { Media } from '../components/media/Media'
import { Placeholder } from '../components/ui/Chip'
import { breadcrumbLd, organizationLd, useSeo } from '../lib/seo'

export default function About() {
  useSeo({
    title: 'За нас — фасадни облицовки и вентилируеми фасади',
    description: 'Фирма за проектиране, доставка, изработка и монтаж на фасадни облицовки: опит, сертификати, район на работа.',
    path: '/za-nas',
    jsonLd: [organizationLd(), breadcrumbLd([{ name: 'Начало', path: '/' }, { name: 'За нас', path: '/za-nas' }])],
  })
  return (
    <>
      <PageHero eyebrow="За нас" title={<>Фасади с инженерна прецизност</>} intro="Проектираме, доставяме, изработваме и монтираме фасадни облицовки — с един отговорен екип за целия процес." />
      <section className="container-x grid gap-8 md:grid-cols-2 md:items-center">
        <Media image={{ alt: 'Екипът на обект', tone: 'acp-bronze', seed: 88 }} className="aspect-[4/3] rounded-[28px]" label="Placeholder · снимка на екипа / обект" />
        <div className="reveal">
          <p className="text-xl leading-snug md:text-2xl">
            {site.foundedYear ? `От ${site.foundedYear} г. ` : ''}Работим с алуминиеви композитни панели, HPL, керамични плочи и Laminam — за нови сгради и реконструкции.
          </p>
          <p className="mt-4 text-ink-2">
            <Placeholder>История на фирмата</Placeholder> — 2–3 изречения: кога е основана, какъв е екипът, с какви обекти се гордеете.
          </p>
        </div>
      </section>
      <TrustSection />
      <Process />
      <ServiceArea />
      <CtaBand from="about" />
    </>
  )
}
