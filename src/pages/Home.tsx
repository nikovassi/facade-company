import { Link } from 'react-router'
import { site } from '../content/site'
import { featuredProjects, projects } from '../content/projects'
import { services } from '../content/services'
import { materials } from '../content/materials'
import { HeroMedia } from '../components/media/HeroMedia'
import { ButtonLink } from '../components/ui/Button'
import { ProjectCard } from '../components/cards/ProjectCard'
import { ServiceCard } from '../components/cards/ServiceCard'
import { MaterialCard } from '../components/cards/MaterialCard'
import { SectionHead } from '../components/ui/SectionHead'
import { TrustSection } from '../components/sections/TrustSection'
import { ArchitectCta } from '../components/sections/ArchitectCta'
import { ServiceArea } from '../components/sections/ServiceArea'
import { Process } from '../components/sections/Process'
import { CtaBand } from '../components/sections/CtaBand'
import { InlineCta } from '../components/sections/InlineCta'
import { BeforeAfter } from '../components/media/BeforeAfter'
import { Icon } from '../components/ui/Icon'
import { localBusinessLd, organizationLd, useSeo, websiteLd } from '../lib/seo'
import { projectsForMaterial } from '../lib/filters'

export default function Home() {
  useSeo({
    title: `${site.brand} — фасадни облицовки, Al Bond, HPL и керамични фасади`,
    description: 'Проектиране, доставка, изработка и монтаж на фасадни облицовки и вентилируеми фасади: Al Bond / Alucobond (ACP), HPL и керамика. Метални конструкции, зимни градини и навеси. Поискайте оферта онлайн.',
    path: '/',
    jsonLd: [organizationLd(), localBusinessLd(), websiteLd()],
  })
  const featured = featuredProjects()
  const systems = services.filter((s) => s.group === 'system')
  const reno = projects.find((p) => p.beforeAfter)

  return (
    <>
      {/* HERO — answers "what, which materials, how to ask" in the first viewport */}
      <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#141517] text-white" aria-labelledby="hero-title">
        <HeroMedia image={site.hero.image} video={site.hero.video} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/30" aria-hidden="true" />
        <div className="container-x relative pb-[calc(7.5rem+env(safe-area-inset-bottom))] pt-28 lg:pb-20">
          <p className="anim-rise text-[0.9375rem] font-semibold tracking-[0.08em] text-white/85" style={{ ['--d' as string]: '80ms' }}>
            Al Bond <span className="text-[#f08a52]">•</span> HPL <span className="text-[#f08a52]">•</span> Керамика
          </p>
          <h1 id="hero-title" className="display mt-4 max-w-5xl anim-rise" style={{ ['--d' as string]: '160ms' }}>
            Фасадни решения
          </h1>
          <p className="mt-5 max-w-xl text-[1.1875rem] leading-snug text-white/85 anim-rise md:text-xl" style={{ ['--d' as string]: '260ms' }}>
            Проектиране, доставка и монтаж на фасадни облицовки и вентилируеми фасадни системи.
          </p>
          <div className="mt-8 flex flex-col gap-3 anim-rise sm:flex-row" style={{ ['--d' as string]: '360ms' }}>
            <ButtonLink to="/zapitvane?ot=hero" size="lg" icon="arrow" cta="hero">
              Поискай оферта
            </ButtonLink>
            <ButtonLink to="/proekti" size="lg" variant="outline-inverse" cta="hero-projects">
              Виж проектите
            </ButtonLink>
          </div>
          <ul className="mt-10 hidden flex-wrap gap-2 anim-rise sm:flex" style={{ ['--d' as string]: '460ms' }} aria-label="Услуги">
            {['Проектиране', 'Доставка', 'Изработка', 'Монтаж', 'Реконструкция'].map((t) => (
              <li key={t} className="rounded-full border border-white/20 px-3.5 py-1.5 text-sm text-white/80 backdrop-blur-sm">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROJECTS — show the work first */}
      <section className="pt-16 md:pt-24" aria-labelledby="projects-title">
        <SectionHead eyebrow="Портфолио" id="projects-title" title="Изпълнени обекти" link={{ to: '/proekti', label: 'Всички проекти' }} />
        <ul className="snap-row rail md:grid-cols-3 md:gap-4">
          {featured.map((p, i) => (
            <li key={p.id} className={`w-[86vw] max-w-sm md:w-auto md:max-w-none ${i === 0 ? 'md:col-span-2 md:row-span-1' : ''}`}>
              <ProjectCard p={p} size={i === 0 ? 'lg' : 'md'} />
            </li>
          ))}
        </ul>
        <InlineCta text="Имате подобен обект? Изпратете снимка — ще ви кажем какво е възможно." to="/zapitvane?ot=projects" from="home-projects" />
      </section>

      {/* SERVICES */}
      <section className="pt-16 md:pt-24" aria-labelledby="services-title">
        <SectionHead eyebrow="Услуги" id="services-title" title="Фасадни системи" intro="Една отговорност — от разкроя до последния панел." link={{ to: '/uslugi', label: 'Всички услуги' }} />
        <ul className="snap-row rail md:grid-cols-3 md:gap-4 lg:grid-cols-3">
          {systems.map((s, i) => (
            <li key={s.slug} className="w-[72vw] max-w-xs md:w-auto md:max-w-none">
              <ServiceCard s={s} index={i} />
            </li>
          ))}
        </ul>
        <div className="container-x mt-6 flex flex-wrap gap-2">
          {services.filter((s) => s.group === 'process').map((s) => (
            <Link key={s.slug} to={`/uslugi/${s.slug}`} className="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 font-medium hover:border-ink-3">
              {s.name} <Icon name="chevronRight" className="h-4 w-4 text-ink-3" />
            </Link>
          ))}
        </div>
        <InlineCta text="Не сте сигурни коя система е подходяща? Ще ви посъветваме." label="Консултация" to="/zapitvane?ot=services&usluga=consult" from="home-services" />
      </section>

      {/* METAL WORKS */}
      <section className="pt-16 md:pt-24" aria-labelledby="metal-title">
        <SectionHead eyebrow="Също изпълняваме" id="metal-title" title="Метални конструкции" intro="Стълбища и парапети, зимни градини, навеси, индустриални халета, врати и огради." link={{ to: '/uslugi#metalni-konstrukcii', label: 'Всички метални конструкции' }} />
        <ul className="snap-row rail md:grid-cols-3 md:gap-4 lg:grid-cols-5">
          {services.filter((s) => s.group === 'metal').map((s) => (
            <li key={s.slug} className="w-[64vw] max-w-xs md:w-auto md:max-w-none">
              <ServiceCard s={s} tall />
            </li>
          ))}
        </ul>
      </section>

      {/* MATERIALS */}
      <section className="pt-16 md:pt-24" aria-labelledby="materials-title">
        <SectionHead eyebrow="Материали" id="materials-title" title="С какво работим" link={{ to: '/materiali', label: 'Всички материали' }} />
        <ul className="snap-row rail md:grid-cols-3 md:gap-4 lg:grid-cols-5">
          {materials.map((m) => (
            <li key={m.slug} className="w-[70vw] max-w-xs md:w-auto md:max-w-none">
              <MaterialCard m={m} count={projectsForMaterial(projects, m.slug).length} />
            </li>
          ))}
        </ul>
        <InlineCta text="Изберете материал в запитването или отбележете „Не съм сигурен“." to="/zapitvane?ot=materials" from="home-materials" />
      </section>

      {/* BEFORE / AFTER */}
      {reno?.beforeAfter && (
        <section className="container-x pt-16 md:pt-24" aria-labelledby="ba-title">
          <div className="mb-6 flex flex-col gap-2 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div className="reveal">
              <p className="eyebrow mb-3">Реконструкция</p>
              <h2 id="ba-title" className="h-section">Преди и след</h2>
            </div>
            <Link to={`/proekti/${reno.slug}`} className="inline-flex min-h-11 items-center gap-2 font-semibold">Виж проекта <Icon name="arrow" /></Link>
          </div>
          <BeforeAfter before={reno.beforeAfter.before} after={reno.beforeAfter.after} />
        </section>
      )}

      <Process />
      <TrustSection showCerts={false} />
      <ArchitectCta />
      <ServiceArea />
      <CtaBand from="home" />
    </>
  )
}
