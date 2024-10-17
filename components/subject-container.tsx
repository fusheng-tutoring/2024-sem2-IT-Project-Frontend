'use client'

import React, { useEffect, useState } from 'react';

import SubejctDisplay from "@/components/subject-display"
import SubjectHero from "@/components/subject-hero"

import GetData from './get';
import { Subject } from './types';
import { BACKEND_URL, NO_JWT_NEEDED, } from './constant';

export default function SubjectContainer() {
  const [subjectCode, setSubjectCode] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedSubjectCode = localStorage.getItem("subjectCode");
      setSubjectCode(storedSubjectCode);
    }
  }, []);
  const { getData, getLoading } = GetData<Subject | null>(`${BACKEND_URL}/subject/${subjectCode}`, NO_JWT_NEEDED);

  return (
    <div className="flex justify-between">
      <div className="grow">
        <SubjectHero getData={(getData as Subject)} getLoading={getLoading} />
        <SubejctDisplay getData={(getData as Subject)} getLoading={getLoading} />
      </div>
    </div>
  )
}
