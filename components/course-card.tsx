import React from 'react';
import Image from 'next/image';
import { CourseType } from './types';

import LOADING_SCIENCE from '@/public/images/science-loading.png';
import Link from 'next/link';


export default function CourseCard(courseInfo: CourseType) {
  return (
    <div className="col-span-1 bg-white shadow-sm rounded-xl overflow-hidden border-2 border-gray">
      <div className="flex flex-col h-full">

        <div className="relative">
          <Image className="w-full" src={LOADING_SCIENCE} width={301} height={226} alt="Application 21" />
          <div className="absolute top-0 -left-6 mt-4 pr-4 bg-scienceCat z-10">
            <span className="ml-10">{courseInfo.category}</span>
          </div>
        </div>

        <div className="grow flex flex-col p-5">
          <div className="grow">
            <header className="mb-2">
              <h3 className="text-xl text-gray-800 font-semibold mb-1">{courseInfo.title}</h3>
              <div className="text-sm">{courseInfo.location}</div>
            </header>
          </div>
          <div className='flex flex-wrap gap-2'>
            {courseInfo.fields.map((field, idx) => (
              <div className='bg-slate-200 rounded-xl p-2' key={idx}>
                <div className='text-xs text-gray'>
                  {field}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-2 mr-2">
              <div className="inline-flex text-sm font-medium text-yellow-600">{courseInfo.points}</div>
            </div>
          </div>

          <div className="grow">
            <header className="my-2">
              <h3 className="text-md mb-4 text-gray-800 font-semibold mb-1">Full / Part Time Course</h3>
              <Link href={courseInfo.link} className='btn text-white w-full rounded-md bg-unimelbScienceBlue'>Learn More</Link>
            </header>
          </div>
        </div>
      </div>
    </div>
  )
}
