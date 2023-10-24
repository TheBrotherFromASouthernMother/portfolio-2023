import { Project } from "app/types";
import Link from 'next/link'
import Image from 'next/image';

type props = {
    project: Project;
}

const D8 = ({ project }: props): JSX.Element => (
    <div
    key={project.id}
    className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
>
    <Image 
        src="/images/projects/d8_screenshot.webp"
        className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
        width={750}
        height={750}
        alt="D8 web app screenshot"
    />
    <p>
        As part of the curriculum for DigitalCrafts' full stack engineering bootcamp, students were required to complete a series of
        group projects using the knowledge we accumulated to apply our technical skills.
    </p>
    <p>
        For the first of our group projects, my group decided to build a date planning web-app using personality quiz results in order
        to suggest date night activities to local Houston couples.
    </p>
    <p>
        We began with whiteboards to map out initial architecture, layout, and required functionality before discussing scope limitations and tradeoffs.
        After that we got to work building.
    </p>
    <div className="flex flex-col">
        <Image
            src="/images/projects/d8_project_overview.webp"
            className="py-6 rounded-xl cursor-pointer shadow-lg sm:shadow-none"
            width={650}
            height={650}
            alt="D8 architecture on whiteboard"
        />
        <Image 
            src="/images/projects/d8_whiteboard_1.webp"
            className="py-6 rounded-xl cursor-pointer shadow-lg sm:shadow-none"
            width={650}
            height={650}
            alt="D8 architecture on whiteboard"
        />
    </div>
    <p>
        For this project our team decided to primary utilize HTML, vanilla Javascript, JQuery, Bootstrap, and to build the frontend as these were the technologies covered in the most recent module at that time.
        On the backend, we opted to challenge ourselves by learning and utilizing Java and Spark deployed to a Heroku hobby instance.
        Third party data such as location services, movie showtimes, and restaurant information was made accessible via third party APIs. 
    </p>
    <p>
        You can view this project's source code by checking out the public repo on Github <Link className='underline text-indigo-300 hover:text-indigo-100 ml-1 duration-500' target='_blank' rel="noopener noreferrer" href="https://github.com/TheBrotherFromASouthernMother/D8">here.</Link>
    </p>
</div>
);

export default D8;