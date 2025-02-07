import Projects from "./projects/page";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-40 h-[100vh]">
      <div className="mx-auto">
        <div className="font-sans flex flex-col gap-2 mx-8">
          <div className="flex items-center gap-4">
            <span className="inline-flex size-24 items-center justify-center rounded-full bg-gray-500">
              <span className="text-xl font-medium text-white">TW</span>
            </span>
            <div>
              <h1 className="text-5xl">
                Attila Birke
              </h1>
              <h3 className="text-2xl">
                Software Developer
              </h3>
            </div>
          </div>
          <span className="text-xl text-zinc-400 mt-6">
            I am Attila, new-grad software developer. On the side, I do web designs.<br/>
            Based in The Hague, Netherlands.
          </span>
          <div id="contacts" className="flex mt-6 gap-5">
            <a href="https://github.com/biatbe" target="_blank">
              {/* <AiFillGithub size={40} className="text-[#a1a1aa] hover:text-[#313131] hover:cursor-pointer"/> */}
              <span className="text-xl text-[#a1a1aa] hover:text-[#313131] hover:cursor-pointer">
                GitHub
              </span>
            </a>
            <a href="https://linkedin.com/in/attila-birke-927935223" target="_blank">
              {/* <AiFillLinkedin size={40} className="text-[#a1a1aa] hover:text-[#313131] hover:cursor-pointer"/> */}
              <span className="text-xl text-[#a1a1aa] hover:text-[#313131] hover:cursor-pointer">
                LinkedIn
              </span>
            </a>
            <a href="mailto:attilabirke@gmail.com">
              {/* <AiOutlineMail size={40} className="text-[#a1a1aa] hover:text-[#313131] hover:cursor-pointer"/> */}
              <span className="text-xl text-[#a1a1aa] hover:text-[#313131] hover:cursor-pointer">
                Email
              </span>
            </a>
            <a href="/Resume_2025.pdf" target="_blank">
              {/* <AiOutlineMail size={40} className="text-[#a1a1aa] hover:text-[#313131] hover:cursor-pointer"/> */}
              <span className="text-xl text-[#a1a1aa] hover:text-[#313131] hover:cursor-pointer">
                Resume
              </span>
            </a>
          </div>
        </div>
        <div className="font-sans flex flex-col gap-2 mx-8 mt-12">
          <h2 className="text-xl text-[#ffffff]">Projects</h2>
          <Projects />
        </div>
      </div>
    </div>
  );
}
