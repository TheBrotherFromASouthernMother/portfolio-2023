import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import GridTile from 'app/components/projects/GridTile';
import projectsData from 'app/data/project_data';

function ProjectsGrid(): JSX.Element {
	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Checkout my portfolio:
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
                {projectsData.map((project, index) => <GridTile {...project} />)}
			</div>
		</section>
	);
}

export default ProjectsGrid;