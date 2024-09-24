'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import TEMP_TREE_DIAGRAM from '@/public/images/tre-diagram.jpeg';

export default function Subject() {

  return (
    <section className="relative flex-1">
      <div className="max-w-5xl mt-16 mx-auto">
        <div className='mx-auto text-left max-w-2xl'>
          <div className='h3 font-bold text-black mb-8'>Eligibility and requirements</div>
          <div className='h4 mb-8'>Prerequisites</div>
          <div className='h5 mb-16'>Students must meet one of the following prerequisite options:</div>

          <div className='h5 mb-8'>Option 1</div>
          <div className='text-sm mb-8'>Admission into the MC-SOFTENG Master of Software Engineering</div>

          <div className='h5 mb-8'>Option 2</div>
          {/* Diagram */}
          <Image className='w-full h-auto' src={TEMP_TREE_DIAGRAM} alt='Unimelb-Subject' priority></Image>

          <div className='h4 mb-8'>Corequisites</div>
          <div className='h5 mb-8'>None</div>

          <div className='max-w-2xl'>
            <div className='h4 mb-8'>Inherent requirements (core participation requirements)</div>
            <div className='h5 mb-8 break-words'>
              The University of Melbourne is committed to providing students with reasonable
              adjustments to assessment and participation under the Disability Standards
              for Education (2005), and the
              <Link className='text-unmielbScienceBlue underline hover:no-underline' href="https://policy.unimelb.edu.au/MPF1326/#section-4.30" target="_blank" rel="noopener">
                Assessment and Results Policy (MPF1326)
              </Link>.
              Students are expected to meet the core participation requirements
              for their course. These can be viewed under Entry and Participation
              Requirements for the course outlines in the Handbook.
            </div>

            <div className='mb-16'>
              Further details on how to seek academic adjustments can be found on the Student
              Equity and Disability Support website: <Link className='text-unimelbScienceBlue underline hover:no-underline' href="http://services.unimelb.edu.au/student-equity/home" target="_blank" rel="noopener">http://services.unimelb.edu.au/student-equity/home</Link>
            </div>
          </div>
        </div>

        <div className='mb-16 flex justify-between mx-16'>
          <Link className='inline-flex justify-between p-4 rounded-md text-unimelbScienceBlue border-2 border-unimelbScienceBlue' href="https://handbook.unimelb.edu.au/2024/subjects/comp20003" target="_blank" rel="noopener">
            <svg className="fill-current mx-3 my-auto rotate-180" width="16" height="16" viewBox="0 0 16 16">
              <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
            </svg>
            <span>
              Prev: Overview
            </span>
          </Link>
          <Link className='inline-flex justify-between p-4 rounded-md text-unimelbScienceBlue border-2 border-unimelbScienceBlue' href="https://handbook.unimelb.edu.au/2024/subjects/comp20003/assessment" target="_blank" rel="noopener">
            <span>
              Next: Assessment
            </span>
            <svg className="fill-current mx-3 my-auto" width="16" height="16" viewBox="0 0 16 16">
              <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
            </svg>
          </Link>
        </div>

        <div className='text-sm mb-16 mx-auto max-w-2xl'>
          Last updated: 01 September 2024
        </div>
      </div>
    </section>

  )
}
