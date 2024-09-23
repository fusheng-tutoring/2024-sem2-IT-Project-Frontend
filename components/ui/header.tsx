import Link from 'next/link';
import Logo from '@/components/ui/logo';

export default function Header() {
  return (
    <header className="absolute w-full z-30 bg-unimelbBlue">
      <div className="flex items-center justify-between">

        <div className="shrink-0 mr-4">
          <Logo />
        </div>

        <nav className="flex grow">
          <ul className="flex grow justify-end flex-wrap items-center">
            <li>
              <div className="text-sm font-medium text-white px-3 lg:px-5 py-2 flex items-center">
                Study with us
              </div>
            </li>
            <li>
              <div className="text-sm font-medium text-white px-3 lg:px-5 py-2 flex items-center">
                Student life
              </div>
            </li>
            <li>
              <div className="text-sm font-medium text-white px-3 lg:px-5 py-2 flex items-center">
                Accommodation
              </div>
            </li>
            <li>
              <div className="text-sm font-medium text-white px-3 lg:px-5 py-2 flex items-center">
                Contact and suport
              </div>
            </li>
            <li className='b-2 b-white b-l'>
              <div className="text-sm font-medium text-white px-3 lg:px-5 py-2 flex items-center">
                Sign in
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
