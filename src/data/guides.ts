export type Guide = {
    id: string;
    title: string;
    description: string;
    href: string;
    status: 'available' | 'planned';
};

export const guides: Guide[] = [
    {
        id: 'roadmap',
        title: 'Vague Progression Roadmap',
        description: 'A launch-to-endgame checklist covering first days, crafting, item-level milestones, Conquest farming, Transcendence and side content.',
        href: '/roadmap',
        status: 'available',
    },
];
