import Designs from "./designs/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 sm:pt-20 pt-10">
      <div className="mx-auto">
        <div className="font-sans flex flex-col gap-2 sm:mx-8 mx-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex size-24 items-center justify-center rounded-full bg-gray-500">
              <span className="text-xl font-medium text-white">TW</span>
            </span>
            <div>
              <h1 className="text-2xl sm:text-5xl dark:text-zinc-200">
                Attila Birke
              </h1>
              <h3 className="text-xl sm:text-2xl dark:text-zinc-200">
                Software Developer
              </h3>
            </div>
          </div>
          <span className="font-medium sm:text-xl dark:font-normal text-black dark:text-zinc-200 mt-6">
            I am Attila, new-grad software developer. On the side, I do web designs.<br/>
            Based in The Hague, Netherlands.
          </span>
          <div id="contacts" className="flex mt-6 gap-5 sm:text-xl font-semibold dark:font-normal text-gray-500 dark:text-[#a1a1aa] ">
            <a href="https://github.com/biatbe" target="_blank">
              <span className="hover:cursor-pointer hover:text-gray-400/50 dark:hover:text-[#313131]">
                GitHub
              </span>
            </a>
            <a href="https://linkedin.com/in/attila-birke-927935223" target="_blank">
              <span className="hover:cursor-pointer hover:text-gray-400/50 dark:hover:text-[#313131]">
                LinkedIn
              </span>
            </a>
            <a href="mailto:attilabirke@gmail.com">
              <span className="hover:cursor-pointer hover:text-gray-400/50 dark:hover:text-[#313131]">
                Email
              </span>
            </a>
            <a href="/Resume_2025.pdf" target="_blank">
              <span className="hover:cursor-pointer hover:text-gray-400/50 dark:hover:text-[#313131]">
                Resume
              </span>
            </a>
          </div>
        </div>
        <div className="font-sans flex flex-col gap-2 sm:mx-8 mx-2 mt-12">
          <h2 className="sm:text-xl dark:text-[#ffffff] font-medium dark:font-normal">Projects</h2>
          <Projects />
        </div>
        <div className="font-sans flex flex-col gap-2 sm:mx-8 mx-2 mt-12">
          <h2 className="sm:text-xl dark:text-[#ffffff] font-medium dark:font-normal">Designs</h2>
          <Designs />
        </div>
      </div>
    </div>
  );
}
