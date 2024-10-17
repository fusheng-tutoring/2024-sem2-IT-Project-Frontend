'use client'

import React from 'react';
import Link from 'next/link';

import { Subject } from './types';
import LoadingSpinner from './loading';

export default function SubjectSidebar({ getLoading, getData }: { getLoading: boolean, getData: Subject }) {
  return (
    <aside className='relative py-16 bg-subjectSidebar pl-52 pr-12 shrink-0 order-0 mb-0 mt-0'>
      <div data-sticky="" data-margin-top="32" data-sticky-for="768" data-sticky-wrap="">
        <div className='pb-24'>
          <h3 className='h4 text-black mb-8 text-center'>About this subject</h3>
          {(getLoading)
            ?
            <LoadingSpinner />
            :
            <>
              {getData ?
                <ul className="text-left space-y-6 text-smallTabBlue text-lg pr-12">
                  <li className='pl-4'>
                    <Link className='hover:underline' href={`https://handbook.unimelb.edu.au/2024/subjects/${getData.subjectCode}`} target="_blank" rel="noopener">Overview</Link>
                  </li>
                  <li className='bg-white py-2 pl-4 pr-10 border-l-4 border-unimelbScienceBlue overflow-hidden'>
                    <Link className='hover:underline block whitespace-nowrap overflow-hidden text-ellipsis' href="/subject">Eligibility and requirements</Link>
                  </li>
                  <li className='pl-4'>
                    <Link className='hover:underline' href={`https://handbook.unimelb.edu.au/2024/subjects/${getData.subjectCode}/assessment`} target="_blank" rel="noopener">Assessment</Link>
                  </li>
                  <li className='pl-4'>
                    <Link className='hover:underline' href={`https://handbook.unimelb.edu.au/2024/subjects/${getData.subjectCode}/dates-times`} target="_blank" rel="noopener">Dates and times</Link>
                  </li>
                  <li className='pl-4'>
                    <Link className='hover:underline' href={`https://handbook.unimelb.edu.au/2024/subjects/${getData.subjectCode}/further-information`} target="_blank" rel="noopener">Further information</Link>
                  </li>
                </ul>
                :
                null
              }
            </>

          }
        </div>
      </div>
    </aside>
  );
}
