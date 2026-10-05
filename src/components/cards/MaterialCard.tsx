import { Link } from 'react-router'
import type { Material } from '../../content/types'
import { Media } from '../media/Media'
import { Icon } from '../ui/Icon'

export function MaterialCard({ m, count }: { m: Material; count?: number }) {
  return (
    <Link to={`/materiali/${m.slug}`} className="group block h-full overflow-hidden rounded-[24px] border border-line bg-surface transition-shadow hover:shadow-card">
      <div className="relative aspect-[5/4] overflow-hidden">
        <Media image={m.cover} className="absolute inset-0 h-full w-full transition-transform duration-[1.2s] group-hover:scale-[1.05]" sizes="(min-width: 1024px) 25vw, 70vw" label={false} />
      </div>
      <div className="flex items-start justify-between gap-3 p-5">
        <div>
          <h3 className="text-2xl">{m.name}</h3>
          <p className="mt-2 text-[0.9375rem] leading-snug text-ink-2">{m.shortDescription}</p>
          {count !== undefined && count > 0 && <p className="mt-3 text-sm font-medium text-ink-3">{count} {count === 1 ? 'проект' : 'проекта'}</p>}
        </div>
        <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-surface-2 transition group-hover:bg-accent group-hover:text-accent-ink" aria-hidden="true">
          <Icon name="arrow" className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}
