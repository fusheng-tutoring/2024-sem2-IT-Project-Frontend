'use client'

import React from 'react';
import { CORE_SUBJECT, RELATIVE_SUBJECT } from './constant';
import { CSType } from './types';
import CSCard from './cs-card';

export default function CSSubjectList({ curTab }: { curTab: string }) {

  var subjects: CSType[] = (curTab === "Major Structure") ? CORE_SUBJECT : RELATIVE_SUBJECT;

  return (
    <section className="relative ml-auto">
      <div className="max-w-full mt-12 mx-auto">
        <div className='h1 font-bold text-unimelbBlue mb-4'>Subjects</div>
        <div className='w-full flex flex-wrap gap-2'>
          {subjects.map((subject, idx) => (
            <div key={idx} className="w-full flex-grow">
              <CSCard
                name={subject.name}
                code={subject.code}
                offeredSemesters={subject.offeredSemesters}
                level={subject.level}
                creditPoints={subject.creditPoints}
                requisites={subject.requisites}
              />
            </div>
          ))}
        </div>

      </div>
    </section>

  )
}
