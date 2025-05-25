import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiBars3, HiMagnifyingGlass } from 'react-icons/hi2'

type NavIconsProps = {
  className?: string,
  tabIndex?: number,
}


const NavIcons = ({ className ="", tabIndex}: NavIconsProps) => (
  <div className={clsx("flex items-center gap-8", className)}>
    <Link 
      href="#" 
      className='text-white' 
      aria-label="Search" 
      tabIndex={tabIndex}
    >
      <HiMagnifyingGlass size={24} />
    </Link>
  </div>
)


export const Navbar = () => {
  return (
    <header>
      <div className="navbar w-full fixed top-0 left-0 z-50 bg-black text-white">
        <div className='flex items-center justify-between p-2 md:p-4'>
          <button className='p-2 cursor-pointer text-white transition-colors duration-300 hover:bg-white/20'>
            <HiBars3 size={24} />
          </button>

          <div className='absolute left-1/2 -translate-x-1/2 transform'>
            <Image
              src="/logo.svg"
              alt="CÔTE ROYALE Paris"
              width={180}
              height={30}
              className='w-32 md:w-44'
            />
          </div>

          <div className='flex'>
            <NavIcons />
          </div>
        </div>
      </div>
    </header>
  )
}

