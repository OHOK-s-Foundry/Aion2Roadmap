import { roadmapMeta } from '@/data/roadmap';

export function Footer() {
    return (
        <footer className="footer">
            <div className="wrap footer-basic">
                <span className="footer-brand">FishingtonIII&rsquo;s AION2 Guides</span>
                <span>
                    Discord: <code>{roadmapMeta.discord}</code>
                </span>
            </div>
        </footer>
    );
}
