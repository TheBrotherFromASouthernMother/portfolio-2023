import {
	FiGithub,
	FiLinkedin,
	FiMail,
} from 'react-icons/fi';

const socialLinks = [
	{
		key: 1,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/christian-lowe-creator/',
	},
	{
		key: 2,
		icon: <FiMail />,
		url: 'mailto:christglowe@gmail.com?subject=Howdy%2C%20Christian!',
	},
    {
		key: 3,
		icon: <FiGithub />,
		url: 'https://github.com/TheBrotherFromASouthernMother',
	},
];

const AppFooter = (): JSX.Element => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Get in Touch
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
                                rel='noopener noreferrer'
								key={link.key}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>
			</div>
			<div className="font-general-regular flex justify-center items-center text-center pb-8">
				<div className="text-lg text-ternary-dark dark:text-ternary-light">
					<a
						href="https://github.com/TheBrotherFromASouthernMother/portfolio-2023"
						target="__blank"
						className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
					>
						&#x2661; Built with love using Typescript, Next.js, Tailwind CSS &#x2661;
					</a>
				</div>
			</div>
		</div>
	);
}

export default AppFooter;