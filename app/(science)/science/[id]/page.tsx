
import MajorHero from "@/components/major-hero"
import MajorDisplayList from "@/components/major-display-list";

export const metadata = {
  title: 'Major Lists — The University of Melbourne Handbook',
  description: 'The University of Melbourne Handbook',
}

export async function generateStaticParams() {
  try {
    const degrees = [          
      "chemistry",         
      "computer-science",                
      "data-science",        
      "electrical-engineering", 
      "mathematics",        
      "mechanical-engineering",
      "physics",        
      "psychology"    
    ];
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
                <MajorHero />
                <MajorDisplayList />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
