export const metadata = {
  title: 'Subject Overview',
  description: 'The University of Melbourne Handbook',
}

import SignInForm from "@/components/signin-form";

export default function Science() {
  return (
    <>
      <section className='relative'>
        <div className="max-w-8xl mx-auto" data-sticky-container>
          <div className="pt-16">
            <SignInForm />
          </div>
        </div>
      </section>
    </>
  )
}
