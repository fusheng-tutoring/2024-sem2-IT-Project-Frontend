import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './logo';
import { SUBLINKS } from '../constant';

// Import Images
import ARROW_ICON from '@/public/svgs/arrow-right-svgrepo-com.svg';

export default function Footer() {
  return (
    <footer>
      <div className='max-w-full bg-unimelbBlue'>
        <div className="max-w-4xl mx-auto py-12 text-white">

          <div className="mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row">

              <div className="flex-1 max-w-md mr-auto">
                <div className="mb-16 max-w-sm">
                  <div className="text-xl mb-4">
                    We acknowledge and pay respect to the
                    Traditional Owners of the lands upon
                    which our campuses are situated
                  </div>
                  <div className="flex items-center gap-2">
                    <Image className="w-4 h-auto" src={ARROW_ICON} alt="arrow" />
                    <span>Read about our commitment to reconciliation</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row text-sm">
                  <div className="flex-1 flex flex-col justify-between">
                    {SUBLINKS.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Image className="w-4 h-auto" src={ARROW_ICON} alt="arrow" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div className='mb-6'>
                      <p><span className="font-bold">Phone</span>: 13 MELB (13 6352)</p>
                      <p><span className="font-bold">International</span>: +61 3 9035 5511</p>
                    </div>
                    <div className='mb-6'>
                      <p className="font-bold">Address:</p>
                      <p>The University of Melbourne<br />
                        Grattan Street, Parkville<br />
                        Victoria, 3010, Australia
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image className="w-4 h-auto" src={ARROW_ICON} alt="arrow" />
                      <Link className="font-bold" href="https://about.unimelb.edu.au/priorities-and-partnerships/campus-development/campus-locations">
                        View all Campus locations
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="mb-4 mx-auto">
                  <Logo toggle={true} size="lg" />
                </div>
                <div className="flex flex-row gap-4 text-xs mx-auto">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='max-w-full bg-unimelbFooterBottom'>
        <div className="text-xs max-w-4xl mx-auto px-4 text-white">
          <div className="py-6">
            <div className="flex flex-col gap-4">
              <div className='flex flex-wrap gap-6'>
                <p className='underline hover:no-underline'>Emergency</p>
                <p className='underline hover:no-underline'>Terms & privacy</p>
                <p className='underline hover:no-underline'>Accessibility</p>
                <p className='underline hover:no-underline'>Privacy</p>
              </div>

              <div className='flex flex-wrap gap-6'>
                <p>The University of Melbourne (Australian University): <span className='font-bold'>PRV12150</span></p>
                <p>CRICOS: <span className='font-bold'>00116K</span></p>
                <p>ABN: <span className='font-bold'>84 002 705 224</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
