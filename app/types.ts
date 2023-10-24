export interface Project {
    id: number;
    title: string;
    category: string;
    img: string;
    publish_date: string;
    key: string;
    technologies: string[];
    link?: string;
    description: string;
}