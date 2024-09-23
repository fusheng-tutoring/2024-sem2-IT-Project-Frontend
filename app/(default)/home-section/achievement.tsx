import React from 'react'

export default function achievement() {
  return (
    <section className='relative bg-unimelbBlue py-20'>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <div className='max-w-6xl mx-auto'>
          <h3 className='text-3xl text-center justufy-center text-white mb-4'>
            Why Choose Melbourne?
          </h3>
          <h4 className='h5 text-center text-white'>
            Be empowered to direct your own learning experience. Discover your strengths and passions, while gaining a globally recognised qualification and
            the vital industry connections to make your mark in the world.
          </h4>
          <div className='flex flex-row gap-4 text-center justify-center mt-6'>
            <div className='flex flex-1 flex-col border-2 border-white text-white p-4'>
              <div className='h3'>
                #1
              </div>
              <div>
                in Australia
              </div>
            </div>
            <div className='flex flex-1 flex-col border-2 border-white text-white p-4'>
              <div className='h3'>
                #13
              </div>
              <div>
                in the world
              </div>
            </div>
            <div className='flex flex-1 flex-col border-2 border-white text-white p-4'>
              <div className='h3'>
                #8
              </div>
              <div>
                in graduate employability worldwide
              </div>
            </div>
          </div>
          <div className='text-sm text-white text-center mt-6'>
            2025 QS World University Rankings/QS Graduate Employability 2022
          </div>
        </div>
      </div>
    </section>
  )
}
