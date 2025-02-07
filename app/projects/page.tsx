
const projects = [
  {
    id: 1,
    name: 'GoMedFlow',
    imageUrl: 'https://tailwindui.com/plus/img/logos/48x48/tuple.svg',
    techStack: ['Next.js', 'SQLite', 'Prisma', 'Tailwind'],
    description: 'Web application for the RDGG hospital based on the concept of GoMedFlow, which will help hospital workers build care processes.',
    link: ''
  },
  {
    id: 2,
    name: 'Price App',
    imageUrl: '/N4C_Logo.png',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
    description: '',
    link: ''
  },
  {
    id: 3,
    name: 'hBFT protocol testing',
    imageUrl: '',
    techStack: ['Java', 'Next.js'],
    description: '',
    link: ''
  },
]

export default function Projects() {

    return (
        <div className="flex gap-x-4 font-sans max-h-60 mt-4">
            {projects.map((project) => (
            <div 
                key={project.id}
                className="group hover:cursor-pointer w-[33%]"
            >
                <div className="flex flex-col overflow-hidden rounded-xl border border-zinc-400">
                    <div className="flex items-center justify-between border-b border-gray-900/5 p-2 px-6 group-hover:bg-zinc-700/25 transition-all duration-700 ease-in-out">
                        <div className="text-sm/6 font-medium text-zinc-200">{project.name}</div>
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
                    <div id={project.id.toString()} className="flex flex-col justify-between gap-x-4 max-h-0 px-3 transition-all duration-700 ease-in-out group-hover:bg-zinc-700/25 group-hover:max-h-60 group-hover:py-2 group-hover:cursor-pointer">
                        <dt className="text-zinc-200">
                            Tech stack: {project.techStack.join(", ")}
                        </dt>
                        <dt className="text-gray-500 mt-2">
                            {project.description}
                        </dt>
                    </div>
                </div>
            </div >
            ))}
        </div> 
    )
}
