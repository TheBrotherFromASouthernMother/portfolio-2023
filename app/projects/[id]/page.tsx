import GreenBook from "app/components/projects/GreenBook";


type PageProps = {
	params: {
		id: string;
	},
}

async function getProjectData(projectId: string) {

	const res = await fetch(`http://localhost:3000/projects/api?project_id=${projectId}`, {
		next: { revalidate: 1 },
	});
   
	if (!res.ok) {
	  throw new Error('Failed to fetch data')
	}
	const data = await res.json();
	return data;
  }

export default async function ProjectSingle({ params: { id } }: PageProps) {
	const { project } = await getProjectData(id);

	return (
		<div className="container mx-auto">
			{/* Header */}
			<div>
				<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
					{project.title}
				</p>
			</div>

			{/* Info */}
			<div className="block sm:flex gap-0 sm:gap-10 mt-14">
				<div className="w-full sm:w-1/3 text-left">
					{/* Single project technologies */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							Tools & Technologies
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{project.technologies.join(', ')}
						</p>
					</div>
				</div>

				{/*  Single project right section details */}
				<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
					<p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
						Summary
					</p>
					<p
						key={project.id}
						className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
					>
						{project.description}
					</p>
				</div>
			</div>
		</div>
	);
}