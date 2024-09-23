export const metadata = {
  title: 'Bachelor of Science — The University of Melbourne Handbook',
  description: 'Bachelor of Science — The University of Melbourne Handbook',
}

import CourseList from '@/components/course-list';
import ScienceSearch from "@/components/science-search";

export default function Science() {
  return (
    <>
      <section className='relative'>
        <div className="max-w-8xl mx-auto">
          <div className="pt-8 md:pt-16">
            <div className="md:flex md:justify-between" data-sticky-container>
              <div className="md:grow">
                <ScienceSearch />
                <CourseList />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
