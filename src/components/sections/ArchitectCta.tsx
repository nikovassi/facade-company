import { ButtonLink } from '../ui/Button'

export function ArchitectCta() {
  return (
    <section className="container-x my-16" aria-labelledby="arch-title">
      <div className="grid-lines relative overflow-hidden rounded-[28px] border border-line bg-surface p-6 md:flex md:items-center md:justify-between md:gap-10 md:p-12">
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/95 to-surface/60" aria-hidden="true" />
        <div className="relative max-w-xl reveal">
          <p className="eyebrow mb-3">За професионалисти</p>
          <h2 id="arch-title" className="text-[clamp(1.75rem,4.5vw,2.75rem)]">Вие сте архитект или проектант?</h2>
          <p className="mt-3 text-lg text-ink-2">Спецификации, системи за монтаж, CAD детайли и документация — на едно място. Консултация по детайли и спецификация на фасадата.</p>
        </div>
        <div className="relative mt-6 flex flex-col gap-3 sm:flex-row md:mt-0 md:flex-col">
          <ButtonLink to="/za-proektanti" variant="secondary" size="lg" icon="arrow" cta="architect">Виж техническата информация</ButtonLink>
          <ButtonLink to="/zapitvane?ot=proektanti&usluga=consult" variant="ghost" size="lg" cta="architect-consult">Консултация</ButtonLink>
        </div>
      </div>
    </section>
  )
}
