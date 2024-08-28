import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/unimelb-logo.jpeg'

export default function HeaderLogo() {
  return (
    <Link href="https://www.unimelb.edu.au" aria-label="Unimelb">
      <Image className='w-24 h-auto' src={Logo} aria-label="The University of Melbourne homepage" alt="Unimelb" />
    </Link>
  )
}
