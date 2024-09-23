import React from 'react';
import DropdownTemp from './dropdown-temp';
import { TITLES } from './constant';

export default function ScienceSearch() {
  return (
    <section className='relative bg-unimielbScienceBlue'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative my-8 py-4">

        <h3 className='h3 text-white mb-4'>
          Explore Our Programmes
        </h3>

        <div>
          <div className="grid gap-4 md:grid-cols-4">
            {TITLES.map((title, idx) => (
              <div key={idx}>
                <DropdownTemp title={title} />
              </div>
            ))}
          </div>
        </div>

        <form className="mt-4">
          <div className="relative">
            <label htmlFor="search-modal" className="sr-only">Search</label>
            <input id="search-modal" className="w-full rounded-full bg-white border-0 focus:ring-transparent placeholder-gray-400 appearance-none pl-10 pr-4" type="search" placeholder="Search Anything…" />
            <div className="absolute inset-0 flex items-center justify-center right-auto group">
              <svg className="shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-4 mr-2" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
