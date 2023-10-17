import { Project } from "app/types";

const projectsData: Project[] = [
    {
        id: 1,
        title: 'The Green Book Project',
        category: 'mobile app',
        img: '/images/github_octocat.webp',
        technologies: ['React Native', 'React', 'Apollo GraphQL', 'Node.js', 'Express', 'PostgreSQL', 'Webpack', 'Redis'],
        description: ``,
        images: [
            {
                src: '/images/green_book/review.png',
                alt: 'An example review on The Green Book Project',
            },
            {
                src: '/images/green_book/discovery.png',
                alt: 'The Discovery Screen on The Green Book Project',
            },
            {
                src: '/images/green_book/newsfeed.png',
                alt: "The Green Book Project's Community Newsfeed",
            },
        ],
    },
    {
        id: 2,
        title: 'The Neon Galactica (Stable Diffusion)',
        category: 'Diffusion Pipeline',
        img: '/images/github_octocat.webp',
        technologies: ['React Native', 'React', 'GraphQL', 'Node.js', 'Express', 'PostgreSQL', 'Webpack'],
        description: '',
    },
    {
        id: 3,
        title: 'Campaign Success Service (Change.org)',
        category: 'web application',
        img: '/images/github_octocat.webp',
        technologies: ['React Native', 'React', 'GraphQL', 'Node.js', 'Express', 'PostgreSQL', 'Webpack'],
        description: '',
    },
];

export default projectsData;