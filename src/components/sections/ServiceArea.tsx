import { site } from '../../content/site'
import { Placeholder } from '../ui/Chip'
import { Icon } from '../ui/Icon'

export function ServiceArea() {
  const a = site.serviceArea
  return (
    <section className="container-x my-16" aria-labelledby="area-title">
      <div className="grid gap-6 rounded-[28px] bg-surface-2 p-6 md:grid-cols-[1fr_1.4fr] md:p-10">
        <div>
          <p className="eyebrow mb-3">Район на работа</p>
          <h2 id="area-title" className="text-[clamp(1.75rem,4.5vw,2.75rem)]">Работим ли във вашия район?</h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="flex items-center gap-3 text-xl font-semibold">
            <Icon name="pin" className="h-6 w-6 text-accent" />
            {a.summary ?? <Placeholder className="!text-base">напр. „Цяла България“ — потвърдете</Placeholder>}
          </p>
          {a.cities.length > 0 ? (
            <ul className="flex flex-wrap gap-2">{a.cities.map((c) => <li key={c} className="rounded-full bg-surface px-4 py-2">{c}</li>)}</ul>
          ) : (
            <Placeholder>Основни градове</Placeholder>
          )}
          {a.international.length > 0 && <p className="text-ink-2">Международни проекти: {a.international.join(', ')}</p>}
          <p className="text-ink-2">Посочете града в запитването — ще потвърдим възможността за оглед и срок.</p>
        </div>
      </div>
    </section>
  )
}
