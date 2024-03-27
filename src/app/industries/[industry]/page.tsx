import { industries } from '@/utils/industries'
import type { IndustryType } from '@/utils/industries'
import { title } from 'process'

export const generateMetadata = ({ params }: { params: any }) => {
  const slug = params.industry
  const industry = industries.find(industry => industry.slug === slug)
  return {
    title: industry?.title,
    description: industry?.description,
  }
}

const SingleIndustryPage = ({ params }: { params: any }) => {
  const slug = params.industry
  const industry = industries.find(industry => industry.slug === slug)
  return (
    <section className='mb-10'>
      <div className='max-w-screen-xl mx-auto py-8 px-4'>
        <div className='w-full mt-10 animate__animated animate__fadeIn px-12'>
          <div className='bg-gray-50 py-6 lg:py-12 mb-10'>
            <div className='container px-4 flex items-center justify-center'>
              <div className='grid gap-2 text-center'>
                <h1 className='text-3xl font-bold mb-3 antialiased tracking-tighter sm:text-4xl md:text-5xl text-slate-800'>
                  {industry?.title}
                </h1>
                <p className='text-gray-800 text-balance md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  {industry?.description}
                </p>
              </div>
            </div>
          </div>
          <div className='container px-4 grid grid-cols-1 gap-6 md:gap-12 lg:gap-24 mb-10'>
            {industry?.howWeHelp && (
              <div className='grid gap-4'>
                <h2 className='text-2xl font-semibold mb-2 tracking-tight'>
                  Чем мы можем помочь
                </h2>
                <div className='ml-5'>
                  <ul className='grid gap-2 list-disc'>
                    {industry.howWeHelp.map((item, index) => (
                      <li
                        key={index}
                        className='text-base leading-relaxed tracking-wide text-gray-800'
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {industry?.whatWeDo && (
              <div className='grid gap-4'>
                <h2 className='text-2xl font-semibold mb-2 tracking-tight'>
                  Что мы производим
                </h2>
                <div className='ml-5'>
                  <ul className='grid gap-2 list-disc'>
                    {industry.whatWeDo.map((item, index) => (
                      <li
                        key={index}
                        className='text-base leading-relaxed tracking-wide text-gray-800'
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {industry?.conclusion && (
              <div className='grid gap-4'>
                <h2 className='text-2xl font-semibold mb-2 tracking-tight'>
                  Дополнительная информация
                </h2>
                <div>
                  <p className='text-base leading-relaxed tracking-wide text-gray-800'>
                    {industry.conclusion}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
export default SingleIndustryPage
