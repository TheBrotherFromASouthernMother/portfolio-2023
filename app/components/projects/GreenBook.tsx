import Image from 'next/image';

const GreenBook = (): JSX.Element => (
    <div>
    <h2 className='font-general-semibold text-2xl lg:text-3xl xl:text-4xl'>
        The Green Book Project
    </h2>
    <p className="my-4">
        The Green Book Project was a mobile app that empowered people from marginalized groups to find inclusive businesses
        and avoid discrimination using our Yelp-style shared reviews platform.
    </p>
    <p className="my-4">
        Using The Green Book Project, users could rate and review businesses based on their inclusive services and customer service,
        as well as share photos and videos for each location, and share their reviews to external social media platforms like Facebook and Twitter.
    </p>
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/ZbMEzE6Sxyc?si=__xsYTvNh2eXPafv" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
    </iframe>
    <p className="my-4">
        As the founder and sole engineer on The Green Book Project, I built The Green Book Project mobile app and backend tech stack from scratch using React Native, GraphQL, Node.js, and PostgreSQL. 
    </p>
    <p className="my-4">
        In addition to my technical responsibilites, I also led a mutlifuctional product-marketing team that helped me scale The Green Book Project
        to reach over 13,000 downloads in the App Store and Google Play, amass over 7,000 SMS-verified users, and build a newsletter following with over 3,000 double-opt-in readers.
    </p>
    <div className="px-4">
        <Image
            src="/images/tgbp_zoom_team_image.png"
            alt="Christian Lowe in Eado"
            className="rounded-md overflow-hidden"
            layout="responsive"
            width={150}
            height={150}
        />
    </div>
</div>
);

export default GreenBook;