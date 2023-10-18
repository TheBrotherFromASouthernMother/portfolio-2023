import Image from 'next/image';

const GreenBook = (): JSX.Element => (
    <div>
    <div 
        className="w-full my-10 bg-center bg-cover"
            style={{
                backgroundImage: 'url(/images/green_book/tgbp_reviewers.webp)'
            }}
    >
        <div className="w-full bg-opacity-70 bg-black px-12 pt-16 pb-12">
            <h2 className='font-general-semibold text-2xl lg:text-3xl xl:text-4xl px-4 pb-4'>
                 The Green Book Project
            </h2>
            <p className="my-6 text-xl px-4">
            The Green Book Project (Nov 2020 - March 2023) was a crowdsourced-reviews platform (think Yelp) that helped people from marginalized groups 
            find inclusive business and avoid common forms of discrimination such sexism, queer phobia, ableism and racism.
            </p>
            <p className="mb-6 mt-10 text-xl px-4">
                Using The Green Book Project, users could rate and review businesses based on their inclusivity and customer service while also adding photos and videos to their reviews and sharing them to
                external social media platforms like Facebook and Twitter.
            </p>
        </div>
    </div>
    
    <div className='w-full my-10 px-12'>
        <h2 className='font-general-semibold text-xl lg:text-2xl xl:text-3xl px-4 pb-4'>
            Background
        </h2>
        <p className="my-6 text-xl px-4">
             Starting as a simply hobby project, The Green Book Project ultimately began during my visit to the 
             <a href='https://www.instagram.com/wearekranti/?hl=en' target="__blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100 ml-1 duration-500">Kranti House</a> in Mumbai, India in the early spring of 2016 as part Semester at Sea's IMPACT scholars program.
        </p>
        <p className="mb-6 mt-10 text-xl px-4">
        After witnessing a shocking instance of caste-based discrimination targeted at the amazing young women of the Kranti House, I reflected on my own experiences with racial discrimnation in the Deep South and felt that someone should build an app for that.
        </p>
        <p className="mb-6 mt-10 text-xl px-4">
        The experienced galvanized me to build the Green Book Project to act as platform which could help people from marginalized groups avoid discriminatory services and instead support inclusive businesses.
        </p>
    </div>
</div>
);

export default GreenBook;