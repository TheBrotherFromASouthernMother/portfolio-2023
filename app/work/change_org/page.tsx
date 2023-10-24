'use client';
import Image from 'next/image';
import Link from 'next/link';

const ChangeOrgPage = (): JSX.Element  => (
    <div>
        <div 
            className="w-full mb-6 bg-center bg-cover"
        >
            <div className="w-full bg-opacity-70 px-12 pt-16 pb-12">
                <h2 className='font-general-semibold text-2xl lg:text-3xl xl:text-4xl px-4 pb-4'>
                    Change.org
                </h2>
                <div className='w-full flex flex-col items-center px-4'>
                    <Image
                        src="/images/change/change_org_office.webp"
                        className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                        alt="The Green Book Project. Find Inclusive Businesses. Avoid Discrimination. Never Feel Out Of Place."
                        width={750}
                        height={750}
                    />
                    <div>
                    <p className='text-xs sm:text-sm pt-2'>
                        Change.org San Francisco Office, October 2018
                    </p>
                    </div>
                </div>
                <p className="mt-10 text-m sm:text-xl px-4">
                    I joined the Change.org team in the summer of 2018, as part of the organization's growth-focused effort to reach net profitability by the end of Q1 of 2019. 
                    Internally referred to as "Octoberfest," this growth effort consisted of launching a series of rapidly-built, high-impact experiments with the goal of increasing either
                    petition creation, user engagement, and/or revenue.
                </p>
                <p className="mt-10 text-m sm:text-xl px-4">
                     As a member of the "Petition Starters" squad, my engineering pod's main areas of responsibility consisted of launching the tech stack for Change.org's Campaign Success program,
                    leading the rewrite of the site's frontend framework from Backbone.js to React via Change.org's <Link className='underline text-indigo-300 hover:text-indigo-100 ml-1 duration-500' target='_blank' rel="noopener noreferrer" href="https://www.change.org/start-a-petition" >"Start-A-Petition" flow</Link>, 
                    and maintaining Change.org's petitions-related microservices written in Ruby on Rails.
                </p>
            </div>
        </div>

        <div className='w-full my-10 px-12'>
            <h2 className='font-general-semibold text-xl lg:text-2xl xl:text-3xl px-4 pb-4'>
                Campaign Success
            </h2>
            <div className='flex flex-col sm:flex-row'>
                <div className="w-full sm:w-1/2">
                        <Image
                            src="/images/change/campaign_success_planning.webp"
                            width={500}
                            height={500}
                            layout='responsive'
                            className="rounded-lg"
                            alt="Change.org's Campaign Success Team offsite planning in late February 2020"
                        />
                        <p className='text-center text-xs sm:text-sm pt-2'>
                            Change.org's Campaign Success Team offsite planning in late February 2020
                        </p>
                </div>
                <div className="w-full sm:w-1/2 sm:pl-4">
                    <p className="my-6 text-m sm:text-xl px-4">
                        The<Link className='underline text-indigo-300 hover:text-indigo-100 ml-1 duration-500' target='_blank' rel="noopener noreferrer" href="https://medium.com/making-change-org/introducing-the-campaign-success-program-46d3cc3bf445">Campaign Success program</Link> was a major productive initiative launched by Change.org in early 2020 which aimed to increase petition victories by offering
                        Change.org users real-time coaching and feedback via SMS-based conversations with Change.org staff.
                    </p>
                    <p className="mb-6 mt-10 text-m sm:text-xl px-4">
                        As an early engineer working on the Campaign Success program, I worked closely with Change.org executive staff such as the Chief Product Officer and 
                        Chief Marketing Officer to plan, develop, and launch the initial pilot.
                    </p>
                    <p className="mb-6 mt-10 text-m sm:text-xl px-4">
                        Within 90 days of our product launch, the Campaign Success program served over 4,000 petitions per week, leading to a staggering 20% increase in weekly petition victories.  
                    </p>
                </div>
            </div>
        </div>

        <div 
            className="w-full my-6 bg-center bg-cover"
                style={{
                    backgroundImage: 'url(/images/change_org_team_comet.webp)'
                }}
        >
            <div className="w-full bg-opacity-80 bg-black px-12 md:px-20 pt-16 pb-12">
                <h2 className='font-general-semibold text-2xl lg:text-3xl xl:text-4xl px-4 pb-4'>
                    "Reactification" of Change.org
                </h2>
                <p className="my-6 text-m sm:text-xl px-4">
                    The Change.org frontend was originally built using a lesser-known frontend framework called <Link className='underline text-indigo-300 hover:text-indigo-100 ml-1 duration-500' target='_blank' rel="noopener noreferrer" href="https://github.com/rendrjs/rendr">Rendr.js</Link> (an extension of Backbone.js).
                </p>
                <p className="mb-6 mt-10 text-m sm:text-xl px-4">
                    As the Change.org frontend scaled from hundreds of views to tens of thousands and the complexity of the platform's frontend increased in size, it became apparent that Change.org would need to adopt a new frontend framework that could better
                    represent the complexity of its UI hierarchy and improve on-page performance for users.
                </p>
                <p className="mb-6 mt-10 text-m sm:text-xl px-4">
                    Because of this, the Petition Starter's engineering pod (known internally as "Comet Squad") was tasked with leading the adoption of React, starting with Change.org's most important feature surface. The "Start-A-Petition" flow.
                </p>
                <p className="mb-6 mt-10 text-m sm:text-xl px-4">
                    This implementation required a massive yet gradual rewrite of the SAP flow, starting with opportunistic refactors and progressing to complete feature rewrites over a 1-year period. Within 3 months of our first rewrites, the "reactification" of the SAP flow reduced the number of production
                    bugs within Comet Squad's AO by half, and led to a whopping 70% increase in petition completion rates by users.
                </p>
            </div>
        </div>
    </div>
);

export default ChangeOrgPage;