'use client';
import { motion } from 'framer-motion';
import GreenBook from 'app/components/projects/GreenBook';

const MyWork = (): JSX.Element => (
    <div>
        <motion.div
		    initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="w-full mx-auto p-12"
		>
            <div 
            className="w-full block flex sm:gap-10 mt-10 sm:mt-20"
            >
                <h2 className='font-general-semibold text-2xl lg:text-3xl xl:text-4xl'>
                    My Work
                </h2>
                <div className="font-general-regular w-full sm:w-3/4 text-left p-16">
                <p
                    className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.
                </p>
			    </div>
            </div>
		</motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full mx-auto p-12"
        >
            <GreenBook />
        </motion.div>
    </div>
);

export default MyWork;