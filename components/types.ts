export type FetchingDataType = Array<object> | object | string[] | null;

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

export type Prerequisite = {
  confirm: boolean;
  subjectList: string[];
  info: string[];
};

export type PrerequisiteList = {
  prerequisite: Prerequisite[];
};

export type Extended = {
  subjectName: string;
  subjectCode: string;
};

export type Subject = {
  _id: string;
  subjectName: string;
  subjectCode: string;
  subjectPrerequisites: PrerequisiteList[];
  subjectExtended: Extended[];
  createdAt: Date;
  updatedAt: Date;
};

export interface JwtPayload {
  Role: string;
  Email: string;
  exp: number;
  iat: number;
  sub: string;
}