import { Project } from "app/types";

const projectsData: Project[] = [
    {
        id: 1,
        title: 'D8',
        key: 'd8',
        category: 'Web App',
        img: '/images/github_octocat.webp',
        publish_date: 'February 2018',
        technologies: ['Javascript', 'JQuery', 'CSS', 'Bootstrap', 'Java', 'Spark'],
        description: 'D8 was a group project created to meet the course requirements of DigitalCrafts coding bootcamp',
    },
    {
        id: 2,
        title: 'Biddr HTX',
        category: 'Web App',
        img: '/images/github_octocat.webp',
        publish_date: 'March 2018',
        key: 'biddr',
        technologies: ['Javascript', 'CSS', 'Bootstrap', 'Handlebars', 'Node.js', 'Express', 'PostgreSQL'],
        description: 'Bidder HTX was a group project created to meet the course requirements of DigitalCrafts coding bootcamp',
    },
    {
        id: 3,
        title: 'EzForm',
        category: 'Web Utility',
        key: 'ezform',
        img: '/images/github_octocat.webp',
        publish_date: 'May 2018',
        technologies: ['Javascript', 'Python', 'Django', 'PostgreSQL'],
        description: 'EzForm was a web utility app built as a capstone project for DigitalCrafts coding bootcamp',
    },
];

export default projectsData;