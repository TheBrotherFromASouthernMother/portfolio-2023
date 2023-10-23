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
                    I joined the Change.org team in the summer of 2018, as part of the organization's growth focused effort nterally referred to as "Octoberfest."
                    As a member of the "Petition Starters" squad, my engineering pod's main areas of responsibility consisted of overhauling the user experience for Change.org's <Link className='underline text-indigo-300 hover:text-indigo-100 ml-1 duration-500' target='_blank' rel="noopener noreferrer" href="https://www.change.org/start-a-petition" >"Start-A-Petition" flow</Link>, implementing a 
                    comprehensive SEO strategy to drive site traffic, and maintaining the dedicated petitions microservices.
                </p>
                <p className="mt-10 text-m sm:text-xl px-4">
                    In addition to my team's dedicated engineering work, I worked on a variety of additional initiatives at Change.org such as the Campaign Success Program, the Change.org Fellowship, and Change.org's Racial Justice Fund. 
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
                        <p className='text-center text-xs sm:text-sm'>
                            Change.org's Campaign Success Team offsite planning in late February 2020
                        </p>
                </div>
                <div className="w-full sm:w-1/2 sm:pl-4">
                    <p className="my-6 text-m sm:text-xl px-4">
                        The Campaign Success program was a major productive iniative launched in early 2020 which aimed to increase petition victories by offering
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
    </div>
);

export default ChangeOrgPage;