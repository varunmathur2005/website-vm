import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
}

export function Navbar() {
  return (
    <aside className="sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
      <nav
        className="flex flex-row items-center px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 py-3 md:py-4"
        id="nav"
      >
        <div className="flex flex-row space-x-0.5 sm:space-x-1">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-2 px-3 sm:px-4 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-md text-sm sm:text-base"
              >
                {name}
              </Link>
            )
          })}
        </div>
      </nav>
    </aside>
  )
}
