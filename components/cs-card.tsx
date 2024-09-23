'use client'

import React from 'react';

import { CSType } from './types';
import Link from 'next/link';


export default function CSCard(CSInfo: CSType) {
  return (
    <div className="w-full bg-white shadow-lg rounded-md border-2 border-gray">
      <div className="flex p-5 h-full">
        <div className="flex flex-col grow gap-6">
          <div className="flex flex-1 flex-wrap gap-4">
            <Link href="/subject" className="text-xl text-gray-800 font-semibold">{CSInfo.name}</Link>
            <div className="text-sm mt-2">{CSInfo.code}</div>
          </div>
          <div className='flex flex-1'>
            Offered&nbsp;
            {CSInfo.offeredSemesters.map((sem, index) => (
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
            <div className='text-gray'>{CSInfo.level}</div>
            <div className='text-gray'>, {CSInfo.creditPoints} credit points</div>
          </div>
        </div>
      </div>
    </div>
  )
}
