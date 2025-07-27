export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://quantumaffect.com', // Update this with your actual domain
    title: 'Quantum Affect',
    subtitle: 'Philosophical Contemplations',
    description: 'Exploring the intersection of quantum physics, consciousness, and philosophical inquiry. Deep contemplations on reality, existence, and the nature of being.',
    image: {
        src: '/hero.jpeg',
        alt: 'Quantum Affect - Philosophical Contemplations'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Essays',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Essays',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    socialLinks: [
        {
            text: 'Twitter/X',
            href: 'https://twitter.com/quantumaffect'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/yourusername'
        }
    ],
    hero: {
        title: 'Quantum Affect',
        text: "Where philosophy meets quantum reality. Exploring consciousness, existence, and the fundamental nature of being through contemplative inquiry and deep philosophical reflection. Each essay is a meditation on the mysteries that lie at the intersection of mind, matter, and meaning.",
        image: {
            src: '/hero.jpeg',
            alt: 'Abstract representation of quantum consciousness'
        },
        actions: [
            {
                text: 'Read Essays',
                href: '/blog'
            },
            {
                text: 'About',
                href: '/about'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Quantum Affect',
        text: 'Receive contemplative philosophical essays exploring consciousness, quantum reality, and the nature of existence.',
        formUrl: '#'
    },
    postsPerPage: 6,
    projectsPerPage: 6
};

export default siteConfig;
