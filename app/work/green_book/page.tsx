'use client';
import Image from 'next/image';
import Link from 'next/link';

const GreenBookPage = (): JSX.Element => (
    <div>
        <div 
            className="w-full mb-6 bg-center bg-cover"
        >
            <div className="w-full bg-opacity-70 px-12 pt-16 pb-12">
                <h2 className='font-general-semibold text-2xl lg:text-3xl xl:text-4xl px-4 pb-4'>
                    The Green Book Project
                </h2>
                <div className='w-full flex flex-col items-center px-4'>
                    <Image
                        src="/images/green_book/green_book_project_product.webp"
                        className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                        alt="The Green Book Project. Find Inclusive Businesses. Avoid Discrimination. Never Feel Out Of Place."
                        width={750}
                        height={750}
                    />
                    <div>
                    <p className='text-xs sm:text-sm pt-2'>
                        Photo courtesy of The Green Book Project's<Link className='underline text-indigo-300 hover:text-indigo-100 ml-1 duration-500' target='_blank' rel="noopener noreferrer" href="https://www.producthunt.com/products/the-green-book-project#the-green-book-project">Product Hunt Launch.</Link>
                    </p>
                    </div>
                </div>
                <p className="my-6 text-m sm:text-xl px-4">
                The Green Book Project (Nov 2020 - March 2023) was a crowdsourced-reviews platform (think Yelp) that helped people from marginalized groups 
                find inclusive business and avoid common forms of discrimination such sexism, queer phobia, ableism and racism.
                </p>
                <p className="mt-10 text-m sm:text-xl px-4">
                    Using The Green Book Project, users could rate and review businesses based on their inclusivity and customer service while also adding photos and videos to their reviews and sharing them to
                    external social media platforms like Facebook and Twitter.
                </p>
            </div>
        </div>
    
        <div className='w-full my-10 px-12'>
            <h2 className='font-general-semibold text-xl lg:text-2xl xl:text-3xl px-4 pb-4'>
                Background
            </h2>
            <div className='flex flex-col sm:flex-row'>
                <div className="w-full sm:w-1/3">
                        <Image
                            src="/images/green_book/me_at_the_kranti_house.webp"
                            width={200}
                            height={200}
                            layout='responsive'
                            className="rounded-lg"
                            alt="Me with the young women at the Kranti House, Mumbai, 2016"
                        />
                        <p className='text-center text-xs sm:text-sm'>
                            Me with the young women at the Kranti House, Mumbai, 2016
                        </p>
                </div>
                <div className='w-full sm:w-3/4 sm:pl-4'>
                    <p className="my-6 text-m sm:text-xl px-4">
                    Starting as a simple hobby project, The Green Book Project ultimately began during my visit to the 
                    <a href='https://www.instagram.com/wearekranti/?hl=en' target="__blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100 ml-1 duration-500">Kranti House</a> in Mumbai, India in the early spring of 2016 as part of Semester at Sea's IMPACT scholars program.
                    </p>
                    <p className="mb-6 mt-10 text-m sm:text-xl px-4">
                    After witnessing a shocking instance of caste-based discrimination targeted at the amazing young women of the Kranti House, I reflected on my own experiences with racial discrimination in the Deep South and felt that someone should build an app for that.
                    </p>
                    <p className="mb-6 mt-10 text-m sm:text-xl px-4">
                    The experience galvanized me to build the Green Book Project to help people from marginalized groups avoid discriminatory services and instead support inclusive businesses.
                    </p>
                </div>
            </div>
        </div>

        <div 
            className="w-full my-6 bg-center bg-cover"
                style={{
                    backgroundImage: 'url(/images/green_book/tgbp_reviewers.webp)'
                }}
        >
            <div className="w-full bg-opacity-70 bg-black px-12 pt-16 pb-12">
                <h2 className='font-general-semibold text-2xl lg:text-3xl xl:text-4xl px-4 pb-4'>
                    Process
                </h2>
                <p className="my-6 text-m sm:text-xl px-4">
                    As the sole founder of my startup and lacking the experience necessary to attract VC-backing, I learned to code while building The Green Book Project from scratch using technologies like React Native, GraphQL, and PostgreSQL just to name a few. 
                </p>
                <p className="mb-6 mt-10 text-m sm:text-xl px-4">
                    Through user feedback and testing, I built countless iterations of the app until finally launching The Green Book Project for the first time in the Apple App Store in November of 2020. To see how it worked, check out the demo below:
                </p>
                <div className="w-full flex justify-center">
                    <iframe 
                    width="560" 
                    height="560"
                    className="w-full md:w-2/3 h-10/12"
                    src="https://www.youtube.com/embed/ZbMEzE6Sxyc?si=GEUtLqJdbw-JTU0N" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                    </iframe>
                </div>
                <p className="mb-6 mt-10 text-m sm:text-xl px-4">
                    After launching The Green Book Project, I quickly assembled a team to help me scale The Green Book Project’s user acquisition strategy, SEO, and newsletter to build a more substantial following.
                    Within just 4 months of launching in the App Store, I also launched The Green Book Project to Google Play in order to serve our growing group of supporters who wanted an Android version of the app.
                </p>
                <p className="mb-6 mt-10 text-m sm:text-xl px-4">
                    Through leading this multifunctional product-marketing team I scaled The Green Book Project to reach over 13,000 downloads in the App Store and Google Play, amassed over 7,000 SMS-verified users, built a newsletter following with over 3,000 double-opt-in readers, and raised $51,000+ in crowdfunding support via Wefunder.com.
                </p>
            </div>
        </div>

        <div
            className="w-full my-6 bg-center bg-cover"
        >
            <div className="w-full px-12 pt-16 pb-12">
                <h2 className='font-general-semibold text-2xl lg:text-3xl xl:text-4xl px-4 pb-4'>
                    Conclusion
                </h2>
                <p className="my-6 text-m sm:text-xl px-4">
                    Although my amazing team and I were able to successfully meet our minimum crowdfunding goal, the economic conditions of the market in early 2023 caused us to fall short of our total venture capital funding goal and we were forced to shutter The Green Book Project as a result.
                </p>
                <p className="mb-6 mt-10 text-m sm:text-xl px-4">
                Despite this, I still consider the startup to have been a smashing success in building a dedicated following and yielding countless professional lessons for myself and my former teammates.
                </p>
                <div className='w-full flex flex-col justify-center items-center'>
                <Image
                        src="/images/green_book/tgbp_team_and_fans_afrotech.webp"
                        className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                        alt="The Green Book Project. Find Inclusive Businesses. Avoid Discrimination. Never Feel Out Of Place."
                        width={700}
                        height={700}
                    />
                    <p className='text-xs sm:text-sm'>
                            The Green Book Project team at Afrotech 2022, Austin, TX
                        </p>
                </div>
            </div>
        </div>
</div>
);

export default GreenBookPage;