// import Link from 'next/link'
import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-4 md:mb-6">
            <div className="shrink-0 mr-4">
              <Logo />
            </div>
          </div>

          <div className="text-center md:flex md:items-center md:justify-between">
            <div className="text-sm font-medium md:order-1 mb-2 md:mb-0">
              <ul className="inline-flex flex-wrap text-sm font-medium">
                <li className="after:content-['·'] last:after:hidden after:text-gray-400 after:px-2">
                  <a className="text-gray-500 hover:text-gray-500 hover:underline" href="#0">
                    Terms
                  </a>
                </li>
                <li className="after:content-['·'] last:after:hidden after:text-gray-400 after:px-2">
                  <a className="text-gray-500 hover:text-gray-500 hover:underline" href="#0">
                    Privacy
                  </a>
                </li>
                <li className="after:content-['·'] last:after:hidden after:text-gray-400 after:px-2">
                  <a className="text-gray-500 hover:text-gray-500 hover:underline" href="#0">
                    Guidelines
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-sm text-gray-500">@Unimelb | All rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
