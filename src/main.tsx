import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { App } from './App'
import { routerBase } from './lib/seo'
import { initAnalytics } from './lib/analytics'
import { prefetchPages } from './routes'
import './index.css'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter basename={routerBase}>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Prerendered pages are hydrated; the dev server renders from scratch.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)

initAnalytics()

// Warm the other page chunks when the browser is idle (skip on Save-Data)
const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection
if (!conn?.saveData && !/2g|3g/.test(conn?.effectiveType ?? '')) {
  const idle = window.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 1))
  window.addEventListener('load', () => setTimeout(() => idle(prefetchPages), 2000), { once: true })
}

if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    import('virtual:pwa-register').then(({ registerSW }) => registerSW({ immediate: true })).catch(() => {})
  })
}
