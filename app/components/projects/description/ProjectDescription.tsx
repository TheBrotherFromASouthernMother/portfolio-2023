import { Project } from "app/types";
import D8 from 'app/components/projects/description/D8'
import Biddr from "app/components/projects/description/Biddr";

type props = {
    project: Project;
}

const ProjectDescription = ({ project }: props): JSX.Element => {

    if (project.key === 'd8') {
        return <D8 project={project} />
    }

    if (project.key === 'biddr') {
        return <Biddr project={project} />
    }

    return (
        <></>
    )
};

export default ProjectDescription;