import Link from 'next/link'
import Image from 'next/image'
import LOGO from '@/public/images/unimelb-logo.jpeg'

export default function Logo() {
  return (
    <Link href="https://www.unimelb.edu.au" aria-label="Unimelb">
      <Image className='w-24 h-auto' src={LOGO} aria-label="The University of Melbourne homepage" alt="Unimelb" />
    </Link>
  )
}
