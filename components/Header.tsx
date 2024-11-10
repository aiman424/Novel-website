import React from 'react';
import Link from 'next/link';
const Header = () => {
  return (
    <div className='w-[1380px] h-[90px] bg-[#ddaa99]'>
      <h1 className='p-6 text-[#974257] font-[Rye] text-[30px] h-[50px] w-[400px]'>Aiman's Novel House</h1>

      <ul className='flex justify-center items-center pl-[200px] gap-[40px] font-[Rye] text-[20px]'>

        <li className='text-[#443344] hover:text-[#af5d72] cursor-pointer underline'>
          <Link href="/">Home</Link>
        </li>

        <li className='text-[#443344] hover:text-[#af5d72] cursor-pointer underline'>
          <Link href='/about'>About</Link>
        </li>

        <li className='text-[#443344] hover:text-[#af5d72] cursor-pointer underline'>
          <Link href="/suggestion">Suggestion</Link>
        </li>

        <li className='text-[#443344] hover:text-[#af5d72] cursor-pointer underline'>
          <Link href="/contact">Contact</Link>
        </li>

      </ul>
    </div>
  )
}

export default Header
