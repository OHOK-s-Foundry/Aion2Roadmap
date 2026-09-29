import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useMemo, useState } from 'react';
import { allCheckableIds, coreFlow, goldenRules, priorities, roadmapMeta, sections } from '@/data/roadmap';
import { useProgress } from '@/hooks/useProgress';
import { StepCard } from '@/components/StepCard';
import { BackToTop } from '@/components/BackToTop';
import { Reveal } from '@/components/Reveal';

const TITLE = 'AION2 Vague Progression Roadmap — Launch to Endgame Checklist';
const DESCRIPTION =
    'An interactive AION2 progression checklist: first days, crafting, item-level milestones, Conquest farming, Transcendence and side content — with saved progress.';

export const Route = createFileRoute('/')({
    head: () => ({
        meta: [
            { title: TITLE },
            { name: 'description', content: DESCRIPTION },
            { property: 'og:title', content: TITLE },
            { property: 'og:description', content: DESCRIPTION },
            { property: 'og:type', content: 'website' },
            { name: 'twitter:card', content: 'summary_large_image' },
        ],
    }),
    component: Index,
});

const NAV = [
    ...sections.map((s) => ({ id: s.id, label: s.label })),
    { id: 'cheat-sheet', label: 'Cheat Sheet' },
    { id: 'golden-rules', label: 'Golden Rules' },
];

function Index() {
    const { done, toggle, reset, completed, total, nextId, hydrated } = useProgress(allCheckableIds);
    const [active, setActive] = useState<string>(sections[0]?.id ?? '');

    useEffect(() => {
        const ids = NAV.map((n) => n.id);
        const onScroll = () => {
            let current = ids[0] ?? '';
            for (const id of ids) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 200) current = id;
            }
            setActive(current);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const pct = total ? Math.round((completed / total) * 100) : 0;

    const nextItem = useMemo(() => {
        if (!nextId) return null;
        for (const s of sections) {
            const it = s.items.find((i) => i.id === nextId);
            if (it) return { item: it, section: s };
        }
        return null;
    }, [nextId]);

    const stepCount = sections.flatMap((s) => s.items).filter((i) => i.step).length;

    return (
        <>
            <header className="header">
                <div className="wrap">
                    <div className="header-top">
                        <div className="brand">
                            <span className="brand-mark">AION2</span>
                            <span className="brand-sub">Progression Roadmap</span>
                        </div>
                        <div className="progress-chip">
                            <div
                                className="bar"
                                role="progressbar"
                                aria-valuenow={completed}
                                aria-valuemin={0}
                                aria-valuemax={total}
                                aria-label="Roadmap progress"
                            >
                                <div className="bar-fill" style={{ width: `${pct}%` }} />
                            </div>
                            <span className="progress-count">
                                {completed} / {total} · {pct}%
                            </span>
                        </div>
                    </div>
                    <nav className="nav" aria-label="Sections">
                        {NAV.map((n) => (
                            <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'active' : undefined}>
                                {n.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            <main>
                <section className="hero">
                    <div className="wrap hero-inner">
                        <p className="eyebrow">Launch → Endgame</p>
                        <h1>{roadmapMeta.title}</h1>
                        <h2>{roadmapMeta.subtitle}</h2>
                        <p className="hero-goal">
                            <strong>Goal:</strong> {roadmapMeta.goal}
                        </p>
                        <p className="hero-goal">
                            <strong>Side note:</strong> {roadmapMeta.sidenote1}
                        </p>
                        <p className="hero-goal">
                            <strong>Report:</strong> {roadmapMeta.sidenote2}
                        </p>
                        <p className="hero-goal">
                            <strong>Disclaimer:</strong> {roadmapMeta.sidenote3}
                        </p>

                        <div className="hero-actions">
                            <a className="btn btn-primary" href={nextId ? `#${nextId}` : '#first-days'}>
                                {completed > 0 ? 'Continue where you left off' : 'Start the roadmap'}
                            </a>
                            <button type="button" className="btn btn-ghost" onClick={reset}>
                                Reset progress
                            </button>
                        </div>

                        {hydrated && nextItem ? (
                            <div className="nextup">
                                <span className="pulse-dot" />
                                <div>
                                    <p className="nextup-label">Do this right now</p>
                                    <h3>{nextItem.item.title}</h3>
                                    <p>{nextItem.item.summary}</p>
                                    <p style={{ fontSize: 12, color: 'var(--fg-4)' }}>{nextItem.section.title}</p>
                                </div>
                            </div>
                        ) : null}

                        {hydrated && !nextItem ? (
                            <div className="nextup">
                                <div>
                                    <p className="nextup-label">Complete</p>
                                    <h3>Every task on the roadmap is checked off.</h3>
                                    <p>Sanctuary → Ludra. Keep farming Transcendence and funneling from your alts.</p>
                                </div>
                            </div>
                        ) : null}

                        <div className="stats">
                            <div className="stat">
                                <div className="stat-value">{total}</div>
                                <div className="stat-label">Total tasks</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value">{stepCount}</div>
                                <div className="stat-label">Numbered steps</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value">{sections.length}</div>
                                <div className="stat-label">Progression stages</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value">{pct}%</div>
                                <div className="stat-label">Completed</div>
                            </div>
                        </div>
                    </div>
                </section>

                {sections.map((section) => {
                    const ids = section.items.map((i) => i.id);
                    const sectionDone = ids.filter((id) => done[id]).length;
                    return (
                        <section className="section" id={section.id} key={section.id}>
                            <div className="wrap">
                                <div className="section-head">
                                    <div>
                                        <h2>{section.title}</h2>
                                        {section.intro ? <p>{section.intro}</p> : null}
                                    </div>
                                    <span className="section-meter">
                                        {sectionDone} / {ids.length} done
                                    </span>
                                </div>

                                <div className="timeline">
                                    {section.items.map((item, i) => (
                                        <Reveal key={item.id} delay={Math.min(i, 6) * 40}>
                                            <StepCard
                                                item={item}
                                                index={i}
                                                done={!!done[item.id]}
                                                current={hydrated && nextId === item.id}
                                                onToggle={() => toggle(item.id)}
                                            />
                                        </Reveal>
                                    ))}
                                </div>
                            </div>
                        </section>
                    );
                })}

                <section className="section" id="cheat-sheet">
                    <div className="wrap">
                        <div className="section-head">
                            <div>
                                <h2>7 — Daily / Weekly Priority Cheat Sheet</h2>
                                <p>What to do first when your play time is limited.</p>
                            </div>
                        </div>
                        <div className="grid-3">
                            {priorities.map((p) => (
                                <Reveal key={p.level}>
                                    <div className={`ref-card tone-${p.tone}`}>
                                        <h3>
                                            <span className="tone-dot" />
                                            {p.level}
                                        </h3>
                                        <ul>
                                            {p.items.map((i) => (
                                                <li key={i}>{i}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section" id="golden-rules">
                    <div className="wrap">
                        <div className="section-head">
                            <div>
                                <h2>9 — Golden Rules</h2>
                                <p>Evaluate every decision against these.</p>
                            </div>
                        </div>
                        <Reveal>
                            <div className="rules">
                                {goldenRules.map((r, i) => (
                                    <div className="rule" key={r.title}>
                                        <div className="rule-n">{String(i + 1).padStart(2, '0')}</div>
                                        <h3>{r.title}</h3>
                                        <p>{r.text}</p>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>

                <footer className="footer">
                    <div className="wrap">
                        <h3>Source &amp; Disclaimer</h3>
                        <p>
                            This roadmap is based primarily on the information and recommendations provided in the following video:{' '}
                            <a href={roadmapMeta.source} target="_blank" rel="noreferrer">
                                {roadmapMeta.source}
                            </a>
                        </p>
                        <p>
                            This guide is intended as a personal progression plan and may contain mistakes, outdated information, or details that could change
                            with the Global release.
                        </p>
                        <p>
                            If you notice any incorrect information, missing details, or something that should be changed, please let me know and I&rsquo;ll
                            correct and update the roadmap accordingly. Discord: <code>{roadmapMeta.discord}</code>
                        </p>
                        <p style={{ color: 'var(--fg-4)', fontSize: 13 }}>Progress is stored locally in your browser only.</p>
                    </div>
                </footer>
            </main>

            <BackToTop />
        </>
    );
}
