import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from '@tanstack/react-router';
import { useEffect, type ReactNode } from 'react';

import appCss from '../styles.css?url';
import { reportLovableError } from '../lib/lovable-error-reporting';
import { Footer } from '../components/Footer';

const centerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 24px',
    textAlign: 'center' as const,
};

function NotFoundComponent() {
    return (
        <div style={centerStyle}>
            <div style={{ maxWidth: 420 }}>
                <h1 style={{ fontSize: 64 }}>404</h1>
                <h2 style={{ marginTop: 12, fontSize: 20 }}>Page not found</h2>
                <p style={{ color: 'var(--fg-3)', fontSize: 14 }}>The page you're looking for doesn't exist or has been moved.</p>
                <div style={{ marginTop: 24 }}>
                    <Link to="/" className="btn btn-primary">
                        Go home
                    </Link>
                </div>
            </div>
        </div>
    );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
    console.error(error);
    const router = useRouter();
    useEffect(() => {
        reportLovableError(error, { boundary: 'tanstack_root_error_component' });
    }, [error]);

    return (
        <div style={centerStyle}>
            <div style={{ maxWidth: 420 }}>
                <h1 style={{ fontSize: 22 }}>This page didn't load</h1>
                <p style={{ color: 'var(--fg-3)', fontSize: 14 }}>Something went wrong on our end. You can try refreshing or head back home.</p>
                <div style={{ marginTop: 24, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            router.invalidate();
                            reset();
                        }}
                    >
                        Try again
                    </button>
                    <a href="/" className="btn">
                        Go home
                    </a>
                </div>
            </div>
        </div>
    );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
        meta: [
            { charSet: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { title: 'AION2 Progression Roadmap' },
            {
                name: 'description',
                content: 'Interactive AION2 launch-to-endgame progression checklist.',
            },
            { property: 'og:type', content: 'website' },
            { name: 'twitter:card', content: 'summary_large_image' },
        ],
        links: [
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap',
            },
            {
                rel: 'stylesheet',
                href: appCss,
            },
            { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
        ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body>
                {children}
                <Scripts />
            </body>
        </html>
    );
}

function RootComponent() {
    const { queryClient } = Route.useRouteContext();

    return (
        <QueryClientProvider client={queryClient}>
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
            <Footer />
        </QueryClientProvider>
    );
}
