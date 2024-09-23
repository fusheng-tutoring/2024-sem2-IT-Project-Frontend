// import Link from 'next/link'
import Logo from './logo'

export default function Footer() {
  return (
    <footer className='bg-unimelbBlue'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-4 md:mb-6">
            <div className="shrink-0 mr-4">
              <Logo />
            </div>
          </div>

          <div className="text-sm text-white">@Unimelb | All rights reserved</div>
        </div>
      </div>
    </footer>
  )
}
