'use client'

import React from 'react';
import Image from 'next/image';

// Import Images
import ARROW_ICON from '@/public/svgs/arrow-right-svgrepo-com.svg';
import HOME_ICON from '@/public/svgs/home-house-svgrepo-com.svg';
import UNIMELB from '@/public/images/unimelbview.png';

export default function AboveHomeHero() {
  return (
    <section className='relative bg-unimelbTeal'>
      <div className='mt-8 py-2'>
        <div className="text-left ml-6">
          <ul className="inline-flex flex-wrap text-sm font-medium">
            <li className="flex items-center gap-2">
              <Image className='w-4 h-auto' src={HOME_ICON} alt='home' />
              <div className="text-white">Study</div>
              <svg className="fill-current text-white mx-3" width="16" height="16" viewBox="0 0 16 16">
                <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
              </svg>
            </li>
            <li className="flex items-center">
              <div className="text-white">Study with us</div>
              <svg className="fill-current text-white mx-3" width="16" height="16" viewBox="0 0 16 16">
                <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
              </svg>
            </li>
            <li className="flex items-center">
              <div className="text-white">Faculty and Programmes</div>
            </li>
          </ul>
        </div>
      </div>
      <Image className="w-full h-full object-cover" src={UNIMELB} priority alt="Unimelb" />
      <div className='py-6'>
        <div className="text-center mx-auto">
          <div className='inline-flex text-xl text-white mr-10 gap-4'>
            <div className='text-xl'>How can we help?</div>
          </div>
          <ul className="inline-flex flex-wrap text-sm font-medium gap-4">
            <li className="flex items-center gap-2">
              <Image className='w-4 h-auto' src={ARROW_ICON} alt='home' />
              <div className="text-white">Find programs</div>
            </li>
            <li className="flex items-center gap-2">
              <Image className='w-4 h-auto' src={ARROW_ICON} alt='home' />
              <div className="text-white">How to apply</div>
            </li>
            <li className="flex items-center gap-2">
              <Image className='w-4 h-auto' src={ARROW_ICON} alt='home' />
              <div className="text-white">Support centre</div>
            </li>
            <li className="flex items-center gap-2">
              <Image className='w-4 h-auto' src={ARROW_ICON} alt='home' />
              <div className="text-white">Contact us</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
