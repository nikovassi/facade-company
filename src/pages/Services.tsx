import { services } from '../content/services'
import { ServiceCard } from '../components/cards/ServiceCard'
import { PageHero } from '../components/sections/PageHero'
import { CtaBand } from '../components/sections/CtaBand'
import { Process } from '../components/sections/Process'
import { breadcrumbLd, useSeo } from '../lib/seo'

export default function Services() {
  useSeo({
    title: 'Услуги — фасадни облицовки, вентилируеми и окачени фасади',
    description: 'Al Bond / ACP, HPL и керамични фасади, вентилируеми и окачени фасади, фасадни конструкции, проектиране, доставка, монтаж и реконструкция.',
    path: '/uslugi',
    jsonLd: [breadcrumbLd([{ name: 'Начало', path: '/' }, { name: 'Услуги', path: '/uslugi' }])],
  })
  const systems = services.filter((s) => s.group === 'system')
  const process = services.filter((s) => s.group === 'process')
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
      <Process />
      <CtaBand from="services" />
    </>
  )
}
