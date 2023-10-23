'use client';
import Link from 'next/link'
import AppBanner from 'app/components/AppBanner'
import ProjectsGrid from 'app/components/projects/Grid';
import AboutSection from 'app/components/AboutSection';
import MyWork from 'app/components/MyWork';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <AppBanner />
      <AboutSection />
      <MyWork />
      <div 
        className="w-full my-10 bg-center bg-cover"
            style={{
                backgroundImage: 'url(/images/green_book/tgbp_reviewers.webp)'
            }}
         >
            <div className="w-full bg-opacity-50 bg-black px-8 md:px-20 pt-20 pb-20">
                <h2 className='font-general-semibold text-2xl lg:text-3xl xl:text-4xl px-4 pb-4'>
                    The Green Book Project
                </h2>
                <p className="my-6 text-xl">
                    As the founder of The Green Book Project (Nov 2020 - March 2023) I built a crowdsourced-reviews platform (think Yelp) that helped people from marginalized groups 
                    find inclusive business and avoid common forms of discrimination such sexism, racism, queer phobia, and ableism.
                </p>
                <p className="mb-6 mt-10 text-xl">
                    Using The Green Book Project, users could rate and review businesses based on their inclusivity and customer service while also adding photos and videos to their reviews and sharing them to
                    external social media platforms like Facebook and Twitter.
                </p>
                <Link href="/work/green_book">
                    <button className="w- md:w-1/4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Learn More
                    </button>
                </Link>
            </div>
        </div>
        <div 
            className="w-full my-10 bg-center bg-cover"
                style={{
                    backgroundImage: 'url(/images/change_org_team_comet.webp)'
                }}
        >
            <div className="w-full bg-opacity-60 bg-black px-8 md:px-20 pt-20 pb-20">
                <h2 className='font-general-semibold text-2xl lg:text-3xl xl:text-4xl pb-4'>
                    Change.org
                </h2>
                <p className="my-6 text-xl">
                    At Change.org I joined the Product Engineering team to build digital tools that empowered users to scale their petitions and achieve
                    policy victories at both the national and hyper-local levels.
                </p>
                <p className="mb-6 mt-10 text-xl">
                    As part of the Petition Starters squad I worked on major features like Change.org's "Start-A-Petition" flow, the Transactional Email Automation Service, and the Campaign Success program. 
                </p>
                <Link href="/work/change_org">
                    <button className="w- md:w-1/4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Learn More
                    </button>
                </Link>
            </div>
        </div>
        <div 
            className="w-full my-10 bg-center bg-cover"
                style={{
                    backgroundImage: 'url(/images/world_odyssey.webp)'
                }}
        >
            <div className="w-full bg-opacity-50 bg-black px-12 pt-20 pb-20">
                <h2 className='font-general-semibold text-2xl lg:text-3xl xl:text-4xl px-4 pb-4'>
                    Institute for Shipboard Education
                </h2>
                <p className="my-6 text-xl px-4">
                    As a "Youth Trustee" on the Institue for Shipboard Education's Board of Trustees, I served as a representative for the voices of both current and recent voyagers on Semester at Sea.
                </p>
                <p className="mb-6 mt-10 text-xl px-4">
                    Within my purview as a trustee, I served on two primary committees (Marketing/Recruitment and Academic Affairs)) and advised both the ISE board and executive leadership on matters relating to gen-z-focused marketing, diversity and inclusion, COVID-19 policy, and general academic affairs.
                </p>
            </div>
        </div>
    
      <ProjectsGrid />
    </main>
  )
}
