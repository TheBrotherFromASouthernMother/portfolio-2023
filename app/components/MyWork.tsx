'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MyWork = (): JSX.Element => (
    <div>
        <motion.div
		    initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="w-full p-12"
		>
            <h2 id="work" className='font-general-semibold text-2xl lg:text-3xl xl:text-4xl px-4'>
                 My work
            </h2>
            <div 
            className="w-full block flex flex-col sm:flex-row sm:gap-10 mt-10"
            >
                <div className="w-full sm:w-1/3 mb-7 sm:mb-0 ">
                    <Image
                        src="/images/desmond_tutu_me.webp"
                        width={200}
                        height={200}
                        layout='responsive'
                        className="rounded-lg"
                        alt="Profile Image"
                    />
                    <p className='text-center text-sm'>
                        Me with the late Archbishop Desmond Tutu at his Cape Town home in late
                        March, 2016.
                    </p>
                </div>
                <div className="font-general-regular w-full sm:w-3/4 text-left px-8 pt-10">
                <p
                    className="mb-4 text-ternary-dark dark:text-ternary-light text-lg md:text-xl"
                >
                    My work has taken me to a lot of places so you might have stumbled across me before, whether that was in a 
                    <a 
                    href="https://www.nationalgeographic.com/travel/article/new-digital-tools-are-helping-travelers-avoid-discrimination"
                    target="__blank"
					rel='noopener noreferrer'
                    className="underline text-indigo-300 hover:text-indigo-100 ml-1 duration-500"
                    >
                        National Geographic Article
                    </a> on new tools for minority travelers, The Institute for Shipboard Education's
                    <a 
                        href="/files/spring_2022_shipmates_magazine.pdf" 
                        target="__blank" 
                        className="underline text-indigo-300 hover:text-indigo-100 ml-1 duration-500"
                    >
                        "Shipmates" magazine
                    </a>, on a podcast for 
                    <a 
                        href="https://podcasts.apple.com/us/podcast/yng-blk-hr/id1492151743?i=1000543385461"
                        target="__blank"
                        rel='noopener noreferrer'
                        className="underline text-indigo-300 hover:text-indigo-100 ml-1 duration-500"
                    >
                        Human Resource professionals,
                    </a> and even web publications like 
                    <a 
                        href="https://canvasrebel.com/meet-christian-lowe/" 
                        target="__blank" 
                        className="underline text-indigo-300 hover:text-indigo-100 ml-1 duration-500"
                    >
                        CanvasRebel
                    </a> and 
                    <a
                        href="https://peopleofcolorintech.com/front/meet-the-software-engineer-pushed-by-his-own-scary-experiences-of-racism-while-travelling-that-created-an-app-to-combat-this-issue/" 
                        target="__blank" 
                        className="underline text-indigo-300 hover:text-indigo-100 ml-1 duration-500"
                    >
                        People of Color in Tech
                    </a>.
                </p>
                <p className='mt-10 text-ternary-dark dark:text-ternary-light text-lg md:text-xl'>
                    Though software development is my bread and butter, I'm a huge people person and a life-long learner and I do my best work when I'm surrounded
                    by thoughtful individuals working on something impactful.
                </p>
			    </div>
            </div>
		</motion.div>
    </div>
);

export default MyWork;