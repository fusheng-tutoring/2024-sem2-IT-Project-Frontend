'use client'

import { useState } from 'react'

export default function Sidebar() {

  const [onCampus, setOnCampus] = useState<boolean>(false)

  return (
    <aside className="mb-8 md:mb-0 md:w-64 lg:w-72 md:mr-12 lg:mr-20 md:shrink-0 md:order-0">
      <div data-sticky="" data-margin-top="32" data-sticky-for="768" data-sticky-wrap="">
        <div className="relative bg-gray-50 rounded-xl border border-gray-200 p-5">
          <div className="absolute top-5 right-5 leading-none">
            <button type='button' className="text-sm font-medium text-indigo-500 hover:underline">Clear</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-6">

            <div>
              <div className="text-sm text-gray-800 font-semibold mb-3">Subject Level</div>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">Level 1</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">Level 2</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">Level 3</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">Level 9 (Graduates)</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">Special</span>
                  </label>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm text-gray-800 font-semibold mb-3">Pre Requisite</div>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" defaultChecked />
                    <span className="text-sm text-gray-600 ml-2">Subject</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">Requisites apply</span>
                  </label>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm text-gray-800 font-semibold mb-3">On Campus (In Person/Online)</div>
              <div className="flex items-center">
                <div className="form-switch">
                  <input type="checkbox" id="remote-toggle" className="sr-only" checked={onCampus} onChange={() => setOnCampus(!onCampus)} />
                  <label className="bg-gray-300" htmlFor="remote-toggle">
                    <span className="bg-white shadow-sm" aria-hidden="true" />
                    <span className="sr-only">On Campus</span>
                  </label>
                </div>
                <div className="text-sm text-gray-400 italic ml-2">{onCampus ? 'On' : 'Off'}</div>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-800 font-semibold mb-3">Location</div>
              <label className="sr-only">Location</label>
              <select title='Location' className="form-select w-full">
                <option>Virtual Campus</option>
                <option>Parkvile</option>
                <option>Southbank</option>
                <option>Burnley</option>
                <option>Creswick</option>
                <option>Dookie</option>
                <option>Hawthorn</option>
                <option>Shepparton</option>
                <option>Werribee</option>
                <option>Dual-Delivery</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}