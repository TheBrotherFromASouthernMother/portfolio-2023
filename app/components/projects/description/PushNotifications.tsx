import { Project } from "app/types";
import Link from 'next/link'
import Image from 'next/image';

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
        For the most part, the system followed an Event-Driven Architecture, where in a trigger event such as a "Like" was consumed by a corresponding event handler, which would
        after processing the event validity and other business concerns would enqueue a "notification" job which when processed would send a push notification request to the corresponding API service (Expo API on iOS, FCM on Android).
    </p>
    <p className="my-6">
        I employed Bull.js, a Redis-backed job queue library for Node.js, to manage the processing of push notifications. Bull.js allowed for easy queue management, job prioritization, and job status reporting.
    </p>
    <p>
        The implementation of the push notification system significantly improved user engagement with a massive 24% open rate, and a 13% increase to weekly review creation rates within 30 days after being deployed.  
    </p>
</div>
);

export default PushNotifications;