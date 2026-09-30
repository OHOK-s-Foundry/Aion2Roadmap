import { createFileRoute, Link } from '@tanstack/react-router';
import { roadmapMeta } from '@/data/roadmap';
import { guides } from '@/data/guides';
import { Reveal } from '@/components/Reveal';

const TITLE = "FishingtonIII's AION2 Guides";
const DESCRIPTION =
    'A growing collection of AION2 guides — progression roadmaps, crafting notes and more. Reach out on Discord (validss) with questions or corrections.';

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
    component: Landing,
});

function Landing() {
    return (
        <>
            <header className="header">
                <div className="wrap">
                    <div className="header-top">
                        <div className="brand">
                            <span className="brand-mark">AION2</span>
                            <span className="brand-sub">Guides by FishingtonIII</span>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section className="hero">
                    <div className="wrap hero-inner">
                        <p className="eyebrow">Welcome</p>
                        <h1>FishingtonIII&rsquo;s AION2 Guides</h1>
                        <h2>A home for progression roadmaps, notes and guides for AION2.</h2>
                        <p className="hero-goal">
                            This site is going to grow into a full library of AION2 guides — progression plans, crafting breakdowns, class notes and more. For
                            now, there&rsquo;s just the one guide below, but more will be added as I write them.
                        </p>
                        {/* 
                        <div className="discord-chip">
                            <span className="discord-chip-label">Questions, corrections or feedback?</span>
                            <span>
                                Contact me on Discord: <code>{roadmapMeta.discord}</code>
                            </span>
                        </div> */}
                    </div>
                </section>

                <section className="landing-sections" id="guides">
                    <div className="wrap">
                        <div className="section-head">
                            <div>
                                <h2>Guides</h2>
                                <p>Pick a guide below to get started.</p>
                            </div>
                        </div>

                        <div className="grid-3">
                            {guides.map((g) => (
                                <Reveal key={g.id}>
                                    <Link to={g.href} className="ref-card guide-card">
                                        <h3>
                                            <span className="tone-dot" />
                                            {g.title}
                                        </h3>
                                        <p className="guide-card-desc">{g.description}</p>
                                        <span className="guide-card-cta">Open guide →</span>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
