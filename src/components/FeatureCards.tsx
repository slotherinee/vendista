import { featuresData } from '@/utils/homepageData'
import Image from 'next/image'

const FeatureCards = () => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`}>
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
  )
}
export default FeatureCards
