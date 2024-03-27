import Link from 'next/link'
import MailIcon from './ui/MailIcon'
import PhoneIcon from './ui/PhoneIcon'
import LocationIcon from './ui/LocationIcon'

const DetailContactInfo = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex items-center space-x-4 mb-6'>
        <MailIcon />
        <div>
          <h2 className='text-lg font-semibold text-gray-900'>Email</h2>
          <p className='text-gray-600'>Отправьте нам электронное письмо</p>
          <Link
            href='mailto:partners@vendista.ru'
            className='text-emerald-600 hover:underline'
          >
            partners@vendista.ru
          </Link>
        </div>
      </div>
      <div className='flex items-center space-x-4 mb-6'>
        <PhoneIcon />
        <div>
          <h2 className='text-lg font-semibold text-gray-900'>Телефон</h2>
          <p className='text-gray-600'>Позвоните нам</p>
          <Link
            href='tel:+78006002632'
            className='text-emerald-600 hover:underline'
          >
            8 (800) 600-26-32
          </Link>
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <LocationIcon />
        <div>
          <h2 className='text-lg font-semibold text-gray-900'>Офис</h2>
          <address className='not-italic text-gray-600'>
            420066, г. Казань, Декабристов 85Б, 13 этаж
          </address>
        </div>
      </div>
    </div>
  )
}
export default DetailContactInfo
