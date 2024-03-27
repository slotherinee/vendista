import Contacts from '@/components/Contacts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Контакты',
  description:
    'Контактная информация компании Vendista LLC. Свяжитесь с нами по любым вопросам.',
  keywords: 'контакты, телефон, email, адрес, офис, компания, vendista',
}

const ContactUsPage = () => {
  return (
    <section className='animate__animated animate__fadeIn'>
      <Contacts />
    </section>
  )
}
export default ContactUsPage
