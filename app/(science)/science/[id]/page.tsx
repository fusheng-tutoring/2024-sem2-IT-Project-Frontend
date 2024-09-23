
import CSHero from "@/components/cs-hero"
import CSDisplayList from "@/components/cs-display-list";

export const metadata = {
  title: 'Computing and Software Systems — The University of Melbourne Handbook',
  description: 'Computing and Software Systems — The University of Melbourne Handbook',
}

export async function generateStaticParams() {
  try {
    const degrees = ["cs"]
    return degrees.map((degree: string) => ({
      id: degree,
    }));

  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default function Science() {
  return (
    <>
      <section className='relative'>
        <div className="max-w-8xl mx-auto">
          <div className="pt-8 md:pt-16">
            <div className="md:flex md:justify-between" data-sticky-container>
              <div className="md:grow">
                <CSHero />
                <CSDisplayList />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
