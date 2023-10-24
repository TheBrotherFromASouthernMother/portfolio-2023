import { Project } from "app/types";
import Link from 'next/link'
import Image from 'next/image';

type props = {
    project: Project;
}

const Biddr = ({ project }: props): JSX.Element => (
    <div
    key={project.id}
    className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
>
    <Image 
        src="/images/projects/biddr_app_screenshot.webp"
        className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
        width={750}
        height={750}
        alt="D8 architecture on whiteboard"
    />
    <p>
        As part of the curriculum for DigitalCrafts' full stack engineering bootcamp, students were required to complete a series of
        group projects using the knowledge we accumulated to apply our technical skills.
    </p>
    <p>
        For the second of our group projects, my group decided to build a web app that would allow users to bid in digital auctions for 
        local Houston art.
    </p>
    <p>
        As with our previous project, D8, we began our project with whiteboards to map out initial architecture, layout, and required functionality before discussing scope limitations and tradeoffs.
        After deciding upon an architecture, our instructor added a curveball to simulate real life software development, adding a requirement that we must include
        authentication as core requirement.
    </p>
    <p>
        For this project our team continued our usage of vanilla JS, JQuery, and Boostrap to build out the frontend, but also opted to make usage of Handlebars as our view templating engine.
        On the backend, we chose to go with Node.js, Express to run our server application, and PostgreSQL as our Relational Database Management System.
    </p>
    <p>
        You can view this project's source code by checking out the public repo on Github <Link className='underline text-indigo-300 hover:text-indigo-100 ml-1 duration-500' target='_blank' rel="noopener noreferrer" href="https://github.com/TheBrotherFromASouthernMother/Bidder-HTX">here.</Link>
    </p>
</div>
);

export default Biddr;