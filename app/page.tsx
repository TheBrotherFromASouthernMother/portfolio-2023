'use client';
import Image from 'next/image'
import AppBanner from 'app/components/AppBanner'
import ProjectsGrid from 'app/components/projects/Grid';
import AboutSection from 'app/components/AboutSection';
import MyWork from 'app/components/MyWork';
import GreenBookOverview from './components/GreenBookOverview';


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
        <div className="w-full bg-opacity-50 bg-black px-12 pt-20 pb-20">
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
    <div 
        className="w-full my-10 bg-center bg-cover"
            style={{
                backgroundImage: 'url(/images/change_org_team_comet.webp)'
            }}
    >
        <div className="w-full bg-opacity-60 bg-black px-12 pt-20 pb-20">
            <h2 className='font-general-semibold text-2xl lg:text-3xl xl:text-4xl px-4 pb-4'>
                 Change.org
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
            The Green Book Project (Nov 2020 - March 2023) was a crowdsourced-reviews platform (think Yelp) that helped people from marginalized groups 
            find inclusive business and avoid common forms of discrimination such sexism, queer phobia, ableism and racism.
            </p>
            <p className="mb-6 mt-10 text-xl px-4">
                Using The Green Book Project, users could rate and review businesses based on their inclusivity and customer service while also adding photos and videos to their reviews and sharing them to
                external social media platforms like Facebook and Twitter.
            </p>
        </div>
    </div>
    
      <ProjectsGrid />
    </main>
  )
}
