import { describe, expect, it } from 'vitest'
import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderAt } from './render'
import { projects } from '../content/projects'
import { materials } from '../content/materials'
import { services } from '../content/services'

describe('routing', () => {
  it.each([
    ['/', /Фасадни решения/],
    ['/proekti', /^Проекти$/],
    ['/uslugi', /Фасадни системи и услуги/],
    ['/materiali', /Материали за фасади/],
    ['/za-proektanti', /Техническа информация/],
    ['/za-nas', /инженерна прецизност/],
    ['/kontakti', /Да поговорим/],
    ['/poveritelnost', /Политика за поверителност/],
    ['/nyama-takava', /Тази страница не съществува/],
  ])('%s renders its page', async (path, heading) => {
    renderAt(path)
    expect(await screen.findByRole('heading', { level: 1, name: heading })).toBeInTheDocument()
  })

  it('renders every project, material and service detail page', async () => {
    for (const [path, title] of [
      [`/proekti/${projects[0].slug}`, projects[0].title],
      [`/materiali/${materials[1].slug}`, materials[1].name],
      [`/uslugi/${services[2].slug}`, services[2].name],
    ]) {
      const { unmount } = renderAt(path)
      expect(await screen.findByRole('heading', { level: 1, name: title })).toBeInTheDocument()
      unmount()
    }
  })

  it('unknown slugs show 404', async () => {
    renderAt('/proekti/ne-sushtestvuva')
    expect(await screen.findByRole('heading', { level: 1, name: /не съществува/ })).toBeInTheDocument()
  })
})

describe('mobile navigation and CTA', () => {
  it('bottom navigation has all sections and a prominent quote action', async () => {
    renderAt('/')
    const nav = await screen.findByTestId('bottom-nav')
    for (const label of ['Начало', 'Проекти', 'Услуги', 'За нас', 'Запитване']) expect(within(nav).getByRole('link', { name: new RegExp(label) })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: /Запитване/ })).toHaveAttribute('href', '/zapitvane')
  })

  it('primary CTA is visible in the hero and leads to the quote form', async () => {
    renderAt('/')
    const hero = await screen.findByRole('region', { name: /Фасадни решения/ })
    const cta = within(hero).getByRole('link', { name: /Поискай оферта/ })
    expect(cta.getAttribute('href')).toMatch(/^\/zapitvane/)
    expect(within(hero).getByRole('link', { name: /Виж проектите/ })).toHaveAttribute('href', '/proekti')
  })

  it('bottom navigation is hidden while the quote form is open', async () => {
    renderAt('/zapitvane')
    expect(await screen.findByText('Стъпка 1 от 7')).toBeInTheDocument()
    expect(screen.queryByTestId('bottom-nav')).not.toBeInTheDocument()
  })

  it('bottom nav navigates between sections', async () => {
    renderAt('/')
    const nav = await screen.findByTestId('bottom-nav')
    await userEvent.click(within(nav).getByRole('link', { name: /Проекти/ }))
    expect(await screen.findByRole('heading', { level: 1, name: /^Проекти$/ })).toBeInTheDocument()
  })
})

describe('project filters UI', () => {
  it('material chip filters the list and updates the count', async () => {
    renderAt('/proekti')
    const count = await screen.findByTestId('project-count')
    expect(count).toHaveTextContent(`${projects.length} проекта`)
    await userEvent.click(screen.getByRole('button', { name: /^HPL/ }))
    const n = projects.filter((p) => p.materials.includes('hpl')).length
    expect(screen.getByTestId('project-count')).toHaveTextContent(`${n} проект`)
    expect(screen.getByRole('button', { name: /^HPL/ })).toHaveAttribute('aria-pressed', 'true')
  })
})
