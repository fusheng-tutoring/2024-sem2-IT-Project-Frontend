'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Import Images
import HOMEVIDEO from '@/public/images/home-video.png';
import HOMEHEROBG from '@/public/images/home-hero.png';

export default function HeroAbout() {
  return (
    <section className='relative'>

      <div className='absolute inset-0 -z-30'>
        <Image className="w-full h-full object-cover" src={HOMEHEROBG} priority alt="Handbook" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 pb-2 md:pt-40 md:pb-20">
          <div className="max-w-6xl flex text-left">
            <div>
              <div className="max-w-sm text-4xl mb-4 text-white">Pursue Your Education at Australia's Top University</div>
              <div className="max-w-md text-lg mb-4 text-slate-100">
                Nurturing the next generation of innovative scholars,
                thought leaders and game changers, equipped with
                both deep disciplinary expertise and broad
                interdisciplinary perspectives.
              </div>
              <div className='flex flex-wrap gap-4'>
                <Link className="py-2 px-6 bg-unimelbBlue text-white rounded-md z-10" target="_blank" rel="noopener" href="https://unimelb-web.t1cloud.com/T1SMDefault/WebApps/eStudent/SM/eApplications/eAppLogin.aspx?r=&f=%23UM.EAP.CI2LOGIN.WEB" >Apply Now</Link>
                <div className='py-2 px-6 text-white rounded-md border-2 border-white'>Learn More</div>
              </div>
            </div>
            <Link className='mx-auto my-auto relative' href="https://www.youtube.com/watch?v=z2STrELVids" target="_blank" rel="noopener">
              <Image className="w-auto h-full" src={HOMEVIDEO} priority alt="Handbook" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}