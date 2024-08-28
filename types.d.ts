type CoursePreview = {
  "complete_credit": string,
  "courseOfferingTime": string,
}

type Subject = {
  "course_name": string,
  "course_code": string,
  "course_url_search_short": string,
  "pre_requisite": string,
  "course_preview": CoursePreview[],
}