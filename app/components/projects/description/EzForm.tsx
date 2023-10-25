import { Project } from "app/types";
import Link from 'next/link'
import Image from 'next/image';

type props = {
    project: Project;
}

const EzForm = ({ project }: props): JSX.Element => (
    <div
    key={project.id}
    className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
>
    <Image 
        src="/images/projects/lost_title_connection.jpeg"
        className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
        width={750}
        height={750}
        alt="Lost Title Connection advert"
    />
    <p className="my-6">
        As part of the curriculum for DigitalCrafts' full stack engineering bootcamp, students were required to complete a series of
        group projects using the knowledge we accumulated to apply our technical skills.
    </p>
    <p className="my-6">
        For our final group project, my group was tasked with building a product for a real-life business in order to fully apply our course-wide learnings
        in a real-world context. 
    </p>
    <p className="my-6">
        As such, we chose to work with a local vehicle title service called <Link className='underline text-indigo-300 hover:text-indigo-100 ml-1 duration-500' target='_blank' rel="noopener noreferrer" href="https://www.losttitleconnection.net/">"Lost Title Connection"</Link> to build an automated form filing tooling.
    </p>
    <p className="my-6">
        To start, we met with Rudy Hernandez the owner of Lost Title Connection to understand his business needs and gather intial requirements.
        We then met as a team to discuss and negotiate scope and limitations. We then met with Rudy a second time to offer a counterpropsal.
    </p>
    <p className="my-6">
        After negotiating and nailing down final requirements, we hit the whiteboards again to map out initial architecture and design.
    </p>
    <p className="my-6">
        For this project our team continued our usage of vanilla JS, JQuery, and Boostrap to build out the frontend.
        However, on the backend, we chose to make use of Pytho and Django for our web framework, and PostgreSQL as our Relational Database Management System.
    </p>
    <p className="my-6">
        You can view this project's source code by checking out the public repo on Github <Link className='underline text-indigo-300 hover:text-indigo-100 ml-1 duration-500' target='_blank' rel="noopener noreferrer" href="https://github.com/TheBrotherFromASouthernMother/TitleStore-Project">here.</Link>
    </p>
</div>
);

export default EzForm;