'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import ARROW_ICON from '@/public/svgs/arrow-right-svgrepo-com.svg';
import { MAJOR_TITLE_CONVERTOR } from './constant';

export default function MajorHero() {

  const [lastWord, setLastWord] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathArray = window.location.pathname.split('/').filter(Boolean);
      const currentLastWord = pathArray[pathArray.length - 1] || null;
      setLastWord(currentLastWord);
    }
  }, []);
  const query = lastWord ?? "computer-science"

  return (
    <section className="relative bg-unimelbDarkBlue">
      <div className="max-w-full text-left px-4 sm:px-6 relative">
        <div className="relative pt-12">
          <div className="max-w-6xl text-white text-left pb-12 ml-12 my-6">
            <p className='text-md mb-2'>MAJOR</p>
            <h1 className="h2 font-bold mb-4 py-4">{MAJOR_TITLE_CONVERTOR[query]}</h1>
            <div className='flex items-center gap-2'>
              <Image className='w-6 h-auto' src={ARROW_ICON} alt='arrow' />
              <p className="text-xl">#1 University in Australia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
