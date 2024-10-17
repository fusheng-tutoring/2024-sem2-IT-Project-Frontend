export const metadata = {
  title: 'Subject Overview',
  description: 'The University of Melbourne Handbook',
}

import SubjectContainer from "@/components/subject-container";

export default function Science() {
  return (
    <>
      <section className='relative'>
        <div className="max-w-8xl mx-auto" data-sticky-container>
          <div className="pt-16">
            <SubjectContainer />
          </div>
        </div>
      </section>
    </>
  )
}
