import { materials } from '../content/materials'
import { projects } from '../content/projects'
import { MaterialCard } from '../components/cards/MaterialCard'
import { PageHero } from '../components/sections/PageHero'
import { CtaBand } from '../components/sections/CtaBand'
import { ArchitectCta } from '../components/sections/ArchitectCta'
import { projectsForMaterial } from '../lib/filters'
import { breadcrumbLd, useSeo } from '../lib/seo'

export default function Materials() {
  useSeo({
    title: 'Материали — Al Bond, HPL, керамика, Laminam',
    description: 'Фасадни материали: алуминиев композитен панел (Al Bond, ACP, Alucobond), HPL, керамични фасадни плочи, Laminam и други облицовки.',
    path: '/materiali',
    jsonLd: [breadcrumbLd([{ name: 'Начало', path: '/' }, { name: 'Материали', path: '/materiali' }])],
  })
  return (
    <>
      <PageHero eyebrow="Материали" title="Материали за фасади" intro="Всеки материал има различна визия, система за монтаж и приложение. Изберете, за да видите детайли и проекти." />
      <section className="container-x" aria-labelledby="mat-list">
        <h2 id="mat-list" className="sr-only">Всички материали</h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((m) => <li key={m.slug}><MaterialCard m={m} count={projectsForMaterial(projects, m.slug).length} /></li>)}
        </ul>
      </section>
      <ArchitectCta />
      <CtaBand from="materials" title="Не сте сигурни кой материал?" text="Опишете сградата и изпратете снимка — ще предложим подходящ материал и система." />
    </>
  )
}
