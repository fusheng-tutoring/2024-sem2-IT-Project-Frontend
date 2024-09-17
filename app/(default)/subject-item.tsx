import Link from 'next/link';
import Image from 'next/image';
import { Subject } from '@/components/types';
import SUBJECT from '@/public/images/subject-loading.png';

export default function SubjectItem({ ...props }: Subject) {
  return (
    <Link href={"/#"} className={`[&:nth-child(-n+12)]:-order-1 group ${!(props.pre_requisite === "Requisites apply") && 'border-b border-gray-200'} my-1`}>
      <div className={`px-4 py-6 ${(props.pre_requisite === "Subject") && 'bg-indigo-100 rounded-xl'}`}>
        <div className="sm:flex items-center space-y-3 sm:space-y-0 sm:space-x-5">
          {/* <div className="shrink-0">
            <img src={props.image} width="56" height="56" alt={props.course_name} />
          </div> */}
          <div className="shrink-0">
            <Image src={SUBJECT} width="56" height="56" alt={props.course_name} />
          </div>
          <div className="grow lg:flex items-center justify-between space-y-5 lg:space-x-2 lg:space-y-0">
            <div>
              <div className="flex datas-start space-x-2">
                <div className="text-sm text-gray-800 font-semibold mb-1">{props.course_code}</div>
                {(props.pre_requisite === "Subject") && (
                  <svg className="w-3 h-3 shrink-0 fill-amber-400" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.143 5.143A4.29 4.29 0 0 1 6.857.857a.857.857 0 0 0-1.714 0A4.29 4.29 0 0 1 .857 5.143a.857.857 0 0 0 0 1.714 4.29 4.29 0 0 1 4.286 4.286.857.857 0 0 0 1.714 0 4.29 4.29 0 0 1 4.286-4.286.857.857 0 0 0 0-1.714Z" />
                  </svg>
                )}
              </div>
              <div className="mb-2">
                <div className="text-lg text-gray-800 font-bold">
                  {props.course_name}
                </div>
              </div>
              <div className="-m-1">
                <div
                  className={`text-xs text-gray-500 font-medium inline-flex px-2 py-0.5 hover:text-gray-600 rounded-md m-1 whitespace-nowrap transition duration-150 ease-in-out ${(props.pre_requisite === "Subject") ? 'bg-indigo-50' : 'bg-gray-100'
                    }`}
                >
                  {props.pre_requisite}
                </div>
              </div>
            </div>
            <div className="min-w-[120px] flex items-center lg:justify-end space-x-3 lg:space-x-0">
              <div className="lg:hidden group-hover:lg:block">
                <div className="btn-sm py-1.5 px-3 text-white bg-indigo-500 hover:bg-indigo-600 group shadow-sm">
                  Learn More{' '}
                  <span className="tracking-normal text-indigo-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
