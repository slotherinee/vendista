import { featuresData } from '@/utils/homepageData'
import Image from 'next/image'

const Features = () => {
  return (
    <section className='bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 gap-8'>
      <div className=' max-w-screen-xl mx-auto'>
        <div className='text-center mb-10'>
          <h2 className='text-2xl leading-9 font-semibold text-gray-900 sm:text-4xl sm:leading-10 mb-2'>
            Качественные электронные компоненты для любой отрасли
          </h2>
          <p className='mt-4 mb-20 marker:text-lg leading-relaxed tracking-wide text-gray-600  text-base'>
            Мы предлагаем широкий ассортимент электронных компонентов, которые
            надежны, долговечны и соответствуют самым высоким отраслевым
            стандартам. Работаете ли вы в автомобилестроении, аэрокосмической
            отрасли или телекоммуникациях, у нас есть подходящие компоненты для
            ваших нужд.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate__animated'>
          {featuresData.map(feature => (
            <div key={feature.title} className='text-center'>
              <div className='mb-4'>
                <Image
                  loading='lazy'
                  src={feature.image}
                  alt={feature.alt}
                  className='mx-auto rounded h-40 w-80 object-cover'
                  width='400'
                  height='200'
                  style={{ aspectRatio: 200 / 200 }}
                />
              </div>
              <h3 className='text-xl leading-6 font-semibold text-gray-900'>
                {feature.title}
              </h3>
              <p className='mt-3 text-base leading-relaxed tracking-wide text-gray-800 antialiased'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Features
