'use client'

import React from 'react';
import Link from 'next/link';

export default function SubjectSidebar() {
  return (
    <aside className='relative py-16 bg-subjectSidebar pl-24 pr-12'>
      <div className="rounded-xl pb-24">
        <h3 className='h4 text-black mb-8 text-center'>About this subject</h3>
        <ul className="text-left space-y-6 text-smallTabBlue text-lg pr-12">
          <li className='pl-4'>
            <Link href="https://handbook.unimelb.edu.au/2024/subjects/comp20003" target="_blank" rel="noopener">Overview</Link>
          </li>
          <li className='bg-white py-2 pl-4 pr-16 border-l border-bold border-blue-500'>
            <Link href="/subject">Eligibility and requirements</Link>
          </li>
          <li className='pl-4'>
            <Link href="https://handbook.unimelb.edu.au/2024/subjects/comp20003/assessment" target="_blank" rel="noopener">Assessment</Link>
          </li>
          <li className='pl-4'>
            <Link href="https://handbook.unimelb.edu.au/2024/subjects/comp20003/dates-times" target="_blank" rel="noopener">Dates and times</Link>
          </li>
          <li className='pl-4'>
            <Link href="https://handbook.unimelb.edu.au/2024/subjects/comp20003/further-information" target="_blank" rel="noopener">Further information</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
