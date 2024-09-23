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
        <Link href='/science'>
          <Image className="inset-0 w-full h-full-z-30" src={UNIMELB_MAIN} priority alt="Unimelb" />
        </Link>
      </section>
    </div>

  )
}