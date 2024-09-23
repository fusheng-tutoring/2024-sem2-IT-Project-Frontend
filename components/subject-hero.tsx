'use client'

import React from 'react';
import Image from 'next/image';

import ARROW_ICON from '@/public/svgs/arrow-right-svgrepo-com.svg';

export default function SubjectHero() {
  return (
    <section className="relative bg-subjectBackground">
      <div className="max-w-full text-left px-4 sm:px-6 relative">
        <div className="relative pt-12">
          <div className="max-8xl text-white text-left pb-12 ml-12 my-6">
            <div className="flex justify-around items-start">
              <div>
                <h1 className="h3 font-bold mb-4 py-4">Algorithms and Data Structures (COMP20003)</h1>
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
