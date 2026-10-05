import { certificates, site } from '../../content/site'
import { Counter } from '../ui/Counter'
import { Placeholder } from '../ui/Chip'
import { CertificateCard } from '../cards/CertificateCard'
import { SectionHead } from '../ui/SectionHead'

export function TrustSection({ showCerts = true }: { showCerts?: boolean }) {
  return (
    <section className="py-16 md:py-24" aria-labelledby="trust-title">
      <SectionHead eyebrow="Доверие" id="trust-title" title="Защо да работите с нас?" intro="Показваме само проверими факти. Числата и сертификатите се попълват от фирмата." />
      <div className="container-x">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-line bg-line lg:grid-cols-4">
          {site.trustFacts.map((f, i) => (
            <div key={f.id} className="reveal bg-surface p-5 md:p-8" style={{ ['--d' as string]: `${i * 80}ms` }}>
              <dt className="text-[0.9375rem] text-ink-2">{f.label}</dt>
              <dd className="mt-2 text-[clamp(2.2rem,6vw,3.6rem)] font-semibold leading-none tracking-tight">
                {f.value !== null ? <Counter value={f.value} suffix={f.suffix} /> : <Placeholder className="!text-base">Попълва се</Placeholder>}
              </dd>
            </div>
          ))}
        </dl>
        <ul className="mt-6 grid gap-3 text-[1.0625rem] md:grid-cols-3">
          {['Работа с доказани материали и системи', 'Собствен екип за проектиране и монтаж', 'Опит с големи и сложни обекти'].map((t) => (
            <li key={t} className="flex items-start gap-3 rounded-2xl bg-surface-2 p-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{t} <Placeholder className="ml-1 align-middle">потвърдете</Placeholder></span>
            </li>
          ))}
        </ul>
        {showCerts && (
          <>
            <h3 className="mb-4 mt-12 text-2xl">Сертификати и квалификации</h3>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {certificates.map((c) => <li key={c.id}><CertificateCard c={c} /></li>)}
            </ul>
          </>
        )}
        {site.partners.length > 0 && (
          <ul className="mt-12 flex flex-wrap items-center gap-8 opacity-80" aria-label="Партньори и производители">
            {site.partners.map((p) => <li key={p.name}><img src={p.logo} alt={p.name} className="h-8 w-auto grayscale" loading="lazy" /></li>)}
          </ul>
        )}
      </div>
    </section>
  )
}
