'use client'

import SubjectSidebar from './subject-sidebar';
import Subject from './subject';

export default function SubejctDisplay() {
  return (
    <section className="relative">
      <div className="max-w-full w-full flex flex-wrap gap-8">
        <SubjectSidebar />
        <Subject />
      </div>
    </section>

  )
}
