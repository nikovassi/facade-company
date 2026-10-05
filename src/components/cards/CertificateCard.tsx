import { useState } from 'react'
import type { Certificate } from '../../content/types'
import { Sheet } from '../ui/Sheet'
import { Media } from '../media/Media'
import { Placeholder } from '../ui/Chip'
import { Icon } from '../ui/Icon'
import { asset } from '../../lib/paths'

const kindLabel: Record<Certificate['kind'], string> = { iso: 'Управление', safety: 'Безопасност', manufacturer: 'Производител', training: 'Обучение' }

export function CertificateCard({ c }: { c: Certificate }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="group flex h-full w-full flex-col justify-between gap-6 rounded-[22px] border border-line bg-surface p-5 text-left transition-shadow hover:shadow-card">
        <span className="flex items-center justify-between">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-surface-2"><Icon name="shield" /></span>
          <span className="text-sm text-ink-3">{kindLabel[c.kind]}</span>
        </span>
        <span>
          <span className="block text-xl font-semibold">{c.title}</span>
          <span className="mt-1 block text-sm text-ink-2">{c.issuer}</span>
          {c.isPlaceholder && <Placeholder className="mt-3">Добавете сертификат</Placeholder>}
        </span>
      </button>
      <Sheet open={open} onClose={() => setOpen(false)} title={c.title}>
        <p className="text-ink-2">{c.issuer}{c.validUntil ? ` · валиден до ${c.validUntil}` : ''}</p>
        <div className="mt-4">
          {c.image ? <Media image={c.image} className="aspect-[3/4] w-full rounded-xl" label={false} /> : (
            <div className="grid aspect-[3/4] place-items-center rounded-xl border border-dashed border-line bg-surface-2 p-6 text-center text-ink-3">
              Сканираният сертификат ще бъде показан тук след предоставяне от фирмата.
            </div>
          )}
        </div>
        {c.href && (
          <a href={/^https?:/.test(c.href) ? c.href : asset(c.href)} className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-accent" target="_blank" rel="noopener noreferrer">
            <Icon name="download" /> Изтегли PDF
          </a>
        )}
      </Sheet>
    </>
  )
}
