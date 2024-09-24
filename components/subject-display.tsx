'use client'

import SubjectSidebar from './subject-sidebar';
import Subject from './subject';

export default function SubejctDisplay() {
  return (
    <section className="relative">
      <div className="flex flex-row">
        <SubjectSidebar />
        <Subject />
      </div>
    </section>
  )
}
