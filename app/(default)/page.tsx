export const metadata = {
  title: 'Search — The University of Melbourne Handbook',
  description: 'Search — The University of Melbourne Handbook',
}
import Hero from '@/components/hero'
import Sidebar from '@/components/sidebar'
import SubjectsList from './subjects-list'

export default function Home() {
  return (
    <>
      <Hero />
      <section>
        <div className="max-w-8xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-16">
            <div className="md:flex md:justify-between" data-sticky-container>

              <Sidebar />
              <div className="md:grow">
                <SubjectsList />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
