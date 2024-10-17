import React from 'react'
import { MAJORS } from '@/components/constant';
import CourseCard from './course-card';

export default function CourseList() {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto pb-16'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {MAJORS.map((major, index) => (
            <CourseCard
              key={index}
              category={major.category}
              title={major.title}
              location={major.location}
              points={major.points}
              intake={major.intake}
              fields={major.fields}
              mode={major.mode}
              link={major.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
