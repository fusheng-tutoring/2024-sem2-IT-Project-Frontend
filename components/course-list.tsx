import React from 'react'
import { COMP } from '@/components/constant';
import CourseCard from './course-card';

export default function CourseList() {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto pb-16'>
        <div className='flex flex-1 gap-4'>
          {Array.from({ length: 4 }).map((_, index) => (
            <CourseCard
              key={index}
              category={COMP.category}
              title={COMP.title}
              location={COMP.location}
              points={COMP.points}
              intake={COMP.intake}
              fields={COMP.fields}
              mode={COMP.mode}
              link={COMP.link}
            />
          ))}
        </div>
        <div className='flex flex-1 gap-4'>
          {Array.from({ length: 4 }).map((_, index) => (
            <CourseCard
              key={index}
              category={COMP.category}
              title={COMP.title}
              location={COMP.location}
              points={COMP.points}
              intake={COMP.intake}
              fields={COMP.fields}
              mode={COMP.mode}
              link={COMP.link}
            />
          ))}
        </div>
        <div className='flex flex-1 gap-4'>
          {Array.from({ length: 4 }).map((_, index) => (
            <CourseCard
              key={index}
              category={COMP.category}
              title={COMP.title}
              location={COMP.location}
              points={COMP.points}
              intake={COMP.intake}
              fields={COMP.fields}
              mode={COMP.mode}
              link={COMP.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
