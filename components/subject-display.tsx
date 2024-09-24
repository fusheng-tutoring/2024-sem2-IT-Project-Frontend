'use client'

import SubjectSidebar from './subject-sidebar';
import Subject from './subject';

export default function SubejctDisplay() {
  return (
    <section className="relative">
      <div className="max-w-full w-full flex flex-row gap-16">
        <SubjectSidebar />
        <Subject />
      </div>
    </section>

  )
}
