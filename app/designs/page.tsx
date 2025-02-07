const designs = [
    {
        title: 'IMG_49851.HEIC',
        size: '3.9 MB',
        source: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'IMG_49852.HEIC',
        size: '3.9 MB',
        source: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'IMG_49853.HEIC',
        size: '3.9 MB',
        source:'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
  ]
  
  export default function Desings() {

    return (
      <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 mt-4">
        {designs.map((design) => (
          <li key={design.title} className="relative">
            <div className="group overflow-hidden rounded-lg bg-black focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-black">
              <img
                alt=""
                src={design.source}
                className="aspect-[7/10] object-cover group-hover:opacity-10 group-hover:cursor-pointer"
              />
              <div className="absolute left-[50%] top-[40%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-[1]">Placeholder</div>
            </div>
          </li>
        ))}
      </ul>
    )
  }
