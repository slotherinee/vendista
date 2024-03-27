import { featuresData } from '@/utils/homepageData'
import Image from 'next/image'
import FeatureCards from './FeatureCards'

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
        <FeatureCards />
      </div>
    </section>
  )
}
export default Features
