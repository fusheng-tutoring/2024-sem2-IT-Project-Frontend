import React, { Dispatch, SetStateAction } from 'react';
import { SUBJECT_TAB } from './constant';

export default function CSSidebar({ curTab, setCurTab }: { curTab: string, setCurTab: Dispatch<SetStateAction<string>> }) {

  function settingTab(e: React.MouseEvent<HTMLButtonElement>) {
    const selectedTab = e.currentTarget.innerText;
    setCurTab(selectedTab);
  }

  return (
    <aside className='mt-12'>
      <div data-sticky="" data-margin-top="32" data-sticky-for="768" data-sticky-wrap="">
        <div className="relative rounded-xl">
          <ul className="space-y-2 text-unimelbDarkBlue font-bold text-2xl">
            {SUBJECT_TAB.map((tab, idx) => (
              <li key={idx} className={`px-8 pr-12 py-2 ${tab === curTab ? "bg-tabGreen" : "bg-white"}`}>
                <button type='button' onClick={settingTab}>{tab}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
