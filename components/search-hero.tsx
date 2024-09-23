import Search from './search'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-white pointer-events-none -z-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-28 md:pt-36">

          <div className="max-w-7xl text-center md:text-left">

            <div className="h4 font-inter mb-6">
              The University of Melbourne’s official source of course and subject information
            </div>

            <Search />
          </div>
        </div>
      </div>
    </section>
  )
}