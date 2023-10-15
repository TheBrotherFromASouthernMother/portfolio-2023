import projectData from 'app/data/project_data';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get('project_id') || '';
    console.log('projectId: ', projectId);
    const project = projectData.filter((project) => project.id === parseInt(projectId))[0];
    console.log(project);

	return Response.json({
		project,
	});
}