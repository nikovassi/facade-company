import type { ImageAsset, Project } from './types'

/**
 * PORTFOLIO — real photos from recom.bg (РЕКОМ ГРУП ЕООД).
 *
 * recom.bg publishes the photos without object names, addresses or years, so those fields are
 * NOT filled in here (never invent them). Each project is marked `detailsPending`: it shows a
 * visible "данните предстоят" tag and stays out of the sitemap / search index until the company
 * adds the real name, city, year and scope. Photos are grouped by what is clearly visible
 * (same building / same type of work); confirm each group when adding the details.
 */
const img = (folder: string, name: string, alt: string): ImageAsset => ({ src: `images/projects/${folder}/${name}`, alt })

export const projects: Project[] = [
  {
    id: 'p-keramika-zhilishtna',
    slug: 'zhilishtna-sgrada-keramichna-fasada',
    title: 'Жилищна сграда с керамична фасада',
    location: { city: '' },
    type: 'residential',
    materials: ['keramika'],
    services: ['keramichni-fasadi', 'ventiliruemi-fasadi', 'fasadni-konstrukcii', 'montazh'],
    summary: 'Вентилируема фасада от светли керамични плочи с тъмни вертикални акценти.',
    description:
      'Керамична облицовка върху алуминиева подконструкция — от монтажа на подконструкцията до завършената фасада. Добавете име на обекта, град, година и обем на изпълнението.',
    execution: ['Монтаж на подконструкция', 'Монтаж на керамичните плочи', 'Вертикални акценти и детайли', 'Предаване на обекта'],
    cover: img('keramika-zhilishtna', 'cover', 'Завършена керамична фасада на жилищна сграда'),
    gallery: [
      img('keramika-zhilishtna', '01', 'Керамична фасада с тъмни вертикални акценти'),
      img('keramika-zhilishtna', '02', 'Фасада — общ изглед'),
      img('keramika-zhilishtna', '03', 'Детайл: керамични плочи и вертикален акцент'),
      img('keramika-zhilishtna', '04', 'Керамична облицовка около прозорците'),
      img('keramika-zhilishtna', '05', 'Фасадата по време на изпълнение'),
      img('keramika-zhilishtna', '06', 'Монтаж от скеле'),
      img('keramika-zhilishtna', '07', 'Керамични плочи на обекта'),
    ],
    featured: true,
    detailsPending: true,
  },
  {
    id: 'p-al-bond-targovski',
    slug: 'targovski-obekti-al-bond',
    title: 'Търговски обекти с фасади от Al Bond',
    location: { city: '' },
    type: 'retail',
    materials: ['al-bond'],
    services: ['al-bond-montazh', 'okacheni-fasadi', 'montazh'],
    summary: 'Фасади на търговски сгради от алуминиеви композитни панели.',
    description:
      'Облицовка на търговски сгради с Al Bond касети — завършена фасада и етапи от монтажа на друг търговски обект. Добавете имената на обектите и градовете.',
    cover: img('al-bond-targovski', 'cover', 'Търговски обект с фасада от Al Bond'),
    gallery: [
      img('al-bond-targovski', '01', 'Монтаж на Al Bond касети по фасадата на търговска сграда'),
      img('al-bond-targovski', '02', 'Входна зона по време на облицовката'),
      img('al-bond-targovski', '03', 'Монтаж с вишка'),
      img('al-bond-targovski', '04', 'Касети със защитно фолио'),
      img('al-bond-targovski', '05', 'Фасада по време на монтажа'),
    ],
    featured: true,
    detailsPending: true,
  },
  {
    id: 'p-hpl',
    slug: 'hpl-fasadi-darvesen-dekor',
    title: 'Фасади от HPL с дървесен декор',
    location: { city: '' },
    type: 'residential',
    materials: ['hpl'],
    services: ['hpl-fasadi', 'ventiliruemi-fasadi', 'montazh'],
    summary: 'Вентилируеми фасади от HPL плоскости с топла дървесна визия.',
    description: 'HPL облицовка на жилищни сгради — монтаж върху подконструкция. Добавете имената на обектите, градовете и годините.',
    cover: img('hpl-fasadi', 'cover', 'Монтаж на HPL плоскости с дървесен декор'),
    gallery: [
      img('hpl-fasadi', '01', 'HPL облицовка по време на монтажа'),
      img('hpl-fasadi', '02', 'Ъгъл на сграда с HPL облицовка'),
      img('hpl-fasadi', '03', 'Фасада с HPL облицовка'),
    ],
    featured: true,
    detailsPending: true,
  },
  {
    id: 'p-keramika-kompleks',
    slug: 'zhilishten-kompleks-keramika',
    title: 'Жилищен комплекс с керамична облицовка',
    location: { city: '' },
    type: 'residential',
    materials: ['keramika'],
    services: ['keramichni-fasadi', 'ventiliruemi-fasadi', 'montazh'],
    summary: 'Керамична облицовка на многоетажни жилищни сгради.',
    description: 'Облицовка на жилищни сгради с керамични фасадни плочи. Добавете името на комплекса, града и обема на изпълнението.',
    cover: img('keramika-kompleks', 'cover', 'Жилищни сгради с керамична облицовка'),
    gallery: [
      img('keramika-kompleks', '01', 'Жилищни сгради — изглед от улицата'),
      img('keramika-kompleks', '02', 'Сграда в скеле по време на монтажа'),
      img('keramika-kompleks', '03', 'Горните етажи по време на монтажа'),
      img('keramika-kompleks', '04', 'Завършена фасада'),
    ],
    featured: true,
    detailsPending: true,
  },
  {
    id: 'p-al-bond-zhilishtna',
    slug: 'zhilishtna-sgrada-al-bond',
    title: 'Жилищна сграда с акценти от Al Bond',
    location: { city: '' },
    type: 'residential',
    materials: ['al-bond'],
    services: ['al-bond-montazh', 'montazh'],
    summary: 'Вертикални фасадни акценти от Al Bond между прозорците.',
    description: 'Касети от алуминиев композитен панел като вертикални акценти по фасадата на жилищна сграда. Добавете името на обекта и града.',
    cover: img('al-bond-zhilishtna', 'cover', 'Жилищна сграда с вертикални акценти от Al Bond'),
    gallery: [
      img('al-bond-zhilishtna', '01', 'Al Bond акценти по фасадата'),
      img('al-bond-zhilishtna', '02', 'Фасада — общ изглед'),
    ],
    detailsPending: true,
  },
  {
    id: 'p-al-bond-koloni',
    slug: 'oblitsovka-na-koloni-al-bond',
    title: 'Облицовка на колони с Al Bond',
    location: { city: '' },
    type: 'retail',
    materials: ['al-bond'],
    services: ['al-bond-montazh', 'dostavka', 'montazh'],
    summary: 'Обшивка на колони в търговска сграда с алуминиеви композитни панели.',
    description: 'Изработка и монтаж на кръгли обшивки на колони от Al Bond. Добавете името на обекта и града.',
    cover: img('al-bond-koloni', 'cover', 'Монтаж на обшивка на колона от Al Bond'),
    gallery: [
      img('al-bond-koloni', '01', 'Монтаж на обшивка на колона'),
      img('al-bond-koloni', '02', 'Колони, обшити с Al Bond'),
      img('al-bond-koloni', '03', 'Завършена обшивка на колона'),
      img('al-bond-koloni', '04', 'Материал на обекта'),
      img('al-bond-koloni', '05', 'Монтаж на колоните'),
    ],
    detailsPending: true,
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
export const featuredProjects = () => projects.filter((p) => p.featured)
