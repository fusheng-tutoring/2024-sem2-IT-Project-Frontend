'use client'

import React from 'react';

import { MajorType } from './types';
import Link from 'next/link';

export default function MajorCard(MajorInfo: MajorType) {

  function handleClick() {
    localStorage.setItem("subjectCode", MajorInfo.subjectPreviewCode);
  }

  return (
    <div className="w-full bg-white shadow-lg rounded-md border-l-8 border-blue-100">
      <div className="flex p-5 h-full">
        <div className="flex flex-col grow gap-6">
          <div className="flex flex-1 flex-wrap gap-4">
            <Link onClick={handleClick} href="/subject" className="text-xl text-gray-800 font-semibold">{MajorInfo.subjectPreviewName}</Link>
            <div className="text-sm mt-2">{MajorInfo.subjectPreviewCode}</div>
          </div>
          <div className='flex flex-1'>
            Offered&nbsp;
            {MajorInfo.subjectPreviewOfferedSemesters.map((sem, index) => (
              <div key={index} className='text-slate-800'>{sem}</div>
            ))}
          </div>
        </div>

        <div className='flex flex-col grow ml-auto justify-between'>
          <div className='flex gap-4 justify-end'>
            <div className="text-md rounded-md p-1 mb-4 border-2 border-requisites text-requisites text-center mb-1">Requisites Apply</div>
            <div className="text-md rounded-md p-1 mb-4 border-2 border-blue text-unimielbBlue text-center mb-1">Subject</div>
          </div>
          <div className='flex justify-end'>
            <div className='text-gray'>{MajorInfo.subjectPreviewLevel}</div>
            <div className='text-gray'>, {MajorInfo.subjectPreviewCreditPoints} credit points</div>
          </div>
        </div>
      </div>
    </div>
  )
}
