import AboutUsPageComponent from '@/components/AboutPageComponent'
import CooperatingBrands from '@/components/CooperatingBrands'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'О нас',
  description: 'Информация о компании Vendista LLC. Наши цели и задачи.',
}

const AboutPage = () => {
  return (
    <>
      <AboutUsPageComponent />
      <CooperatingBrands />
    </>
  )
}
export default AboutPage
