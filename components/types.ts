export type CourseType = {
  category: string;
  title: string;
  location: string;
  points: string;
  intake: string;
  fields: string[];
  mode: string;
  link: string;
}

export type CSType = {
  name: string,
  code: string,
  offeredSemesters: string[],
  level: string,
  creditPoints: number,
  requisites: boolean
}

export type CoursePreview = {
  complete_credit: string,
  courseOfferingTime: string,
}

export type Subject = {
  course_name: string,
  course_code: string,
  course_url_search_short: string,
  pre_requisite: string,
  course_preview: CoursePreview[],
}

export interface SubjectList {
  course_list: Subject[]
}

export type StudyArea = {
  name: string;
  description: string;
  categories: string[];
  subjects: number;
};  