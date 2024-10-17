'use client'

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MajorType, PageResponseData } from './types';
import MajorCard from './major-card';
import GetData from './get';
import { BACKEND_URL, MAJOR_CONVERTOR, MAJOR_HOLDING } from './constant';


const NO_JWT_NEEDED = true;

export default function MajorSubjectList({ curTab }: { curTab: string }) {

  const [lastWord, setLastWord] = useState<string>("");
  const [subjectData, setSubjectData] = useState<MajorType[]>(MAJOR_HOLDING as MajorType[]);
  const { getData, getLoading, reGet } = GetData<PageResponseData | null>(
    `${BACKEND_URL}/subject-preview/?field=${encodeURIComponent(MAJOR_CONVERTOR[lastWord])}`,
    NO_JWT_NEEDED
  );
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathArray = pathname.split("/").filter(Boolean);
      const currentLastWord = pathArray[pathArray.length - 1];

      if (currentLastWord) {
        setLastWord(currentLastWord);
        localStorage.setItem("lastWord", currentLastWord);
      } else {
        const savedLastWord = localStorage.getItem("lastWord");
        if (savedLastWord) {
          setLastWord(savedLastWord);
        }
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (lastWord && getData === null) {
      console.log("Fetching data for:", lastWord);
      reGet();
    }
  }, [lastWord, getData]);

  useEffect(() => {
    const output = getData as PageResponseData;
    if (output && output.subjectPreviews !== null) {
      console.log("Data fetched successfully:", output);
      setSubjectData(output.subjectPreviews as MajorType[]);
    } 
  }, [getData]);

  const subjects = (curTab === "Major Structure") ? subjectData as MajorType[] : subjectData as MajorType[];

  return (
    <section className="flex-grow ml-auto mr-24 w-4/5">
      <div className="max-w-full">
        <div className="h1 font-bold text-unimelbBlue mb-4">Subjects</div>
        {!getLoading && (
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
        )}
      </div>
    </section>
  )
}