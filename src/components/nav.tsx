'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function Nav() {
  const path = usePathname()

  const links = [
    {
      path: '/',
      text: 'Just Me',
    },
    {
      path: '/about',
      text: 'Resume',
    },
    {
      path: '/projects',
      text: 'Portfolio',
    },
    {
      path: '/activities',
      text: 'Highlights',
    },
  ]

  return (
    <div className="fixed left-0 top-5 z-50 w-full">
      <nav className="mx-auto flex w-max gap-5 rounded-base border-2 border-black bg-main p-2.5 px-5 text-sm font-base shadow-base sm:text-base">
        {links.map((link) => {
          return (
            <Link
              key={link.path}
              className={clsx(
                'rounded-base border-2 px-2 py-1 transition-colors hover:border-black',
                path === link.path ? 'border-black' : 'border-transparent',
              )}
              href={link.path}
            >
              {link.text}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
