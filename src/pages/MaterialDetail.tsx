import { useEffect } from 'react'
import { useParams } from 'react-router'
import { getMaterial, materials } from '../content/materials'
import { projects } from '../content/projects'
import { documents } from '../content/documents'
import { buildingTypeLabels } from '../content/labels'
import { Media } from '../components/media/Media'
import { Gallery } from '../components/media/Gallery'
import { ProjectCard } from '../components/cards/ProjectCard'
import { MaterialCard } from '../components/cards/MaterialCard'
import { DownloadCard } from '../components/cards/DownloadCard'
import { CtaBand } from '../components/sections/CtaBand'
import { Breadcrumbs } from '../components/sections/PageHero'
import { ButtonLink } from '../components/ui/Button'
import { Placeholder } from '../components/ui/Chip'
import { Icon } from '../components/ui/Icon'
import { projectsForMaterial } from '../lib/filters'
import { breadcrumbLd, serviceLd, useSeo } from '../lib/seo'
import { track } from '../lib/analytics'
import NotFound from './NotFound'

export default function MaterialDetail() {
  const { slug = '' } = useParams()
  const m = getMaterial(slug)
  useEffect(() => { if (m) track('material_view', { material: m.slug }) }, [m])
  if (!m) return <NotFound />
  return <MaterialView key={m.id} m={m} />
}

function List({ title, items, empty }: { title: string; items: string[]; empty: string }) {
  return (
    <div className="reveal">
      <h3 className="eyebrow mb-3">{title}</h3>
      {items.length ? (
        <ul className="flex flex-wrap gap-2">{items.map((i) => <li key={i} className="rounded-full bg-surface-2 px-4 py-2">{i}</li>)}</ul>
      ) : (
        <Placeholder>{empty}</Placeholder>
      )}
    </div>
  )
}

function MaterialView({ m }: { m: NonNullable<ReturnType<typeof getMaterial>> }) {
  const path = `/materiali/${m.slug}`
  useSeo({
    title: m.seoTitle,
    description: m.seoDescription,
    path,
    jsonLd: [serviceLd({ name: `${m.name} фасади`, seoDescription: m.seoDescription, path }), breadcrumbLd([{ name: 'Начало', path: '/' }, { name: 'Материали', path: '/materiali' }, { name: m.name, path }])],
  })
  const related = projectsForMaterial(projects, m.slug)
  const docs = documents.filter((d) => d.material === m.slug)
  const others = materials.filter((x) => x.slug !== m.slug)

  return (
    <article>
      <header className="container-x pt-[calc(5.5rem+env(safe-area-inset-top))] lg:pt-28">
        <Breadcrumbs items={[{ name: 'Начало', to: '/' }, { name: 'Материали', to: '/materiali' }, { name: m.name, to: path }]} />
        <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <h1 className="text-[clamp(3rem,11vw,7rem)] font-semibold leading-[0.9] tracking-[-0.045em] anim-rise">{m.name}</h1>
            {m.aka && <p className="mt-3 text-ink-3 anim-rise" style={{ ['--d' as string]: '60ms' }}>{m.aka.join(' · ')}</p>}
            <p className="mt-5 max-w-xl text-lg text-ink-2 anim-rise md:text-xl" style={{ ['--d' as string]: '120ms' }}>{m.shortDescription}</p>
            <div className="mt-7 flex flex-col gap-3 anim-rise sm:flex-row" style={{ ['--d' as string]: '180ms' }}>
              <ButtonLink to={`/zapitvane?ot=material-${m.slug}&material=${m.slug}`} size="lg" icon="arrow" cta={`material-${m.slug}`}>Поискай оферта за {m.name}</ButtonLink>
              {related.length > 0 && <ButtonLink to={`/proekti?material=${m.slug}`} size="lg" variant="ghost">Проекти · {related.length}</ButtonLink>}
            </div>
          </div>
          <Media image={m.cover} priority className="aspect-[4/3] rounded-[28px] reveal-img lg:aspect-[5/4]" label="Placeholder · визия на материала" sizes="(min-width: 768px) 45vw, 100vw" />
        </div>
      </header>

      <section className="container-x grid gap-10 py-14 md:grid-cols-2 md:py-20">
        <div className="reveal">
          <h2 className="text-3xl">Материалът</h2>
          <p className="mt-4 text-lg text-ink-2">{m.description}</p>
          <h3 className="eyebrow mb-3 mt-8">Предимства</h3>
          <ul className="grid gap-2">
            {m.advantages.map((a) => <li key={a} className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-4"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />{a}</li>)}
          </ul>
        </div>
        <div className="grid h-fit gap-8">
          <List title="Приложения" items={m.applications} empty="Приложения" />
          <List title="Подходящи сгради" items={m.buildingTypes.map((b) => buildingTypeLabels[b])} empty="Типове сгради" />
          <List title="Възможни покрития" items={m.finishes} empty="Покрития — по каталог на производителя" />
          <List title="Цветове" items={m.colors} empty="Цветова карта — по каталог на производителя" />
          <List title="Формати" items={m.formats} empty="Формати — по данни на производителя" />
        </div>
      </section>

      <section className="container-x pb-12" aria-labelledby="td">
        <h2 id="td" className="mb-4 text-3xl">Технически характеристики</h2>
        {m.technicalData.length ? (
          <dl className="grid gap-px overflow-hidden rounded-[22px] border border-line bg-line sm:grid-cols-2">
            {m.technicalData.map((t) => (
              <div key={t.label} className="bg-surface p-4">
                <dt className="text-sm text-ink-3">{t.label}</dt>
                <dd className="mt-1 font-semibold">{t.value}</dd>
                {t.source && <dd className="mt-1 text-xs text-ink-3">Източник: {t.source}</dd>}
              </div>
            ))}
          </dl>
        ) : (
          <div className="rounded-[22px] border border-dashed border-line p-6 text-ink-2">
            <Placeholder>Проверени технически данни</Placeholder>
            <p className="mt-3">Публикуваме само проверени стойности от производителя (дебелина, тегло, клас по реакция на огън, формати). Ако имате нужда от спецификация за конкретен проект — изпратете запитване.</p>
          </div>
        )}
        {docs.length > 0 && <ul className="mt-4 grid gap-3 md:grid-cols-2">{docs.map((d) => <li key={d.id}><DownloadCard d={d} /></li>)}</ul>}
      </section>

      {m.gallery.length > 0 && (
        <section className="pb-12" aria-labelledby="mg">
          <h2 id="mg" className="container-x mb-6 text-3xl">Визия</h2>
          <Gallery images={m.gallery} title={`Галерия: ${m.name}`} />
        </section>
      )}

      {related.length > 0 && (
        <section className="pb-4" aria-labelledby="mp">
          <h2 id="mp" className="container-x mb-6 text-3xl">Проекти с {m.name}</h2>
          <ul className="snap-row rail md:grid-cols-3 md:gap-4">
            {related.map((p) => <li key={p.id} className="w-[80vw] max-w-sm md:w-auto md:max-w-none"><ProjectCard p={p} /></li>)}
          </ul>
        </section>
      )}

      <CtaBand from={`material-${m.slug}`} title={`Фасада от ${m.name}?`} />

      <section className="pb-8" aria-labelledby="om">
        <h2 id="om" className="container-x mb-6 text-2xl">Други материали</h2>
        <ul className="snap-row rail md:grid-cols-4 md:gap-4">
          {others.map((o) => <li key={o.slug} className="w-[64vw] max-w-xs md:w-auto md:max-w-none"><MaterialCard m={o} /></li>)}
        </ul>
      </section>
    </article>
  )
}
