'use client'
import Logo from '@/../public/vendista.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ArrowDownDropDown from './ui/ArrowDownDropDown'
import BurgerIcon from './ui/BurgerIcon'
import { navLinks } from '@/utils/navbarData'
import { industries } from '@/utils/industries'
import { useState } from 'react'

const Header = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false)
  const pathname = usePathname()
  const handleBurgerMenu = () => {
    setOpenBurgerMenu(!openBurgerMenu)
  }

  return (
    <header>
      <div className='max-w-screen-xl px-4 py-4 mx-auto flex items-center justify-between'>
        <div className='flex items-center justify-between'>
          <Link className='hidden md:block' href='/'>
            <Image
              src={Logo}
              width='100'
              height='100'
              priority
              alt='Logo'
              className='rounded-full aspect-auto object-cover'
            />
          </Link>
          <button onClick={handleBurgerMenu} className='block md:hidden'>
            <BurgerIcon />
          </button>
        </div>
        <nav className='hidden md:flex md:gap-4'>
          {navLinks.map(link => (
            <Link
              key={link.url}
              href={link.url}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === link.url
                  ? 'text-white bg-emerald-600 hover:bg-emerald-700 hover:text-white'
                  : 'px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100'
              }`}
            >
              {link.title}
            </Link>
          ))}
          <div className='relative group'>
            <button
              className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                pathname.includes('/industries')
                  ? 'text-white bg-emerald-600 hover:bg-emerald-700 hover:text-white'
                  : 'px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100'
              }`}
            >
              <Link href='/industries'>Производство</Link>
              <ArrowDownDropDown />
            </button>
            <div className='absolute z-10 hidden group-hover:grid bg-white shadow-lg w-[450px] py-4 px-8 rounded-md grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
              {industries.map(industry => (
                <Link
                  key={industry.id}
                  href={industry.url}
                  className='text-sm font-medium hover:text-emerald-700'
                >
                  {industry.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className='flex'>
          <button className='hidden md:block items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  h-10 px-4 py-2  text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-700 hover:text-white'>
            <Link href='mailto:partners@vendista.ru'>Напишите нам</Link>
          </button>
        </div>
      </div>
    </header>
  )
}
export default Header
