'use client'

import SubjectSidebar from './subject-sidebar';
import SubjectContent from './subjectContent';

import { Subject } from './types';

export default function SubejctDisplay({ getLoading, getData }: { getLoading: boolean, getData: Subject }) {
  return (
    <section className="relative">
      <div className="flex flex-row">
        <SubjectSidebar getData={(getData as Subject)} getLoading={getLoading} />
        <SubjectContent getData={(getData as Subject)} getLoading={getLoading} />
      </div>
    </section>
  )
}
