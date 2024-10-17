'use client'

import { useState } from 'react'

import MajorSidebar from "./major-sidebar";
import MajorSubjectList from "./major-subject-list";
import Link from 'next/link';

export default function MajorDisplayList() {

  const [curTab, setCurTab] = useState<string>("Major Structure");

  return (
    <section className='relative'>
      <Link href={"/science"} className='btn-md bg-unimelbDarkBlue text-white px-4 py-2 mt-6 ml-8 rounded-xl'>Back</Link>
      <div className="flex mt-4 mx-auto mb-12">
        <MajorSidebar curTab={curTab} setCurTab={setCurTab} />
        <MajorSubjectList curTab={curTab} />
      </div>
    </section>
  )
}
