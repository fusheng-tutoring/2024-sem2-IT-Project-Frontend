'use client'

import { useState } from 'react'

import CSSidebar from "./cs-sidebar";
import CSSubjectList from "./cs-subject-list";

export default function CSDisplayList() {

  const [curTab, setCurTab] = useState<string>("Major Structure");

  return (
    <section className='relative'>
      <div className="max-w-full w-full flex flex-wrap gap-8 mb-12">
        <CSSidebar curTab={curTab} setCurTab={setCurTab}/>
        <CSSubjectList curTab={curTab}/>
      </div>
    </section>
  )
}
