import { Link } from 'react-router'
import type { Project } from '../../content/types'
import { Media } from '../media/Media'
import { buildingTypeSingular, materialLabels, serviceLabels } from '../../content/labels'
import { Icon } from '../ui/Icon'

/** Real project whose name / city / year are still to be supplied by the company */
export function PendingTag({ className = 'left-3 top-3' }: { className?: string }) {
  return (
    <span className={`pointer-events-none absolute z-10 ${className} inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm`}>
      <span className="h-1.5 w-1.5 rounded-full bg-[#f08a52]" aria-hidden="true" />
      Реален обект · данните предстоят
    </span>
  )
}

export function ProjectCard({ p, size = 'md', priority }: { p: Project; size?: 'md' | 'lg'; priority?: boolean }) {
  const mainService = p.services.includes('proektirane') && p.services.includes('montazh') ? 'Проектиране и монтаж' : serviceLabels[p.services[0]]
  return (
    <article className="group relative h-full">
      <Link to={`/proekti/${p.slug}`} className="block h-full overflow-hidden rounded-[24px] bg-[#141517] text-white">
        <div className={`relative ${size === 'lg' ? 'aspect-[4/5] md:aspect-[16/10]' : 'aspect-[4/5]'}`}>
          <Media
            image={p.cover}
            className="absolute inset-0 h-full w-full transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
            sizes={size === 'lg' ? '(min-width: 768px) 66vw, 88vw' : '(min-width: 768px) 33vw, 80vw'}
            priority={priority}
            label={p.isPlaceholder ? 'Примерен обект' : false}
          />
          {p.detailsPending && <PendingTag />}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <p className="text-sm text-white/75">
              {p.location.city && <><span>{p.location.city}</span> · </>}<span>{buildingTypeSingular[p.type]}</span>
            </p>
            <h3 className="mt-1 text-[1.6rem] leading-tight md:text-3xl">{p.title}</h3>
            <dl className="mt-3 grid gap-1 text-[0.9375rem]">
              <div className="flex gap-2"><dt className="text-white/60">Материали:</dt><dd>{p.materials.map((m) => materialLabels[m]).join(' + ')}</dd></div>
              <div className="flex gap-2"><dt className="text-white/60">Услуга:</dt><dd>{mainService}</dd></div>
            </dl>
            <span className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-white/15 px-4 text-[0.9375rem] font-semibold backdrop-blur-sm transition group-hover:bg-white group-hover:text-[#141517]">
              Виж проекта <Icon name="arrow" className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
