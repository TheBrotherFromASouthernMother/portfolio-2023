import { Project } from "app/types";
import Link from 'next/link'
import Image from 'next/image';

type props = {
    project: Project;
}

const Newsfeed = ({ project }: props): JSX.Element => (
    <div
    key={project.id}
    className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
    >
    <Image 
        src="/images/projects/ph_newsfeed_demo.webp"
        className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
        width={750}
        height={750}
        alt="Examples of The Green Book Project's Newsfeed"
    />
    <p className="my-6">
        As described in my work section, <Link className='underline text-indigo-300 hover:text-indigo-100 ml-1 duration-500' href="/work/green_book">The Green Book Project</Link> was a mobile app that allowed users to rate and review businesses based on how
        inclusive each establishment on the platform was to customers from marginalized groups. 
    </p>
    <p className="my-6">
        As part of my team's effort to improve the "stickiness" of the user experience and decrease churn, my UX designer and I designed, developed, and deployed an in-app "newsfeed" to give users a more communal feel when using the platform.
    </p>
    <p className="my-6">
        After my I and my UX designer iterated through several initial designs and tested the Figma prototype for the feature based on feedback from user interviews, I started the architectural design process.
    </p>
    <p className="my-6">
        Due the scroll-based nature of the newsfeed's UI, I knew I would need to implement some kind of pagination for data retrieval. I elected to go with cursor-based pagination, primarily to ensure data consistency for each user in the face of concurrent creation of newsfeed posts
    </p>
    <p className="my-6">
        Given the interrealated nature of the data we needed to fetch for the UI layer of the feed, I elected to utilize GraphQL at the API level to make the fetching and handling of server-side data easy to manage. Given that the backend tech stack was already based on Node.js (Express) and PostgreSQL, I found that GraphQL played fairly well with these technologies.
    </p>
    <p className="my-6">
        Additionally, because I had already built the backend for The Green Book Project using a service-oriented architecture, mapping the resolving functions for each GraphQL schema made approaching the data resolution process straightfoward.
    </p>
    <p className="my-6">
        Lastly to ensure the security of the GraphQL enpdoint, I also implemented GraphQL rules to limit query depth and complexity, protecting the overall system from DOS attacks and runaway circular references.
    </p>
    <p>
        We intially launched the newsfeed to our users using a self-hosted Unleash instance for feature flag management. After running a basic A/B test for our iOS users for three weeks, we saw a massive improvement to user engagement and churn. These results led us to "productizing" the feature for all users.
    </p>
</div>
);

export default Newsfeed;