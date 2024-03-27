import Image from 'next/image'

const AboutUs = () => {
  return (
    <section className='px-4 py-16 '>
      <div className='container mx-auto max-w-screen-xl md:flex md:justify-between md:space-x-8 '>
        <div className='md:w-1/2'>
          <Image
            loading='lazy'
            src='/home/contact-us-home.jpg'
            alt='Electronic Components'
            className='w-full h-auto rounded-lg object-cover'
            width='600'
            height='400'
            style={{ aspectRatio: 600 / 400 }}
          />
        </div>
        <div className='mt-8 md:mt-0 md:w-1/2'>
          <h4 className='text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2'>
            Ведущая
          </h4>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>
            Поставка качественных электронных компонентов по всей России
          </h2>
          <p className='text-base text-gray-600'>
            В нашей компании, мы стремимся предоставить первоклассные
            электронные компоненты для поддержки вашего бизнеса. Мы предлагаем
            широкий ассортимент продукции от ведущих мировых производителей.
            Наша компания имеет многолетний опыт работы на рынке электронных
            компонентов. Мы гарантируем высокое качество продукции и оперативную
            доставку. Мы готовы предложить вам лучшие условия сотрудничества.{' '}
          </p>
        </div>
      </div>
    </section>
  )
}
export default AboutUs
