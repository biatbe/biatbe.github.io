
const projects = [
  {
    id: 1,
    name: 'GoMedFlow',
    imageUrl: '',
    techStack: ['Next.js', 'SQLite', 'Prisma', 'Tailwind'],
    description: 'Web application for the RDGG hospital based on the concept of GoMedFlow, which will help hospital workers build care processes.',
    link: ''
  },
  {
    id: 2,
    name: 'Price App',
    imageUrl: '',
    // imageUrl: '/N4C_Logo.png',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind', 'NextAuth'],
    description: 'Deployed a Next.js application on Vercel which Network4Cars currently use. The application lets users manage car data for different countries and automatically update car prices (daily) based on third-party data.',
    link: ''
  },
  {
    id: 3,
    name: 'hBFT protocol testing',
    imageUrl: '',
    techStack: ['Java', 'Next.js'],
    description: 'Implemented hBFT protocol. Tested it with a new automated testing algorithm, called ByzzFuzz. This contributed to a new framework, ByzzBench. Code is closed-source for now, but will become open-source.',
    link: ''
  },
  {
    id: 4,
    name: 'Discount aggregator',
    imageUrl: '',
    techStack: ['Flask', 'Next.js'],
    description: 'Currently in works. Developing a web application for displaying clothing brand discounts. Instead of having to check every clothing brand\'s site for discounts, with this app you can see them at one place and compare them.',
    link: 'https://github.com/biatbe/Discount-aggregator'
  },
]

export default function Projects() {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans mt-4">
            {projects.map((project) => (
            <div 
                key={project.id}
            >
                <a className="group flex flex-col overflow-hidden rounded-xl border border-black dark:border-zinc-400 hover:cursor-pointer" href={project.link} target="_blank">
                    <div className="flex items-center justify-between p-2 px-6 group-hover:border-b border-black dark:border-zinc-400/70 group-hover:bg-zinc-300/25 dark:group-hover:bg-zinc-700/25 transition-all duration-700 ease-in-out">
                        <div className="text-[12px] sm:text-[15px] font-medium dark:font-normal dark:text-zinc-200">{project.name}</div>
                        {project.imageUrl ?
                            <img
                                alt={project.name}
                                src={project.imageUrl}
                                className="size-12 flex-none rounded-lg "
                            />
                            :
                            <div
                                className="size-12 flex-none rounded-lg "
                            />
                        }
                    </div>
                    <div id={project.id.toString()} className="flex flex-col justify-between gap-x-4 max-h-0 px-3 transition-all duration-700 ease-in-out group-hover:bg-zinc-300/25 dark:group-hover:bg-zinc-700/25 group-hover:max-h-80 group-hover:py-2 group-hover:cursor-pointer">
                        <dt className="text-black dark:text-zinc-200 font-medium dark:font-normal">
                            Tech stack: {project.techStack.join(", ")}
                        </dt>
                        <dt className="text-gray-500 dark:text-gray-500 mt-2 font-medium dark:font-normal">
                            {project.description}
                        </dt>
                    </div>
                </a>
            </div >
            ))}
        </div> 
    )
}
