import { services } from '../content/services'
import { ServiceCard } from '../components/cards/ServiceCard'
import { PageHero } from '../components/sections/PageHero'
import { CtaBand } from '../components/sections/CtaBand'
import { Process } from '../components/sections/Process'
import { breadcrumbLd, useSeo } from '../lib/seo'

export default function Services() {
  useSeo({
    title: 'Услуги — фасадни облицовки, вентилируеми и окачени фасади',
    description: 'Al Bond / ACP, HPL и керамични фасади, вентилируеми и окачени фасади, проектиране, доставка, монтаж и реконструкция. Метални стълбища, парапети, зимни градини, навеси, халета, врати и огради.',
    path: '/uslugi',
    jsonLd: [breadcrumbLd([{ name: 'Начало', path: '/' }, { name: 'Услуги', path: '/uslugi' }])],
  })
  const systems = services.filter((s) => s.group === 'system')
  const process = services.filter((s) => s.group === 'process')
  const metal = services.filter((s) => s.group === 'metal')
  return (
    <>
      <PageHero eyebrow="Услуги" title="Фасадни системи и услуги" intro="Изберете система или етап — всяка услуга може да бъде поръчана самостоятелно или като цялостно изпълнение." />
      <section className="container-x" aria-labelledby="sys">
        <h2 id="sys" className="mb-4 text-2xl">Системи</h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((s, i) => <li key={s.slug}><ServiceCard s={s} index={i} /></li>)}
        </ul>
      </section>
      <section className="container-x mt-14" aria-labelledby="proc">
        <h2 id="proc" className="mb-4 text-2xl">Етапи</h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((s, i) => <li key={s.slug}><ServiceCard s={s} index={i} /></li>)}
        </ul>
      </section>
      <section id="metalni-konstrukcii" className="container-x mt-14 scroll-mt-28" aria-labelledby="metal">
        <h2 id="metal" className="text-2xl">Метални конструкции</h2>
        <p className="mb-4 mt-2 max-w-2xl text-ink-2">Изработка и монтаж на метални конструкции — от стълбища и огради до зимни градини и индустриални халета.</p>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metal.map((s, i) => <li key={s.slug}><ServiceCard s={s} index={i} /></li>)}
        </ul>
      </section>
      <Process />
      <CtaBand from="services" />
    </>
  )
}
