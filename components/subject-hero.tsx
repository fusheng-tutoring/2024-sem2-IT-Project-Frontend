'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ARROW_ICON from '@/public/svgs/arrow-right-svgrepo-com.svg';

import { Subject } from './types';
import Link from 'next/link';

export default function SubjectHero({ getLoading, getData }: { getLoading: boolean, getData: Subject }) {

  const [lastWord, setLastWord] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLastWord = localStorage.getItem("lastWord");
      setLastWord(storedLastWord);
    }
  }, []);

  return (
    <section className="relative bg-subjectBackground">
      <div className="max-w-full text-left px-4 sm:px-6 relative">
        <div className="relative pt-12">
          <Link href={`/science/${lastWord}`} className='bg-unimelbDarkBlue text-white px-4 py-2 mt-6 ml-0 rounded-xl'>Back</Link>
          <div className="max-8xl text-white text-left pb-12 ml-12 mt-6">
            <div className="flex justify-around items-start">
              <div>
                {(getLoading)
                  ?
                  <div className='mb-4 py-4 px-16 animate-pulse bg-slate-400 rounded-xl' />
                  :
                  <h1 className="h3 font-bold mb-4 py-4">{`${getData?.subjectName} (${getData?.subjectCode})`}</h1>
                }
                <div className="flex items-center gap-2">
                  <Image className="w-6 h-auto" src={ARROW_ICON} alt="arrow" />
                  <p className="text-xl">Eligibility and requirements</p>
                </div>
              </div>

              <div className="text-right">
                <p>You&apos;re viewing the 2024 Handbook: </p>
                <select className="w-full bg-subjectBackground" title="year">
                  <option>2024</option>
                </select>
                <p className='text-left'>Or view archived Handbooks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
