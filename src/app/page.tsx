import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import CooperatingBrands from '@/components/CooperatingBrands'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Главная',
  description:
    'Главная страница компании Vendista LLC. Наши услуги и преимущества. Продажа электронных компонентов. Производство и поставка.',
  keywords:
    'электронные компоненты, продажа, производство, поставка, компания, Vendista, Vendista LLC, продажа электронных компонентов, продажа электронных компонентов Vendista, производство электронных компонентов, поставка электронных компонентов, компания Vendista, компания Vendista LLC, компания по продаже электронных компонентов, компания по производству электронных компонентов, компания по поставке электронных компонентов',
}

export default function Home() {
  return (
    <>
      <Hero />
      <CooperatingBrands />
      <Features />
      <AboutUs />
      <ContactUs />
    </>
  )
}
