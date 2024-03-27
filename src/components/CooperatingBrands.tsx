import { cooperatingBrandsData } from '@/utils/homepageData'
import Image from 'next/image'

const CooperatingBrands = () => {
  return (
    <section className='py-10 mb-10'>
      <div className='max-w-screen-xl mx-auto'>
        <h2 className='text-center text-2xl font-bold mb-8'>Наши партнеры</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center justify-items-center items-center'>
          {cooperatingBrandsData.map(brand => (
            <Image
              key={brand.id}
              src={brand.image}
              alt={brand.alt || 'Brand logo'}
              width={120}
              height={40}
              className='h-10 object-cover'
              loading='lazy'
              style={{ aspectRatio: '120 / 40' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default CooperatingBrands
