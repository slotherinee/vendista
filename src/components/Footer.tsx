import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/../public/digichips.jpeg'
import { industries } from '@/utils/industries'

const Footer = () => {
  return (
    <footer className='bg-gray-50'>
      <div className='container max-w-screen-xl mx-auto justify-center items-center px-4 py-8 md:flex md:justify-between md:items-start'>
        <div className='mb-10 md:mb-0'>
          <div className='mb-10'>
            <Link href='/'>
              <Image
                loading='lazy'
                src={Logo}
                width='100'
                height='100'
                alt='Logo'
                className='aspect-auto object-cover'
              />
            </Link>
          </div>
          <div className='mb-10 pl-1'>
            <h3 className='font-semibold'>Адрес:</h3>
            <p>420066, Россия, г. Казань, Декабристов 85Б, 13 этаж</p>
          </div>
          <div className='pl-1'>
            <h3 className='font-semibold'>Контакты:</h3>
            <p>
              <Link
                className='underline hover:no-underline'
                href='tel:+79991637120'
              >
                +7 (999) 163-71-20
              </Link>
            </p>
            <p>
              <Link
                className='underline hover:no-underline'
                href='mailto:info@digichips.ru'
              >
                info@digichips.ru
              </Link>
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 text-sm md:text-base'>
          {industries.map(industry => (
            <Link
              key={industry.id}
              className='block mb-2 hover:underline'
              href={industry.url}
            >
              {industry.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
export default Footer
