'use client'

import React from 'react'
import { Subject } from './types';

export function VerticalLine() {
  return (
    <div className="h-32">
      <div className="border-l-2 border-black h-full" />
    </div>
  )
}


export function HorizontalLine() {
  return (
    <div className="w-32">
      <div className="border-b-2 border-black w-full" />
    </div>
  )
}

function helper(str: string) {
  console.log(str)
  if (str.includes("All")) {
    return "All";
  } else {
    return "One of";
  }
}
export default function TreeDiagram({ data }: { data: Subject }) {
  const { subjectPrerequisites, subjectExtended } = data;

  return (
    <div className="flex items-center justify-center flex-col">

      <div className="flex w-full justify-between">
        <div className="flex flex-col">
          {subjectPrerequisites.map((subject, index) => (
            <div key={index} className="flex items-center mb-4">
              {subject.prerequisite[0].subjectList.length > 0 && (
                <>
                  <div className="text-center mx-2 p-2 border rounded">
                    {subject.prerequisite[0].subjectList.map((sub, idx) => (
                      <p key={idx}>{sub}</p>
                    ))}
                  </div>
                  <HorizontalLine />
                  {subject.prerequisite[0].subjectList.length > 1 && (
                    <p>{helper(subject.prerequisite[0].info[0])}</p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <span className="font-bold text-lg">{data.subjectCode}</span>
        </div>

        <div className="flex flex-col items-center">
          {subjectExtended.map((subject, index) => (
            <div key={index} className="flex items-center mb-4">
              <HorizontalLine />
              <div className="text-center mx-2 p-2 border rounded">
                <p>{subject.subjectCode}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}