
export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-[100vh] border border-gray-800 rounded-lg my-4 bg-[#141414]">
      <div className="h-[20vh]">
          placeholder
      </div>
      <div className="mx-auto">
        <div className="font-sans flex flex-col gap-2 mx-8">
          <h1 className="text-5xl">
            Software Developer
          </h1>
          <span className="text-xl text-zinc-400">
            I am Attila, new-grad software developer. Based in The Hague, Netherlands.
          </span>
          <div id="contacts" className="flex mt-6 gap-5">
            <a>
              <img src='/svgs/github-brands-solid.svg' width={50}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
