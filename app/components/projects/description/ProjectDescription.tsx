import { Project } from "app/types";
import D8 from 'app/components/projects/description/D8'
import Biddr from "app/components/projects/description/Biddr";
import EzForm from "app/components/projects/description/EzForm";
import PushNotifications from "app/components/projects/description/PushNotifications";

type props = {
    project: Project;
}

const ProjectDescription = ({ project }: props): JSX.Element => {

    if (project.key === 'gb_push_notifications') {
        return <PushNotifications project={project} />
    }

    if (project.key === 'd8') {
        return <D8 project={project} />
    }

    if (project.key === 'biddr') {
        return <Biddr project={project} />
    }

    if (project.key === 'ezform') {
        return <EzForm project={project} />
    }

    return (
        <></>
    )
};

export default ProjectDescription;