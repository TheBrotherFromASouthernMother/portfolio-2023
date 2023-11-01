'use client';
import { Project } from "app/types";
import Link from 'next/link'
import Image from 'next/image';
import ReactEmbedGist from 'react-embed-gist';

type props = {
    project: Project;
}

const PushNotifications = ({ project }: props): JSX.Element => (
    <div
    key={project.id}
    className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
    >
    <Image 
        src="/images/projects/tgbp_push_notification.webp"
        className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
        width={750}
        height={750}
        alt="Push Notification for The Green Book Project"
    />
    <p className="my-6">
        As described in my work section, <Link className='underline text-indigo-300 hover:text-indigo-100 ml-1 duration-500' href="/work/green_book">The Green Book Project</Link> was a mobile app that allowed users to rate and review businesses based on how
        inclusive each establishment on the platform was to customers from marginalized groups. 
    </p>
    <p className="my-6">
        As part of my team's effort to boost user engagement I developed a robust push notification system to prompt users to write reviews, let users know when other
        users had engaged with their content, and to alert users of new features in the app.
    </p>
    <p className="my-6">
         Leveraging Redis, Bull.js, Node.js, and Firebase Cloud Messaging (FCM), I created an efficient and reliable notification system. Additionally, I utilized cron job scheduling to automate and personalize notifications, making the user experience even more engaging and interactive.
    </p>
    <p className="my-6">
        For the most part, the system followed an Event-Driven Architecture, in which a triggering event such as a "Like" would be consumed by a corresponding event handler.  After processing and validating the event data, the handler would then fetch the relevant business data and enqueue a "notification" job. Finally, the corresponding job worker would send push notification requests to the relevant API service (Expo API on iOS, FCM on Android).
    </p>
    <p className="my-6">
        I employed Bull.js, a Redis-backed job queue library for Node.js, to manage the processing of push notifications. Bull.js allowed for easy queue management, job prioritization, and job status reporting.
    </p>
    <p>
        The implementation of the push notification system significantly improved user engagement with a massive 24% open rate, and a 13% increase to weekly review creation rates within 30 days after being deployed.  
    </p>

    <p className="my-6">
        Although all the code for the The Green Book Project is currently closed-source. You can view some of examples of the code I wrote to handle push notifications
        on the frontend and backend by taking a look at the Gist below:
    </p>

    <p className="my-4 text-lg">
        Backend Event Handler
    </p>

    <ReactEmbedGist 
        gist="TheBrotherFromASouthernMother/ac373baba1852edd48b395debdfeb196" 
        wrapperClass="bg-slate-950 h-80 overflow-scroll my-10"
        contentClass="bg-slate-950"
    />

    <p className="my-4 text-lg">
        Frontend (React Hook)
    </p>
    <ReactEmbedGist 
    gist="TheBrotherFromASouthernMother/b1bb1dce3826837a210d940046db9ad7" 
    wrapperClass="bg-slate-950 h-80 overflow-scroll my-10"
    contentClass="bg-slate-950"
    />
</div>
);

export default PushNotifications;