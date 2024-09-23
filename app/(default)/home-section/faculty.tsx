'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Import Images
import SCIENCE from '@/public/images/science-0.png';
import UNIMELB_MAIN from '@/public/images/unimelb-main.png';
import UNIMELB_OTHERS from '@/public/images/unimelb-others.png';

export default function faculty() {
  return (
    <div>
      <section className='relative'>
        <Image className="w-full h-full object-cover" src={UNIMELB_OTHERS} priority alt="Unimelb" />
      </section>
      <section className='relative'>
        <Image className="inset-0 w-full h-full-z-30" src={UNIMELB_MAIN} priority alt="Unimelb" />

        <Link href='/science'>
          <Image className='absolute scale-125 mr-72 mt-10 right-64 top-64 opacity-80 hover:animate-pulse transition-opacity duration-500 z-10' src={SCIENCE} alt='UNIMELB SCIENCE' />
        </Link>
      </section>
    </div>

  )
}