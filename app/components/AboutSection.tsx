'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';


const About = (): JSX.Element => (
    <div>
        <motion.div
		    initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="w-full mx-auto bg-center bg-cover bg-top"
            style={{
                backgroundImage: 'url(/images/houston_art_eado_me.webp)'
            }}
		>
            <div className="w-full bg-opacity-60 bg-black block flex-col sm:gap-10 mt-10 sm:mt-20 justify-center px-12 py-24">
                <div>
                <h2 id="#about" className='font-general-bold text-2xl lg:text-3xl xl:text-4xl'>
                    About Me
                </h2>
                </div>
                <div className="font-general-regular w-full sm:w-3/4 text-left my-8">
                    <p className='font-general-semibold text-2l lg:text-2xl xl:text-3xl text-ternary-dark dark:text-primary-light'>
                        I'm a former technical startup founder, a social entrepreneur, and a Full Stack Software Engineer with over 5 years of experience building user-obsessed products.
                    </p>
			    </div>
                <div className="font-general-regular w-full sm:w-3/4 text-left mt-12 mb-4">
                    <p className='font-general-semibold text-2l lg:text-2xl xl:text-3xl text-ternary-dark dark:text-primary-light'>
                        I'm passionate about building tech products that revolutionize the way humans interact with the digital world in both our professional and personal lives.
                    </p>
			    </div>
            </div>
		</motion.div>
    </div>
);

export default About;