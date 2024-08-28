// import Link from 'next/link'
import HeaderLogo from '@/components/ui/header-logo'

export default function Header() {
  return (
    <header className="absolute w-full z-30 bg-unimelbBlue">
      <div className="flex items-center justify-between">

        <div className="shrink-0 mr-4">
          <HeaderLogo />
        </div>

        <nav className="flex grow">
          {/* <ul className="flex grow justify-end flex-wrap items-center">
            <li>
              <Link className="text-sm font-medium text-indigo-500 hover:underline px-3 lg:px-5 py-2 flex items-center" href="/signin">
                Sign in
              </Link>
            </li>
          </ul> */}
        </nav>
      </div>
    </header>
  )
}
