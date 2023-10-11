import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Project from './project';

const projectsData = [
    {
        key: 1,
        title: 'The Green Book Project',
        category: 'mobile app',
        img: '/images/green_book_project_newsfeed.png',
    },
    {
        key: 2,
        title: 'The Neon Galactica (Stable Diffusion)',
        category: 'Diffusion Pipeline',
        img: '/images/neon_galactica.png',
    },
    {
        key: 3,
        title: 'Campaign Success Service (Change.org)',
        category: 'web application',
        img: '/images/campaign_success_example.png'
    },
];

function ProjectsGrid() {
	const [searchProject, setSearchProject] = useState();

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Projects portfolio
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
                {projectsData.map((project, index) => <Project {...project} />)}
			</div>
		</section>
	);
}

export default ProjectsGrid;