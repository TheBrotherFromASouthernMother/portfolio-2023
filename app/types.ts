export interface Project {
    id: number;
    title: string;
    category: string;
    img: string;
    technologies: string[];
    link?: string;
    description: string;
    images?: ProjectImage[],
}

export interface ProjectImage {
    src: string,
    alt: string,
}
