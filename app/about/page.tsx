'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = (): JSX.Element => (
    <div>
        <motion.div
		    initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="container mx-auto"
		>
            <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
                <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
                    <Image
                        src="/images/profile.jpg"
                        width={200}
                        height={200}
                        layout='responsive'
                        className="rounded-lg"
                        alt="Profile Image"
                    />
                </div>
                <div className="font-general-regular w-full sm:w-3/4 text-left">
                <p
                    className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.
                </p>
			    </div>
            </div>
		</motion.div>
    </div>
);

export default About;