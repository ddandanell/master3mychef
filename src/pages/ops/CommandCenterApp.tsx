import { useEffect, useMemo, useRef, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import {
  ANALYTICS_METRICS,
  TAXONOMY_BUSINESS,
  TAXONOMY_CORE,
  type AnalyticsMetric,
  type AnalyticsResponse,
  type ExperimentRow,
  type OpsSnapshot,
  type PulseSlice,
  type VisitorFile,
} from './types'

type Room =
  | 'pulse'
  | 'analyse'
  | 'funnel'
  | 'people'
  | 'money'
  | 'experiments'
  | 'alerts'
  | 'ask'
  | 'system'

const NAV: { id: Room; label: string; hint: string }[] = [
  { id: 'pulse', label: 'Pulse', hint: 'What is happening' },
  { id: 'analyse', label: 'Analyse', hint: 'Adjust period & metrics' },
  { id: 'funnel', label: 'Funnel', hint: 'Where we lose people' },
  { id: 'people', label: 'People', hint: 'Leads & journeys' },
  { id: 'money', label: 'Money', hint: 'Bookings you own' },
  { id: 'experiments', label: 'Experiments', hint: 'Hypothesis → result' },
  { id: 'alerts', label: 'Alerts', hint: 'Needs attention' },
  { id: 'ask', label: 'Ask', hint: 'Neon diagnosis' },
  { id: 'system', label: 'System', hint: 'Pipes & taxonomy' },
]

const STAGES = ['new', 'contacted', 'qualified', 'quote_sent', 'follow_up', 'won', 'lost'] as const

const METRIC_META: Record<AnalyticsMetric, { label: string; short: string }> = {
  visitors: { label: 'Visitors', short: 'people' },
  sessions: { label: 'Sessions', short: 'visits' },
  page_views: { label: 'Page views', short: 'views' },
  events: { label: 'Events', short: 'actions' },
  bounce_rate: { label: 'Bounce rate', short: 'single-page' },
  avg_duration_ms: { label: 'Average stay', short: 'engagement' },
  whatsapp_clicks: { label: 'WhatsApp clicks', short: 'intent' },
  form_submits: { label: 'Form submits', short: 'intent' },
  leads: { label: 'Leads', short: 'identified' },
  bookings: { label: 'Bookings', short: 'sales' },
  revenue_idr: { label: 'Revenue', short: 'booked value' },
}

function utcDay(offset = 0) {
  const date = new Date()
  date.setUTCDate(date.getUTCDate() + offset)
  return date.toISOString().slice(0, 10)
}

function pct(n: number) {
  return `${(n * 100).toFixed(1)}%`
}

function money(n: number) {
  return `IDR ${Math.round(n).toLocaleString('id-ID')}`
}

function duration(ms: number) {
  if (!ms) return '—'
  const s = Math.round(ms / 1000)
  if (s < 60) return `${s}s`
  return `${Math.floor(s / 60)}m ${s % 60}s`
}

function delta(now: number, prev: number) {
  if (prev === 0) return now === 0 ? 'flat' : 'new'
  const d = ((now - prev) / prev) * 100
  return `${d > 0 ? '+' : ''}${d.toFixed(0)}%`
}

function metricValue(metric: AnalyticsMetric, value: number) {
  if (metric === 'bounce_rate') return pct(value)
  if (metric === 'avg_duration_ms') return duration(value)
  if (metric === 'revenue_idr') return money(value)
  return Math.round(value).toLocaleString('en-US')
}

function metricDelta(value: number | null) {
  if (value === null) return 'new'
  if (value === 0) return 'flat'
  return `${value > 0 ? '+' : ''}${(value * 100).toFixed(1)}%`
}

function bytes(value: number | null) {
  if (value == null) return 'unavailable'
  if (value < 1_000_000) return `${(value / 1_000).toFixed(1)} KB`
  return `${(value / 1_000_000).toFixed(1)} MB`
}

function emptyPulse(): PulseSlice {
  return { visitors: 0, sessions: 0, bounce_rate: 0, avg_duration_ms: 0, whatsapp: 0, forms: 0, leads: 0 }
}

export default function CommandCenterApp() {
  const [authed, setAuthed] = useState<boolean | null>(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [opsError, setOpsError] = useState('')
  const [data, setData] = useState<OpsSnapshot | null>(null)
  const [room, setRoom] = useState<Room>('pulse')
  const [navOpen, setNavOpen] = useState(false)
  const [question, setQuestion] = useState('What needs attention?')
  const [answer, setAnswer] = useState('')
  const [askAlerts, setAskAlerts] = useState<Array<{ severity: string; title: string; detail: string }>>([])
  const [asking, setAsking] = useState(false)
  const [journeyRef, setJourneyRef] = useState<string | null>(null)
  const [journey, setJourney] = useState<VisitorFile | null>(null)
  const [saleRef, setSaleRef] = useState('')
  const [saleValue, setSaleValue] = useState('')
  const [saleCost, setSaleCost] = useState('')
  const [saleNote, setSaleNote] = useState('')
  const [experiments, setExperiments] = useState<ExperimentRow[]>([])
  const [expFlag, setExpFlag] = useState('')
  const [expHypothesis, setExpHypothesis] = useState('')
  const [expNote, setExpNote] = useState('')
  const [refreshingAlerts, setRefreshingAlerts] = useState(false)
  const [analytics, setAnalytics] = useState<AnalyticsResponse | null>(null)
  const [analyticsFrom, setAnalyticsFrom] = useState(utcDay(-29))
  const [analyticsTo, setAnalyticsTo] = useState(utcDay())
  const [analyticsBucket, setAnalyticsBucket] = useState<'day' | 'week' | 'month'>('day')
  const [selectedMetric, setSelectedMetric] = useState<AnalyticsMetric>('visitors')
  const [analyticsLoading, setAnalyticsLoading] = useState(false)
  const [analyticsError, setAnalyticsError] = useState('')
  const analyticsRequest = useRef<AbortController | null>(null)

  useEffect(() => {
    document.title = 'MyChef Command Center'
    const robots = document.querySelector('meta[name="robots"]')
    if (robots) robots.setAttribute('content', 'noindex,nofollow')
    return () => analyticsRequest.current?.abort()
  }, [])

  async function load() {
    const res = await fetch('/api/ops-stats', { credentials: 'include' })
    if (res.status === 401) {
      setAuthed(false)
      setData(null)
      return
    }
    if (!res.ok) throw new Error('Failed to load')
    setData((await res.json()) as OpsSnapshot)
    setAuthed(true)
    setOpsError('')
    void loadExperiments().catch(() => setOpsError('Could not refresh experiments'))
    void loadAnalytics()
  }

  async function loadExperiments() {
    const res = await fetch('/api/ops-experiments', { credentials: 'include' })
    if (!res.ok) return
    const json = (await res.json()) as { experiments?: ExperimentRow[] }
    setExperiments(json.experiments || [])
  }

  async function loadAnalytics(
    from = analyticsFrom,
    to = analyticsTo,
    bucket: 'day' | 'week' | 'month' = analyticsBucket
  ) {
    analyticsRequest.current?.abort()
    const controller = new AbortController()
    analyticsRequest.current = controller
    setAnalyticsLoading(true)
    setAnalyticsError('')
    try {
      const query = new URLSearchParams({ from, to, bucket })
      const res = await fetch(`/api/ops-analytics?${query}`, {
        credentials: 'include',
        signal: controller.signal,
      })
      const json = (await res.json()) as AnalyticsResponse | { error?: string }
      if (!res.ok) throw new Error('error' in json ? json.error || 'Could not load analytics' : 'Could not load analytics')
      if (controller.signal.aborted) return
      setAnalytics(json as AnalyticsResponse)
    } catch (loadError) {
      if (controller.signal.aborted) return
      setAnalyticsError(loadError instanceof Error ? loadError.message : 'Could not load analytics')
    } finally {
      if (analyticsRequest.current === controller) {
        analyticsRequest.current = null
        setAnalyticsLoading(false)
      }
    }
  }

  function applyAnalyticsPreset(days: number) {
    const from = utcDay(-(days - 1))
    const to = utcDay()
    const bucket = days <= 62 ? 'day' : days <= 366 ? 'week' : 'month'
    setAnalyticsFrom(from)
    setAnalyticsTo(to)
    setAnalyticsBucket(bucket)
    void loadAnalytics(from, to, bucket)
  }

  useEffect(() => {
    // Initial server synchronization is intentionally triggered once on mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void load().catch(() => setAuthed(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function onLogin(e: FormEvent) {
    e.preventDefault()
    setError('')
    const res = await fetch('/api/ops-login', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
    if (!res.ok) {
      setError('Wrong username or password')
      return
    }
    try {
      await load()
    } catch {
      setError('Login succeeded, but the Command Center could not load')
    }
  }

  async function logout() {
    try {
      await fetch('/api/ops-login', { method: 'DELETE', credentials: 'include' })
      setAuthed(false)
      setData(null)
    } catch {
      setOpsError('Could not log out. Please try again.')
    }
  }

  async function ask(e: FormEvent) {
    e.preventDefault()
    setAsking(true)
    setAnswer('')
    setAskAlerts([])
    try {
      const res = await fetch('/api/ops-ask', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      })
      const json = (await res.json()) as {
        answer?: string
        error?: string
        alerts?: Array<{ severity: string; title: string; detail: string }>
      }
      setAnswer(json.answer || json.error || 'No answer')
      setAskAlerts(json.alerts || [])
    } catch (askError) {
      setAnswer(askError instanceof Error ? askError.message : 'Could not reach the diagnosis service')
    } finally {
      setAsking(false)
    }
  }

  async function setStage(id: number, stage: string) {
    try {
      const res = await fetch('/api/ops-leads', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, stage }),
      })
      if (!res.ok) throw new Error('Could not update lead stage')
      await load()
    } catch (stageError) {
      setOpsError(stageError instanceof Error ? stageError.message : 'Could not update lead stage')
    }
  }

  async function openJourney(ref: string) {
    setJourneyRef(ref)
    setJourney(null)
    setRoom('people')
    setNavOpen(false)
    try {
      const res = await fetch(`/api/ops-visitor?ref=${encodeURIComponent(ref)}`, { credentials: 'include' })
      if (!res.ok) throw new Error('Could not load visitor journey')
      setJourney((await res.json()) as VisitorFile)
    } catch (journeyError) {
      setOpsError(journeyError instanceof Error ? journeyError.message : 'Could not load visitor journey')
    }
  }

  async function logSale(e: FormEvent) {
    e.preventDefault()
    setSaleNote('')
    try {
      const res = await fetch('/api/ops-sales', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lead_ref: saleRef.trim(),
          value_idr: Number(saleValue),
          cost_idr: saleCost ? Number(saleCost) : 0,
        }),
      })
      const json = (await res.json()) as { ok?: boolean; error?: string }
      if (!res.ok) {
        setSaleNote(json.error || 'Could not save')
        return
      }
      setSaleRef('')
      setSaleValue('')
      setSaleCost('')
      setSaleNote('Saved to Neon')
      await load()
    } catch {
      setSaleNote('Could not save. Check the connection and try again.')
    }
  }

  async function createExperiment(e: FormEvent) {
    e.preventDefault()
    setExpNote('')
    try {
      const res = await fetch('/api/ops-experiments', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ flag_key: expFlag, hypothesis: expHypothesis }),
      })
      if (!res.ok) {
        setExpNote('Could not create')
        return
      }
      setExpFlag('')
      setExpHypothesis('')
      setExpNote('Experiment logged')
      await loadExperiments()
    } catch {
      setExpNote('Could not create. Check the connection and try again.')
    }
  }

  async function completeExperiment(id: number) {
    const result = window.prompt('Result summary (what happened)?')
    if (!result) return
    try {
      const res = await fetch('/api/ops-experiments', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, result_summary: result, ended: true, status: 'completed' }),
      })
      if (!res.ok) throw new Error('Could not complete experiment')
      await loadExperiments()
      await load()
    } catch (experimentError) {
      setOpsError(experimentError instanceof Error ? experimentError.message : 'Could not complete experiment')
    }
  }

  async function refreshAlerts() {
    setRefreshingAlerts(true)
    try {
      const res = await fetch('/api/ops-alerts', { method: 'POST', credentials: 'include' })
      if (!res.ok) throw new Error('Could not refresh alerts')
      await load()
    } catch (alertError) {
      setOpsError(alertError instanceof Error ? alertError.message : 'Could not refresh alerts')
    } finally {
      setRefreshingAlerts(false)
    }
  }

  const compareGrouped = useMemo(() => {
    if (!data) return []
    const map = new Map<string, { source: string; landing_path: string; a: number; b: number; wa: number; leads: number }>()
    const cutoff = new Date()
    cutoff.setUTCDate(cutoff.getUTCDate() - 7)
    const cut = cutoff.toISOString().slice(0, 10)
    for (const row of data.compare || []) {
      const key = `${row.source}|${row.landing_path}`
      const cur = map.get(key) || { source: row.source, landing_path: row.landing_path, a: 0, b: 0, wa: 0, leads: 0 }
      if (row.day >= cut) {
        cur.a += row.visitors
        cur.wa += row.whatsapp
        cur.leads += row.leads
      } else {
        cur.b += row.visitors
      }
      map.set(key, cur)
    }
    return [...map.values()].sort((x, y) => y.a - x.a)
  }, [data])

  const eventMix = useMemo(() => {
    if (!data) return []
    const map = new Map<string, number>()
    for (const ev of data.recent_events) {
      map.set(ev.event_name, (map.get(ev.event_name) || 0) + 1)
    }
    return [...map.entries()].sort((a, b) => b[1] - a[1])
  }, [data])

  if (authed === null) {
    return (
      <div className="ops-shell min-h-screen grid place-items-center text-[#8B8680]">
        <div className="flex flex-col items-center gap-3">
          <div className="h-1.5 w-1.5 rounded-full bg-[#C5A028] animate-pulse" />
          <span className="text-xs tracking-[0.35em] uppercase">Command Center</span>
        </div>
        <OpsStyles />
      </div>
    )
  }

  if (!authed) {
    return (
      <div className="ops-shell min-h-screen grid place-items-center px-5">
        <OpsStyles />
        <form onSubmit={(e) => void onLogin(e)} className="ops-login w-full max-w-md">
          <p className="ops-kicker">MyChef · Neon source of truth</p>
          <h1 className="ops-display">Command Center</h1>
          <p className="ops-lede mt-3">
            Own your traffic, leads, funnel, and bookings. GA4 stays a benchmark. PostHog stays replay.
          </p>
          {error ? <p className="mt-4 text-sm text-[#E8A0A0]">{error}</p> : null}
          <div className="mt-8 grid gap-4">
            <Field label="Username" value={username} onChange={setUsername} autoComplete="username" />
            <Field label="Password" value={password} onChange={setPassword} type="password" autoComplete="current-password" />
            <button type="submit" className="ops-btn-primary mt-2">
              Enter control room
            </button>
          </div>
        </form>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="ops-shell min-h-screen grid place-items-center text-[#8B8680]">
        Could not load Neon snapshot.
        <OpsStyles />
      </div>
    )
  }

  const pulse = data.pulse || { today: emptyPulse(), yesterday: emptyPulse(), d7: emptyPulse(), d30: emptyPulse() }
  const funnelNamed = data.funnel_named || []
  const dropoffs = data.dropoffs || []
  const health = data.health || { events_last_hour: 0, posthog_identity_pct: 0, gsc_last_day: null }
  const openAlerts = (data.alerts || []).filter((a) => a.severity !== 'low')

  function go(id: Room) {
    setRoom(id)
    setNavOpen(false)
  }

  return (
    <div className="ops-shell min-h-screen text-[#F2EEE6] lg:flex">
      <OpsStyles />

      <aside
        className={`ops-rail fixed inset-y-0 left-0 z-40 w-[min(100%,280px)] transform transition-transform lg:static lg:translate-x-0 ${
          navOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-5 pt-7 pb-4 border-b border-white/[0.06]">
          <div className="ops-kicker">MyChef</div>
          <div className="ops-display text-[1.65rem] leading-none mt-1">Command</div>
          <div className="text-[11px] text-[#6F6B64] mt-2 font-mono">
            {data.property.domain} · {data.counts.online_5m} live
          </div>
        </div>
        <nav className="p-3 flex flex-col gap-0.5">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className={`ops-nav ${room === item.id ? 'ops-nav-active' : ''}`}
            >
              <span>{item.label}</span>
              <span className="ops-nav-hint">{item.hint}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto p-5 border-t border-white/[0.06] text-[11px] text-[#6F6B64] space-y-2">
          <div>{new Date(data.generated_at).toLocaleString()}</div>
          <div>{health.events_last_hour} events · last hour</div>
          <button type="button" onClick={() => void logout()} className="text-[#A39E96] hover:text-[#F2EEE6]">
            Log out
          </button>
        </div>
      </aside>

      {navOpen ? (
        <button type="button" className="fixed inset-0 z-30 bg-black/50 lg:hidden" aria-label="Close menu" onClick={() => setNavOpen(false)} />
      ) : null}

      <div className="flex-1 min-w-0">
        <header className="sticky top-0 z-20 ops-topbar flex items-center justify-between gap-3 px-4 py-3 lg:px-8">
          <button type="button" className="lg:hidden text-xs tracking-wider uppercase text-[#C5A028]" onClick={() => setNavOpen(true)}>
            Menu
          </button>
          <div className="hidden sm:block text-xs text-[#6F6B64]">
            Neon SoT · PostHog replay · GA4 parallel
          </div>
          <button
            type="button"
            onClick={() => {
              void load().catch(() => setOpsError('Could not refresh the Command Center'))
            }}
            className="ops-btn-ghost text-xs"
          >
            Refresh
          </button>
        </header>

        <main className="px-4 py-6 lg:px-8 lg:py-8 max-w-[1200px]">
          {opsError ? (
            <div className="ops-banner text-sm text-[#E8A0A0] mb-5" role="alert">
              {opsError}
            </div>
          ) : null}
          {room === 'pulse' && (
            <section className="space-y-8 ops-fade">
              <Hero
                title="Pulse"
                sub={`${data.counts.visitors.toLocaleString()} visitors · ${data.counts.leads} leads · ${data.counts.bookings} bookings · ${money(data.counts.revenue_idr)}`}
              />
              {openAlerts.length > 0 ? (
                <div className="ops-banner">
                  <span className="ops-kicker text-[#C5A028]">{openAlerts.length} need attention</span>
                  <p className="text-sm mt-1">{openAlerts[0].title}</p>
                  <button type="button" className="ops-link mt-2" onClick={() => go('alerts')}>
                    Open alerts →
                  </button>
                </div>
              ) : null}
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
                <PulseCard label="Today" slice={pulse.today} vs={pulse.yesterday} />
                <PulseCard label="Yesterday" slice={pulse.yesterday} />
                <PulseCard label="7 days" slice={pulse.d7} />
                <PulseCard label="30 days" slice={pulse.d30} />
              </div>
              <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3 ops-panel">
                  <PanelTitle>Live tape</PanelTitle>
                  <ul className="mt-4 space-y-0">
                    {data.recent_events.slice(0, 14).map((row, i) => (
                      <li key={i} className="ops-row font-mono text-[12px]">
                        <span className="text-[#6F6B64] w-14 shrink-0">{row.occurred_at.slice(11, 19)}</span>
                        <span className="text-[#C5A028] w-36 shrink-0 truncate">{row.event_name}</span>
                        <span className="truncate text-[#C4BFB6]">{row.page_path}</span>
                        {row.lead_ref ? (
                          <button type="button" className="ops-link ml-auto shrink-0" onClick={() => void openJourney(row.lead_ref!)}>
                            {row.lead_ref}
                          </button>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <div className="ops-panel">
                    <PanelTitle>Source / medium</PanelTitle>
                    <MiniBars rows={(data.sources || []).slice(0, 6).map((s) => [s.name, s.n])} />
                    <div className="h-4" />
                    <MiniBars rows={(data.mediums || []).slice(0, 5).map((s) => [s.name, s.n])} />
                  </div>
                  <div className="ops-panel">
                    <PanelTitle>Device · users</PanelTitle>
                    <MiniBars rows={(data.devices || []).map((s) => [s.name, s.n])} />
                    <p className="mt-3 text-xs text-[#8B8680]">
                      New {data.new_users ?? 0} · Returning {data.returning_users ?? 0}
                    </p>
                  </div>
                </div>
              </div>
              <div className="ops-panel">
                <PanelTitle>7d vs prior · landing × source</PanelTitle>
                <DataTable
                  headers={['Source', 'Landing', '7d', 'Prior', 'Δ', 'WA', 'Leads']}
                  rows={compareGrouped.slice(0, 12).map((r) => [
                    r.source,
                    r.landing_path,
                    String(r.a),
                    String(r.b),
                    delta(r.a, r.b),
                    String(r.wa),
                    String(r.leads),
                  ])}
                />
              </div>
            </section>
          )}

          {room === 'analyse' && (
            <section className="space-y-7 ops-fade">
              <Hero
                title="Analyse"
                sub="Choose the question, period, and signal. Every result comes from your first-party Neon history."
              />

              <form
                className="ops-panel grid gap-4 xl:grid-cols-[1fr_1fr_0.8fr_auto] xl:items-end"
                onSubmit={(e) => {
                  e.preventDefault()
                  void loadAnalytics()
                }}
              >
                <Field label="From" value={analyticsFrom} onChange={setAnalyticsFrom} type="date" />
                <Field label="To" value={analyticsTo} onChange={setAnalyticsTo} type="date" />
                <label className="text-xs text-[#8B8680] grid gap-1">
                  Chart interval
                  <select
                    className="ops-select"
                    value={analyticsBucket}
                    onChange={(e) => setAnalyticsBucket(e.target.value as 'day' | 'week' | 'month')}
                  >
                    <option value="day">Daily</option>
                    <option value="week">Weekly</option>
                    <option value="month">Monthly</option>
                  </select>
                </label>
                <button type="submit" className="ops-btn-primary h-10" disabled={analyticsLoading}>
                  {analyticsLoading ? 'Calculating…' : 'Apply period'}
                </button>
                <div className="xl:col-span-4 flex flex-wrap gap-2 items-center">
                  <span className="ops-kicker mr-1">Quick periods</span>
                  {[
                    [7, '7 days'],
                    [30, '30 days'],
                    [90, '90 days'],
                    [365, '12 months'],
                  ].map(([days, label]) => (
                    <button
                      type="button"
                      key={days}
                      className="ops-btn-ghost text-[11px]"
                      onClick={() => applyAnalyticsPreset(Number(days))}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </form>

              {analyticsError ? (
                <div className="ops-banner text-sm text-[#E8A0A0]" role="alert">
                  {analyticsError}
                </div>
              ) : null}

              {analytics ? (
                <>
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <div className="ops-kicker">Selected period</div>
                      <p className="text-sm mt-1">
                        {analytics.range.from} → {analytics.range.to}
                        <span className="text-[#6F6B64]"> · versus {analytics.range.compareFrom} → {analytics.range.compareTo}</span>
                      </p>
                    </div>
                    <span className="text-xs text-[#6F6B64]">{analytics.range.days} calendar days · UTC</span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                    {ANALYTICS_METRICS.map((metric) => {
                      const item = analytics.summary[metric]
                      const favorable = metric === 'bounce_rate' ? item.delta < 0 : item.delta > 0
                      return (
                        <button
                          type="button"
                          key={metric}
                          onClick={() => setSelectedMetric(metric)}
                          className={`ops-panel text-left transition-colors ${
                            selectedMetric === metric ? 'ops-panel-selected' : ''
                          }`}
                        >
                          <div className="flex justify-between gap-2">
                            <span className="ops-kicker">{METRIC_META[metric].label}</span>
                            <span className={`ops-delta ${item.delta === 0 ? '' : favorable ? 'ops-delta-up' : 'ops-delta-down'}`}>
                              {metricDelta(item.delta_pct)}
                            </span>
                          </div>
                          <div className="ops-display text-2xl mt-2">{metricValue(metric, item.current)}</div>
                          <div className="text-[10px] text-[#6F6B64] mt-1">
                            previous {metricValue(metric, item.previous)} · {METRIC_META[metric].short}
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  <div className="grid xl:grid-cols-[minmax(0,2fr)_minmax(260px,0.75fr)] gap-5">
                    <div className="ops-panel min-w-0">
                      <div className="flex flex-wrap justify-between gap-3 items-center">
                        <div>
                          <PanelTitle>Trend</PanelTitle>
                          <h2 className="text-lg mt-1">{METRIC_META[selectedMetric].label}</h2>
                        </div>
                        <select
                          className="ops-select w-auto"
                          value={selectedMetric}
                          onChange={(e) => setSelectedMetric(e.target.value as AnalyticsMetric)}
                        >
                          {ANALYTICS_METRICS.map((metric) => (
                            <option key={metric} value={metric}>{METRIC_META[metric].label}</option>
                          ))}
                        </select>
                      </div>
                      <TrendChart rows={analytics.trend} metric={selectedMetric} />
                    </div>

                    <div className="ops-panel">
                      <PanelTitle>Decision cues</PanelTitle>
                      <div className="mt-4 space-y-4">
                        <DecisionSignal
                          label="Traffic"
                          metric="visitors"
                          comparison={analytics.summary.visitors}
                        />
                        <DecisionSignal
                          label="Time on site"
                          metric="avg_duration_ms"
                          comparison={analytics.summary.avg_duration_ms}
                        />
                        <DecisionSignal
                          label="Bounce"
                          metric="bounce_rate"
                          comparison={analytics.summary.bounce_rate}
                          inverse
                        />
                        <DecisionSignal
                          label="Lead creation"
                          metric="leads"
                          comparison={analytics.summary.leads}
                        />
                      </div>
                      <p className="text-[11px] leading-relaxed text-[#6F6B64] mt-5">
                        A movement is a clue, not proof. Check source and landing-page mix before changing the site.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="ops-panel">
                      <PanelTitle>Sources · selected period</PanelTitle>
                      <MiniBars rows={analytics.dimensions.sources.map((row) => [row.name, row.n])} />
                    </div>
                    <div className="ops-panel">
                      <PanelTitle>Landing pages</PanelTitle>
                      <MiniBars rows={analytics.dimensions.landing_pages.map((row) => [row.name, row.n])} />
                    </div>
                    <div className="ops-panel">
                      <PanelTitle>Devices</PanelTitle>
                      <MiniBars rows={analytics.dimensions.devices.map((row) => [row.name, row.n])} />
                    </div>
                  </div>

                  <div className="ops-panel">
                    <div className="flex flex-wrap justify-between gap-4 items-end">
                      <div>
                        <PanelTitle>Data inventory</PanelTitle>
                        <h2 className="ops-display text-2xl mt-1">
                          {analytics.inventory.total_rows.toLocaleString()} stored rows
                        </h2>
                      </div>
                      <div className="text-right text-xs text-[#8B8680]">
                        <div>{bytes(analytics.inventory.database_bytes)} across analytics tables</div>
                        <div className="mt-1">{analytics.inventory.days_collected} days of event history</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-5">
                      {Object.entries(analytics.inventory.rows).map(([table, count]) => (
                        <div key={table} className="ops-inventory">
                          <div className="font-mono text-lg">{count.toLocaleString()}</div>
                          <div className="text-[10px] text-[#6F6B64] uppercase tracking-wider">{table}</div>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-[#6F6B64] mt-4">
                      First event {analytics.inventory.first_event_at ? new Date(analytics.inventory.first_event_at).toLocaleString() : '—'}
                      {' · '}Latest event {analytics.inventory.last_event_at ? new Date(analytics.inventory.last_event_at).toLocaleString() : '—'}
                    </div>
                  </div>
                </>
              ) : analyticsLoading ? (
                <div className="ops-panel text-sm text-[#8B8680]" role="status" aria-live="polite">
                  Building your decision view from Neon…
                </div>
              ) : null}
            </section>
          )}

          {room === 'funnel' && (
            <section className="space-y-8 ops-fade">
              <Hero title="Funnel" sub="Named MyChef path — not a generic pageview chart. Last 30 days in Neon." />
              <div className="ops-panel">
                <div className="space-y-3">
                  {funnelNamed.length === 0 ? (
                    <p className="text-sm text-[#8B8680]">No funnel rows yet. Browse service / pricing / quote pages to fill taxonomy events.</p>
                  ) : (
                    funnelNamed.map((step, i) => {
                      const max = Math.max(...funnelNamed.map((s) => s.n), 1)
                      return (
                        <div key={step.step}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>
                              <span className="text-[#6F6B64] mr-2 font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
                              {step.step}
                            </span>
                            <span className="font-mono text-[#C5A028]">
                              {step.n}
                              {step.rate_from_prev != null ? ` · ${pct(step.rate_from_prev)}` : ''}
                            </span>
                          </div>
                          <div className="ops-bar-track">
                            <div className="ops-bar-fill" style={{ width: `${Math.max(4, (step.n / max) * 100)}%` }} />
                          </div>
                        </div>
                      )
                    })
                  )}
                </div>
              </div>
              <div className="ops-panel">
                <PanelTitle>Largest drop-offs</PanelTitle>
                <DataTable
                  headers={['From', 'To', 'Lost', 'Loss rate']}
                  rows={[...dropoffs]
                    .sort((a, b) => b.loss_rate - a.loss_rate)
                    .slice(0, 8)
                    .map((d) => [d.from, d.to, String(d.lost), pct(d.loss_rate)])}
                />
              </div>
            </section>
          )}

          {room === 'people' && (
            <section className="space-y-6 ops-fade">
              <Hero title="People" sub="Forms store identity. WhatsApp stores intent until they write. Click a ref for the full journey." />
              <div className="ops-panel overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="ops-th">
                      {['When', 'Ref', 'Person', 'Channel', 'Page', 'Stage', ''].map((h) => (
                        <th key={h} className="pb-3 pr-3 font-medium text-left">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.recent_leads.map((lead) => (
                      <tr key={lead.id} className="border-t border-white/[0.05]">
                        <td className="py-3 pr-3 whitespace-nowrap text-[#6F6B64] font-mono text-xs">
                          {lead.created_at.replace('T', ' ').slice(0, 16)}
                        </td>
                        <td className="pr-3 font-mono text-xs">{lead.lead_ref || '—'}</td>
                        <td className="pr-3">
                          <div>{lead.name || 'Anonymous intent'}</div>
                          <div className="text-xs text-[#6F6B64]">{lead.email || lead.phone || lead.source}</div>
                        </td>
                        <td className="pr-3">{lead.channel || lead.status}</td>
                        <td className="pr-3 max-w-[140px] truncate">{lead.page_path || '—'}</td>
                        <td className="pr-3">
                          <select
                            className="ops-select"
                            value={lead.stage || 'new'}
                            onChange={(e) => void setStage(lead.id, e.target.value)}
                          >
                            {STAGES.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </td>
                        <td className="pr-3">
                          {lead.lead_ref ? (
                            <button type="button" className="ops-link" onClick={() => void openJourney(lead.lead_ref!)}>
                              Journey
                            </button>
                          ) : null}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {journeyRef ? (
                <div className="ops-panel ops-panel-accent">
                  <div className="flex flex-wrap justify-between gap-3">
                    <div>
                      <div className="ops-kicker">Visitor file</div>
                      <h3 className="ops-display text-2xl mt-1">{journeyRef}</h3>
                    </div>
                    <button type="button" className="ops-btn-ghost text-xs" onClick={() => setJourneyRef(null)}>
                      Close
                    </button>
                  </div>
                  {journey?.lead ? (
                    <p className="text-sm text-[#C4BFB6] mt-3">
                      {journey.lead.name} · {journey.lead.email} · {journey.lead.phone}
                    </p>
                  ) : null}
                  {journey?.posthog_replay_hint?.url ? (
                    <a
                      className="ops-link inline-block mt-3"
                      href={journey.posthog_replay_hint.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open PostHog person / replay →
                    </a>
                  ) : null}
                  <ol className="mt-5 space-y-0">
                    {(journey?.events || []).map((ev, i) => (
                      <li key={i} className="ops-row font-mono text-[12px]">
                        <span className="text-[#6F6B64] w-[9.5rem] shrink-0">{String(ev.occurred_at).replace('T', ' ').slice(0, 19)}</span>
                        <span className="text-[#C5A028] w-40 shrink-0 truncate">{ev.event_name}</span>
                        <span className="truncate">{ev.page_path}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}
            </section>
          )}

          {room === 'money' && (
            <section className="space-y-6 ops-fade max-w-3xl">
              <Hero title="Money" sub="Sales you own in Neon. No invented GA4 revenue." />
              <div className="grid grid-cols-3 gap-3">
                <Stat label="Bookings" value={String(data.counts.bookings)} />
                <Stat label="Revenue" value={money(data.counts.revenue_idr)} />
                <Stat label="Lead → booking" value={pct(data.conversion.lead_to_booking)} />
              </div>
              <form onSubmit={(e) => void logSale(e)} className="ops-panel grid sm:grid-cols-4 gap-3 items-end">
                <Field label="lead_ref" value={saleRef} onChange={setSaleRef} placeholder="MC-A2B3C4" />
                <Field label="Value IDR" value={saleValue} onChange={setSaleValue} />
                <Field label="Cost IDR" value={saleCost} onChange={setSaleCost} />
                <button type="submit" className="ops-btn-primary h-10">Log sale</button>
              </form>
              {saleNote ? <p className="text-sm text-[#C5A028]">{saleNote}</p> : null}
              <div className="ops-panel">
                <DataTable
                  headers={['When', 'Ref', 'Value', 'Cost', 'Status']}
                  rows={(data.bookings_list || []).map((b) => [
                    b.created_at.replace('T', ' ').slice(0, 16),
                    b.lead_ref || '—',
                    b.value_idr == null ? '—' : money(b.value_idr),
                    b.cost_idr == null ? '—' : money(b.cost_idr),
                    b.status,
                  ])}
                />
              </div>
            </section>
          )}

          {room === 'experiments' && (
            <section className="space-y-6 ops-fade max-w-3xl">
              <Hero title="Experiments" sub="Hypothesis → change → result. PostHog can run flags; Neon remembers the decision." />
              <form onSubmit={(e) => void createExperiment(e)} className="ops-panel grid gap-3">
                <Field label="Flag key" value={expFlag} onChange={setExpFlag} placeholder="hero-cta-copy" />
                <label className="text-xs text-[#8B8680] grid gap-1">
                  Hypothesis
                  <textarea
                    className="ops-input min-h-24"
                    value={expHypothesis}
                    onChange={(e) => setExpHypothesis(e.target.value)}
                    placeholder="Shorter WhatsApp CTA will raise mobile click rate"
                  />
                </label>
                <button type="submit" className="ops-btn-primary justify-self-start">Log experiment</button>
                {expNote ? <p className="text-sm text-[#C5A028]">{expNote}</p> : null}
              </form>
              <div className="ops-panel space-y-3">
                {experiments.length === 0 ? (
                  <p className="text-sm text-[#8B8680]">No experiments yet.</p>
                ) : (
                  experiments.map((ex) => (
                    <div key={ex.id} className="border-t border-white/[0.06] pt-3 first:border-0 first:pt-0">
                      <div className="flex justify-between gap-3">
                        <div>
                          <div className="font-mono text-xs text-[#C5A028]">{ex.flag_key}</div>
                          <p className="text-sm mt-1">{ex.hypothesis}</p>
                          {ex.result_summary ? <p className="text-xs text-[#8B8680] mt-1">{ex.result_summary}</p> : null}
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-[10px] uppercase tracking-wider text-[#6F6B64]">{ex.status}</div>
                          {ex.status === 'running' ? (
                            <button type="button" className="ops-link text-xs mt-2" onClick={() => void completeExperiment(ex.id)}>
                              Mark done
                            </button>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          )}

          {room === 'alerts' && (
            <section className="space-y-6 ops-fade">
              <div className="flex flex-wrap justify-between gap-3 items-end">
                <Hero title="Alerts" sub="Rule-based anomalies from Neon deltas and funnel drop-offs." />
                <button type="button" className="ops-btn-primary" onClick={() => void refreshAlerts()} disabled={refreshingAlerts}>
                  {refreshingAlerts ? 'Scanning…' : 'Refresh alerts'}
                </button>
              </div>
              <div className="space-y-3">
                {(data.alerts || []).length === 0 ? (
                  <div className="ops-panel text-sm text-[#8B8680]">No alerts stored. Run refresh after traffic arrives.</div>
                ) : (
                  (data.alerts || []).map((a) => (
                    <div key={a.id} className="ops-panel flex gap-4">
                      <span className={`ops-sev ops-sev-${a.severity}`}>{a.severity}</span>
                      <div>
                        <div className="font-medium">{a.title}</div>
                        <p className="text-sm text-[#8B8680] mt-1">{a.detail}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          )}

          {room === 'ask' && (
            <section className="space-y-6 ops-fade max-w-2xl">
              <Hero title="Ask" sub="Answers from Postgres context packs — funnel, pulse, devices, changes. Not invented GA charts." />
              <form onSubmit={(e) => void ask(e)} className="grid gap-3">
                <textarea className="ops-input min-h-28" value={question} onChange={(e) => setQuestion(e.target.value)} />
                <button type="submit" disabled={asking} className="ops-btn-primary justify-self-start">
                  {asking ? 'Asking…' : 'Ask Neon'}
                </button>
              </form>
              {askAlerts.length > 0 ? (
                <div className="space-y-2">
                  {askAlerts.slice(0, 4).map((a, i) => (
                    <div key={i} className="text-xs flex gap-2">
                      <span className={`ops-sev ops-sev-${a.severity}`}>{a.severity}</span>
                      <span>{a.title}</span>
                    </div>
                  ))}
                </div>
              ) : null}
              {answer ? <pre className="ops-panel whitespace-pre-wrap text-sm text-[#C4BFB6] font-sans leading-relaxed">{answer}</pre> : null}
            </section>
          )}

          {room === 'system' && (
            <section className="space-y-8 ops-fade">
              <Hero title="System" sub="Pipes, identity bridge, and the event language Neon accepts." />
              <div className="grid md:grid-cols-2 gap-4">
                <div className="ops-panel">
                  <PanelTitle>Connections</PanelTitle>
                  <DataTable
                    headers={['System', 'Status']}
                    rows={[
                      ['PostgreSQL', data.connections.postgres ? 'connected' : 'down'],
                      ['Collect', data.connections.collect ? 'receiving' : 'no events'],
                      ['Last event', data.connections.last_event_at || '—'],
                      ['Events / hour', String(health.events_last_hour)],
                      ['PostHog identity', pct(health.posthog_identity_pct)],
                      ['Search Console', health.gsc_last_day ? `synced ${health.gsc_last_day}` : 'run sync-gsc-daily'],
                      ['Ads', 'not connected'],
                      ['GA4', 'parallel only'],
                      ['WhatsApp inbox', 'clicks only'],
                      ['Bookings', data.connections.bookings ? 'has rows' : 'ready, empty'],
                    ]}
                  />
                </div>
                <div className="ops-panel">
                  <PanelTitle>Recent event mix (tape)</PanelTitle>
                  <MiniBars rows={eventMix.slice(0, 10)} />
                </div>
              </div>
              <div className="ops-panel">
                <PanelTitle>Event taxonomy · core</PanelTitle>
                <div className="ops-chips mt-3">
                  {TAXONOMY_CORE.map((name) => (
                    <span key={name} className="ops-chip">{name}</span>
                  ))}
                </div>
                <PanelTitle className="mt-8">Event taxonomy · business</PanelTitle>
                <div className="ops-chips mt-3">
                  {TAXONOMY_BUSINESS.map((name) => (
                    <span key={name} className="ops-chip ops-chip-gold">{name}</span>
                  ))}
                </div>
                <p className="text-xs text-[#6F6B64] mt-4">
                  Documented in <code className="text-[#C5A028]">docs/event-taxonomy.md</code>. Money events stay on{' '}
                  <code className="text-[#C5A028]">/api/ops-sales</code> only.
                </p>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}

function Hero({ title, sub }: { title: string; sub: string }) {
  return (
    <div>
      <h1 className="ops-display text-3xl md:text-4xl">{title}</h1>
      <p className="ops-lede mt-2 max-w-2xl">{sub}</p>
    </div>
  )
}

function PanelTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={`ops-kicker ${className}`}>{children}</h2>
}

function PulseCard({ label, slice, vs }: { label: string; slice: PulseSlice; vs?: PulseSlice }) {
  return (
    <div className="ops-panel">
      <div className="ops-kicker">{label}</div>
      <div className="ops-display text-3xl mt-2">{slice.visitors}</div>
      <div className="text-[11px] text-[#6F6B64]">visitors</div>
      <dl className="mt-4 grid grid-cols-2 gap-y-2 text-[11px]">
        <dt className="text-[#6F6B64]">Bounce</dt>
        <dd className="font-mono">{pct(slice.bounce_rate)}{vs ? ` · ${delta(slice.bounce_rate, vs.bounce_rate)}` : ''}</dd>
        <dt className="text-[#6F6B64]">Time</dt>
        <dd className="font-mono">{duration(slice.avg_duration_ms)}</dd>
        <dt className="text-[#6F6B64]">WhatsApp</dt>
        <dd className="font-mono">{slice.whatsapp}{vs ? ` · ${delta(slice.whatsapp, vs.whatsapp)}` : ''}</dd>
        <dt className="text-[#6F6B64]">Forms / leads</dt>
        <dd className="font-mono">{slice.forms} / {slice.leads}</dd>
      </dl>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="ops-panel">
      <div className="text-lg font-medium">{value}</div>
      <div className="text-[11px] text-[#8B8680] mt-1">{label}</div>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  autoComplete,
  placeholder,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  type?: string
  autoComplete?: string
  placeholder?: string
}) {
  return (
    <label className="text-xs text-[#8B8680] grid gap-1">
      {label}
      <input
        type={type}
        className="ops-input"
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}

function MiniBars({ rows }: { rows: Array<[string, number]> }) {
  const max = Math.max(...rows.map((r) => r[1]), 1)
  if (rows.length === 0) return <p className="text-xs text-[#6F6B64] mt-2">No data yet</p>
  return (
    <ul className="mt-3 space-y-2">
      {rows.map(([name, n]) => (
        <li key={name}>
          <div className="flex justify-between text-[11px] mb-0.5">
            <span className="truncate pr-2">{name}</span>
            <span className="font-mono text-[#C5A028]">{n}</span>
          </div>
          <div className="ops-bar-track">
            <div className="ops-bar-fill" style={{ width: `${Math.max(3, (n / max) * 100)}%` }} />
          </div>
        </li>
      ))}
    </ul>
  )
}

function TrendChart({ rows, metric }: { rows: AnalyticsResponse['trend']; metric: AnalyticsMetric }) {
  const width = 760
  const height = 250
  const padX = 24
  const padY = 30
  const values = rows.map((row) => row[metric])
  const max = values.reduce((highest, value) => Math.max(highest, value), 0)
  const min = values.reduce((lowest, value) => Math.min(lowest, value), 0)
  const range = max - min || 1
  const x = (index: number) =>
    rows.length <= 1 ? width / 2 : padX + (index / (rows.length - 1)) * (width - padX * 2)
  const y = (value: number) => padY + ((max - value) / range) * (height - padY * 2)
  const points = rows.map((row, index) => `${x(index)},${y(row[metric])}`).join(' ')
  const area = rows.length ? `${padX},${height - padY} ${points} ${width - padX},${height - padY}` : ''

  if (rows.length === 0) {
    return <div className="h-64 grid place-items-center text-sm text-[#6F6B64]">No values in this period</div>
  }

  return (
    <div className="mt-5 overflow-x-auto">
      <svg
        className="ops-chart"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={`${METRIC_META[metric].label} trend from ${rows[0].bucket} to ${rows[rows.length - 1].bucket}`}
      >
        {[0, 1, 2, 3].map((line) => {
          const lineY = padY + (line / 3) * (height - padY * 2)
          return <line key={line} x1={padX} x2={width - padX} y1={lineY} y2={lineY} className="ops-chart-grid" />
        })}
        <polygon points={area} className="ops-chart-area" />
        <polyline points={points} className="ops-chart-line" />
        {rows.map((row, index) => (
          <circle key={row.bucket} cx={x(index)} cy={y(row[metric])} r="3" className="ops-chart-point">
            <title>{`${row.bucket}: ${metricValue(metric, row[metric])}`}</title>
          </circle>
        ))}
      </svg>
      <div className="flex justify-between text-[10px] text-[#6F6B64] font-mono px-1">
        <span>{rows[0].bucket}</span>
        <span className="text-[#8B8680]">
          range {metricValue(metric, min)} → {metricValue(metric, max)}
        </span>
        <span>{rows[rows.length - 1].bucket}</span>
      </div>
    </div>
  )
}

function DecisionSignal({
  label,
  metric,
  comparison,
  inverse = false,
}: {
  label: string
  metric: AnalyticsMetric
  comparison: AnalyticsResponse['summary'][AnalyticsMetric]
  inverse?: boolean
}) {
  const moving = comparison.delta === 0 ? 0 : comparison.delta > 0 ? 1 : -1
  const favorable = inverse ? moving < 0 : moving > 0
  const status = moving === 0 ? 'Stable' : favorable ? 'Favorable move' : 'Watch this'

  return (
    <div className="border-t border-white/[0.06] pt-3 first:border-0 first:pt-0">
      <div className="flex justify-between gap-3 text-sm">
        <span>{label}</span>
        <span className={moving === 0 ? 'text-[#8B8680]' : favorable ? 'text-[#91B997]' : 'text-[#D5A0A0]'}>
          {status}
        </span>
      </div>
      <div className="text-[11px] text-[#6F6B64] mt-1">
        {metricValue(metric, comparison.current)} now · {metricDelta(comparison.delta_pct)} versus prior period
      </div>
    </div>
  )
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mt-3">
      <table className="w-full text-sm">
        <thead>
          <tr className="ops-th">
            {headers.map((h) => (
              <th key={h} className="pb-2 pr-3 font-medium text-left">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td className="py-3 text-[#6F6B64]" colSpan={headers.length}>No rows yet</td>
            </tr>
          ) : (
            rows.map((row, i) => (
              <tr key={i} className="border-t border-white/[0.05]">
                {row.map((cell, j) => (
                  <td key={j} className="py-2 pr-3 align-top">{cell}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

function OpsStyles() {
  return (
    <style>{`
      .ops-shell {
        background:
          radial-gradient(1200px 600px at 10% -10%, rgba(197,160,40,0.08), transparent 55%),
          radial-gradient(900px 500px at 100% 0%, rgba(255,255,255,0.03), transparent 50%),
          #0A0908;
        font-family: Inter, "Segoe UI", system-ui, sans-serif;
      }
      .ops-rail {
        background: rgba(12,11,10,0.96);
        border-right: 1px solid rgba(255,255,255,0.06);
        display: flex;
        flex-direction: column;
        backdrop-filter: blur(12px);
      }
      .ops-topbar {
        background: rgba(10,9,8,0.85);
        border-bottom: 1px solid rgba(255,255,255,0.05);
        backdrop-filter: blur(10px);
      }
      .ops-kicker {
        font-size: 10px;
        letter-spacing: 0.28em;
        text-transform: uppercase;
        color: #8B8680;
      }
      .ops-display {
        font-family: "Playfair Display", Georgia, serif;
        font-weight: 500;
        letter-spacing: -0.02em;
      }
      .ops-lede { color: #8B8680; font-size: 0.925rem; line-height: 1.55; }
      .ops-login {
        border: 1px solid rgba(255,255,255,0.08);
        background: linear-gradient(180deg, rgba(28,26,23,0.9), rgba(16,15,14,0.95));
        padding: 2rem;
        border-radius: 1.25rem;
        box-shadow: 0 30px 80px rgba(0,0,0,0.45);
      }
      .ops-nav {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
        text-align: left;
        width: 100%;
        padding: 0.7rem 0.85rem;
        border-radius: 0.65rem;
        color: #C4BFB6;
        transition: background 0.15s ease, color 0.15s ease;
      }
      .ops-nav:hover { background: rgba(255,255,255,0.04); }
      .ops-nav-active {
        background: linear-gradient(135deg, #C5A028, #A8841C);
        color: #111;
      }
      .ops-nav-active .ops-nav-hint { color: rgba(17,17,17,0.65); }
      .ops-nav-hint {
        font-size: 10px;
        letter-spacing: 0.04em;
        color: #6F6B64;
      }
      .ops-panel {
        border: 1px solid rgba(255,255,255,0.07);
        background: rgba(20,18,16,0.72);
        border-radius: 1rem;
        padding: 1.1rem 1.2rem;
      }
      .ops-panel-accent {
        border-color: rgba(197,160,40,0.28);
        background: linear-gradient(180deg, rgba(40,34,20,0.55), rgba(20,18,16,0.85));
      }
      .ops-panel-selected {
        border-color: rgba(197,160,40,0.58);
        background: linear-gradient(180deg, rgba(197,160,40,0.11), rgba(20,18,16,0.78));
        box-shadow: inset 0 0 0 1px rgba(197,160,40,0.08);
      }
      .ops-banner {
        border: 1px solid rgba(197,160,40,0.25);
        background: rgba(197,160,40,0.07);
        border-radius: 1rem;
        padding: 1rem 1.2rem;
      }
      .ops-btn-primary {
        background: linear-gradient(135deg, #C5A028, #B89420);
        color: #111;
        font-weight: 600;
        font-size: 0.875rem;
        border-radius: 999px;
        padding: 0.55rem 1.2rem;
      }
      .ops-btn-primary:disabled { opacity: 0.6; }
      .ops-btn-ghost {
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 999px;
        padding: 0.4rem 0.9rem;
        color: #C4BFB6;
      }
      .ops-delta {
        color: #8B8680;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 10px;
      }
      .ops-delta-up { color: #91B997; }
      .ops-delta-down { color: #D5A0A0; }
      .ops-input, .ops-select {
        width: 100%;
        border-radius: 0.55rem;
        border: 1px solid rgba(255,255,255,0.12);
        background: #171513;
        color: #F2EEE6;
        padding: 0.55rem 0.75rem;
        font-size: 0.875rem;
      }
      .ops-link { color: #C5A028; font-size: 0.8rem; }
      .ops-link:hover { text-decoration: underline; }
      .ops-row {
        display: flex;
        gap: 0.75rem;
        align-items: baseline;
        padding: 0.45rem 0;
        border-top: 1px solid rgba(255,255,255,0.04);
      }
      .ops-th { color: #6F6B64; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; }
      .ops-bar-track {
        height: 3px;
        background: rgba(255,255,255,0.06);
        border-radius: 99px;
        overflow: hidden;
      }
      .ops-bar-fill {
        height: 100%;
        background: linear-gradient(90deg, #8A6D1A, #C5A028);
        border-radius: 99px;
      }
      .ops-chart {
        display: block;
        width: 100%;
        min-width: 420px;
        overflow: visible;
      }
      .ops-chart-grid { stroke: rgba(255,255,255,0.07); stroke-width: 1; }
      .ops-chart-area { fill: rgba(197,160,40,0.08); }
      .ops-chart-line {
        fill: none;
        stroke: #C5A028;
        stroke-width: 2.5;
        stroke-linejoin: round;
        stroke-linecap: round;
      }
      .ops-chart-point {
        fill: #0A0908;
        stroke: #D2B34C;
        stroke-width: 2;
      }
      .ops-inventory {
        border: 1px solid rgba(255,255,255,0.06);
        background: rgba(255,255,255,0.018);
        border-radius: 0.65rem;
        padding: 0.75rem;
      }
      .ops-chips { display: flex; flex-wrap: wrap; gap: 0.4rem; }
      .ops-chip {
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 11px;
        padding: 0.3rem 0.55rem;
        border-radius: 0.4rem;
        border: 1px solid rgba(255,255,255,0.08);
        color: #A39E96;
        background: rgba(255,255,255,0.02);
      }
      .ops-chip-gold {
        border-color: rgba(197,160,40,0.35);
        color: #C5A028;
        background: rgba(197,160,40,0.08);
      }
      .ops-sev {
        font-size: 10px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        padding: 0.25rem 0.45rem;
        border-radius: 0.35rem;
        height: fit-content;
        font-weight: 600;
      }
      .ops-sev-critical { background: #5c1f1f; color: #f0c0c0; }
      .ops-sev-high { background: #5c3a12; color: #f0d4a0; }
      .ops-sev-medium { background: #2a2a2a; color: #c5c0b8; }
      .ops-sev-low { background: #1a2a1a; color: #a8c5a8; }
      .ops-fade { animation: opsIn 0.35s ease; }
      @keyframes opsIn {
        from { opacity: 0; transform: translateY(6px); }
        to { opacity: 1; transform: none; }
      }
    `}</style>
  )
}
