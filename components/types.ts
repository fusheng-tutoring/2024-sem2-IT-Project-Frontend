export type FetchingDataType = Array<object> | object | string[] | null;

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

export type MajorType = {
  _id: string,
  subjectPreviewField: string
  subjectPreviewName: string,
  subjectPreviewCode: string,
  subjectPreviewOfferedSemesters: string[],
  subjectPreviewLevel: string,
  subjectPreviewCreditPoints: number,
  subjectPreviewRequisites: boolean
}

export type Pagination = {
  Page: number;
  PageSize: number;
  Total: number;
  Pages: number;
};

export type PageResponseData = {
  pagination: Pagination;
  subjectPreviews: MajorType[] | null;
};

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

export interface ModalProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}