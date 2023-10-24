import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from 'app/types';

const imageStyle = { maxWidth: '100%', height: 'auto' };

const GridTile = ({ id, img, title, category }: Project): JSX.Element => {
	return (
		<motion.div
			key={id}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link
				href="/projects/[id]"
				as={`/projects/${id}`}
				aria-label="Single Project"
				passHref
			>
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<Image
							src={img}
							className="rounded-t-xl border-none"
							alt="Single Project"
							width={500}
							height={500}
							objectFit="fill"
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default GridTile;