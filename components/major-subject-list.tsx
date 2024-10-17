'use client'

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import GetData from './get';
import MajorCard from './major-card';
import LoadingSpinner from './loading';
import { MajorType, PageResponseData } from './types';
import { BACKEND_URL, MAJOR_COLLECTION, MAJOR_CONVERTOR, NO_JWT_NEEDED, } from './constant';

export default function MajorSubjectList({ curTab }: { curTab: string }) {

  const pathname = usePathname();
  const [lastWord, setLastWord] = useState<string>("");
  const [subjectData, setSubjectData] = useState<MajorType[]>();
  const { getData, getLoading, reGet } = GetData<PageResponseData | null>(
    `${BACKEND_URL}/subject-preview/?field=${encodeURIComponent(MAJOR_CONVERTOR[lastWord])}`, NO_JWT_NEEDED);
  const subjects = (curTab === "Major Structure") ? subjectData as MajorType[] : subjectData as MajorType[];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathArray = pathname.split("/").filter(Boolean);
      const currentLastWord = pathArray[pathArray.length - 1];

      if (MAJOR_COLLECTION.includes(currentLastWord)) {
        const savedLastWord = localStorage.getItem("lastWord");
        if (savedLastWord === undefined && savedLastWord === null) {
          setLastWord(currentLastWord);
          localStorage.setItem("lastWord", currentLastWord);
        } else {
          if (savedLastWord === currentLastWord) {
            setLastWord(savedLastWord);
          } else {
            setLastWord(currentLastWord);
            localStorage.setItem("lastWord", currentLastWord);
          }
        }
      }
    }
  }, [pathname]);

  useEffect(() => {
    const output = getData as PageResponseData;
    if (getData && output.subjectPreviews !== null) {
      setSubjectData(output.subjectPreviews as MajorType[]);
    }

    if (lastWord && getData === null && subjects === null) {
      reGet();
    }
  }, [lastWord, getData, subjects]);

  return (
    <section className="flex-grow ml-auto mr-24 w-4/5">
      <div className="max-w-full">
        <div className="h1 font-bold text-unimelbBlue mb-4">Subjects</div>
        {(getLoading || getData === null)
          ?
          <LoadingSpinner />
          :
          <div className="w-full flex flex-wrap gap-1">
            {subjects?.map((subject, idx) => (
              <div key={idx} className="w-full flex-grow border-unimelbScienceBlue">
                <MajorCard
                  _id={subject._id}
                  subjectPreviewField={subject.subjectPreviewField}
                  subjectPreviewName={subject.subjectPreviewName}
                  subjectPreviewCode={subject.subjectPreviewCode}
                  subjectPreviewOfferedSemesters={subject.subjectPreviewOfferedSemesters}
                  subjectPreviewLevel={subject.subjectPreviewLevel}
                  subjectPreviewCreditPoints={subject.subjectPreviewCreditPoints}
                  subjectPreviewRequisites={subject.subjectPreviewRequisites}
                />
              </div>
            ))}
          </div>
        }
      </div>
    </section>
  )
}