export const metadata = {
  title: 'Home — The University of Melbourne Handbook',
  description: 'Home — The University of Melbourne Handbook',
}

import Hero from './home-section/home-hero';
import Faculty from './home-section/faculty';
import Above from './home-section/above-home-hero';
import Achievement from './home-section/achievement';

export default function Home() {
  return (
    <div>
      <div className="pt-8 md:pt-16">
        <div className="md:flex md:justify-between">
          <div className="md:grow">
            <Above />
            <Hero />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative py-12">
              <h1 className='h2 text-left text-unimelbBlue'>Achivements</h1>
            </div>
            <Achievement />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative py-12">
              <h1 className='h2 text-left text-unimelbBlue'>Faculty and Programmes</h1>
            </div>
            <Faculty />
          </div>
        </div>
      </div>
    </div>
  )
}
