import Image from 'next/image'

const Hero = () => {
  return (
    <section className='w-full py-12 mx-auto'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='container grid items-center gap-4 mx-auto md:gap-8'>
          <div className='space-y-4 md:space-y-6'>
            <div className='relative text-center'>
              <Image
                alt='Electronic Components'
                className='aspect-[2/1] md:aspect-[3/1] rounded-lg overflow-hidden w-full'
                src='/hero.jpg'
                width='0'
                priority
                height='0'
                sizes='100vw'
              />
              <div className='absolute inset-0 bg-black opacity-70'></div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-white p-4 flex flex-col justify-center items-center gap-4'>
                  <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-2 text-center animate__animated animate__fadeInLeft'>
                    Электронные компоненты высокого качества
                  </h1>
                  <p className='hidden sm:block max-w-[600px] sm:text-gray-300 md:text-xl lg:text-2xl sm:text-md sm:text-center animate__animated animate__fadeInLeft'>
                    Откройте для себя мир инноваций с нашими высококачественными
                    электронными компонентами.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
