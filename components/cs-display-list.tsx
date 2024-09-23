'use client'

import { useState } from 'react'

import CSSidebar from "./cs-sidebar";
import CSSubjectList from "./cs-subject-list";

export default function CSDisplayList() {

  const [curTab, setCurTab] = useState<string>("Major Structure");

  return (
    <section className='relative'>
      <div className="max-w-full flex flex-row gap-8 mb-12">
        <CSSidebar curTab={curTab} setCurTab={setCurTab}/>
        <CSSubjectList curTab={curTab}/>
      </div>
    </section>
  )
}
