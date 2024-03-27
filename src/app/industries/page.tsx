import { industries } from '@/utils/industries'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Производство',
  description: 'Страница имеющихся отраслей производства компании Vendista LLC',
}

const IndustriesPage = () => {
  return (
    <section className='mb-10'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-16 p-4 md:p-6 animate__animated animate__fadeIn '>
          {industries.map(industry => (
            <div
              key={industry.id}
              className='border-2 border-emerald-600 rounded-lg overflow-hidden text-center cursor-pointer'
            >
              <Link href={industry.url}>
                <div className='p-4'>
                  <h3 className='font-semibold text-base md:text-xl'>
                    {industry.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default IndustriesPage
