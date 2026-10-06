import { useState } from 'react'
import { documents, documentCategoryLabels } from '../content/documents'
import { materials } from '../content/materials'
import type { DocumentItem, MaterialKey } from '../content/types'
import { materialLabels } from '../content/labels'
import { DownloadCard } from '../components/cards/DownloadCard'
import { MaterialCard } from '../components/cards/MaterialCard'
import { PageHero } from '../components/sections/PageHero'
import { CtaBand } from '../components/sections/CtaBand'
import { Chip } from '../components/ui/Chip'
import { ButtonLink } from '../components/ui/Button'
import { Icon, type IconName } from '../components/ui/Icon'
import { breadcrumbLd, useSeo } from '../lib/seo'

const topics: { icon: IconName; t: string; d: string }[] = [
  { icon: 'file', t: 'Технически спецификации', d: 'Данни на производителите за всеки материал.' },
  { icon: 'layers', t: 'Системи за монтаж', d: 'Подконструкции, видим и скрит крепеж.' },
  { icon: 'ruler', t: 'CAD детайли', d: 'Типови разрези, ъгли, примки към дограма.' },
  { icon: 'shield', t: 'Сертификати', d: 'Декларации за експлоатационни показатели.' },
]

export default function Architects() {
  useSeo({
    title: 'За проектанти — техническа информация, CAD и спецификации',
    description: 'Техническа информация за фасадни системи: спецификации, системи за монтаж, CAD детайли, PDF документация и сертификати за Al Bond, HPL и керамика.',
    path: '/za-proektanti',
    jsonLd: [breadcrumbLd([{ name: 'Начало', path: '/' }, { name: 'За проектанти', path: '/za-proektanti' }])],
  })
  const [mat, setMat] = useState<MaterialKey | 'all'>('all')
  const [cat, setCat] = useState<DocumentItem['category'] | 'all'>('all')
  const available = documents.filter((d) => d.href)
  const list = available.filter((d) => (mat === 'all' || d.material === mat) && (cat === 'all' || d.category === cat))
  const cats = [...new Set(available.map((d) => d.category))]
  const mats = [...new Set(available.map((d) => d.material).filter(Boolean))] as MaterialKey[]

  return (
    <>
      <PageHero eyebrow="За архитекти и проектанти" title="Техническа информация" intro="Спецификации, системи и детайли за проектиране на фасадата. Консултация по детайли, разкрой и избор на система.">
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/zapitvane?ot=proektanti&usluga=consult" size="lg" icon="arrow" cta="architects-consult">Заяви консултация</ButtonLink>
          <ButtonLink to="#downloads" size="lg" variant="ghost">Документация</ButtonLink>
        </div>
      </PageHero>

      <section className="container-x" aria-label="Теми">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((t, i) => (
            <li key={t.t} className="reveal rounded-[22px] border border-line bg-surface p-5" style={{ ['--d' as string]: `${i * 70}ms` }}>
              <Icon name={t.icon} className="h-6 w-6 text-accent" />
              <h2 className="mt-5 text-xl">{t.t}</h2>
              <p className="mt-1 text-[0.9375rem] text-ink-2">{t.d}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="downloads" className="container-x mt-16 scroll-mt-28" aria-labelledby="dl">
        <h2 id="dl" className="h-section mb-6">Документация</h2>
        {available.length > 0 ? (
          <>
            <div className="-mx-4 md:-mx-8">
              <div className="snap-row !gap-2" role="group" aria-label="Материал">
                <Chip active={mat === 'all'} onClick={() => setMat('all')}>Всички материали</Chip>
                {mats.map((m) => <Chip key={m} active={mat === m} onClick={() => setMat(m)}>{materialLabels[m]}</Chip>)}
              </div>
              <div className="snap-row mt-2 !gap-2" role="group" aria-label="Тип документ">
                <Chip active={cat === 'all'} onClick={() => setCat('all')}>Всички типове</Chip>
                {cats.map((c) => <Chip key={c} active={cat === c} onClick={() => setCat(c)}>{documentCategoryLabels[c]}</Chip>)}
              </div>
            </div>
            <ul className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {list.map((d) => <li key={d.id}><DownloadCard d={d} /></li>)}
            </ul>
            {list.length === 0 && <p className="mt-6 text-ink-2">Няма документи за този избор.</p>}
          </>
        ) : (
          <div className="grid gap-6 rounded-[28px] border border-line bg-surface p-6 md:grid-cols-[1.3fr_1fr] md:items-center md:p-10">
            <div>
              <p className="text-lg text-ink-2">Изпращаме документацията за конкретния проект — спецификации на материала, система за монтаж, типови детайли (PDF / DWG) и декларации за експлоатационни показатели.</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {Object.values(documentCategoryLabels).filter((l) => l !== 'Брошури').map((l) => <li key={l} className="rounded-full bg-surface-2 px-4 py-2">{l}</li>)}
              </ul>
            </div>
            <ButtonLink to="/zapitvane?ot=proektanti-docs&usluga=consult" size="lg" icon="arrow" cta="architects-docs">Поискай документация</ButtonLink>
          </div>
        )}
      </section>

      <section className="mt-16" aria-labelledby="am">
        <h2 id="am" className="container-x mb-6 text-3xl">Информация по материали</h2>
        <ul className="snap-row rail md:grid-cols-5 md:gap-4">
          {materials.map((m) => <li key={m.slug} className="w-[64vw] max-w-xs md:w-auto md:max-w-none"><MaterialCard m={m} /></li>)}
        </ul>
      </section>

      <CtaBand from="architects" title="Работите по проект с фасадна облицовка?" text="Изпратете чертежи (PDF, DWG) — ще помогнем с детайли, разкрой и избор на система." />
    </>
  )
}
