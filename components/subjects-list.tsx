import SubjectItem from './subject-item';
import { SubjectList } from '@/components/types';

export async function getAllSubjects() {
  const res = await fetch('https://storage.googleapis.com/teammakapaka/subject-raw.json')

  if (!res.ok) throw new Error('failed to fetch data')

  return res.json()
}

export default async function SubjectsList() {
  const subjectsData: Promise<SubjectList> = getAllSubjects()
  const subjects = (await subjectsData).course_list

  return (
    <div className="pb-8 md:pb-16">
      <h2 className="text-3xl font-bold font-inter mb-10">Undergraduate 2024</h2>
      <div className="flex flex-col">

        {subjects?.map(subject => {
          return (
            <SubjectItem key={subject.course_code} {...subject} />
          )
        })}

      </div>
    </div>
  )
}
