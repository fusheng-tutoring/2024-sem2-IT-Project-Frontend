import Link from 'next/link'
import Image from 'next/image'
import LOGO from '@/public/images/unimelb-logo.jpeg'

export default function Logo({ toggle, size }: { toggle: boolean, size?: string }) {
  return (
    <Link href={toggle ? "https://www.unimelb.edu.au" : "/"} aria-label="Unimelb">
      <Image className={`${size === "lg" ? "w-32" : "w-24"} h-auto`} src={LOGO} aria-label="The University of Melbourne homepage" alt="Unimelb" />
    </Link>
  )
}
