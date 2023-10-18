'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GreenBook from 'app/components/projects/GreenBook';

const MyWork = (): JSX.Element => (
    <div>
        <motion.div
		    initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="w-full p-12"
		>
            <h2 className='font-general-semibold text-2xl lg:text-3xl xl:text-4xl px-4'>
                 My work
            </h2>
            <div 
            className="w-full block flex flex-col sm:flex-row sm:gap-10 mt-10 items-center"
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
                </div>
                <div className="font-general-regular w-full sm:w-3/4 text-left px-12 items-center">
                <p
                    className="mb-4 text-ternary-dark dark:text-ternary-light text-lg md:text-xl"
                >
                    My work has taken me to a lot of places so you might have stumbled across me before, whether that was in a National Geographic Article on new tools for minority travelers,
                    The Institute for Shipboard Education's "Shipmates" magazine, on a podcast for Human Resource professionals, and even web publications like CanvasRebel and People of Color in Tech.
                </p>
			    </div>
            </div>
		</motion.div>
    </div>
);

export default MyWork;