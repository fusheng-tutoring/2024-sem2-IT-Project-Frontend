export const metadata = {
  title: 'Algorithms and Data Structures — The University of Melbourne Handbook',
  description: 'Algorithms and Data Structures — The University of Melbourne Handbook',
}

import SubejctDisplay from "@/components/subject-display"
import SubjectHero from "@/components/subject-hero"

export default function Science() {
  return (
    <>
      <section className='relative'>
        <div className="max-w-8xl mx-auto">
          <div className="pt-16">
            <div className="flex justify-between" data-sticky-container>
              <div className="grow">
                <SubjectHero />
                <SubejctDisplay />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
