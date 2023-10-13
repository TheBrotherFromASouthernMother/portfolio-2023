import { Project } from "app/types";

const projectsData: Project[] = [
    {
        id: 1,
        title: 'The Green Book Project',
        category: 'mobile app',
        img: '/images/green_book_project_newsfeed.png',
        technologies: ['React Native', 'React', 'GraphQL', 'Node.js', 'Express', 'PostgreSQL', 'Webpack'],
        description: '',
    },
    {
        id: 2,
        title: 'The Neon Galactica (Stable Diffusion)',
        category: 'Diffusion Pipeline',
        img: '/images/neon_galactica.png',
        technologies: ['React Native', 'React', 'GraphQL', 'Node.js', 'Express', 'PostgreSQL', 'Webpack'],
        description: '',
    },
    {
        id: 3,
        title: 'Campaign Success Service (Change.org)',
        category: 'web application',
        img: '/images/campaign_success_example.png',
        technologies: ['React Native', 'React', 'GraphQL', 'Node.js', 'Express', 'PostgreSQL', 'Webpack'],
        description: '',
    },
];

export default projectsData;