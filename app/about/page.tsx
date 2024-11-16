import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const About = () => {
  return (
    <div className='bg-[#ccbbaa]'>
      <Header/>
      <div className='flex justify-center items-center text-[30px] mt-5 text-[#68423f]'>
        <p> Some Novel Must to Read</p>
      </div>

     <div className='m-4 image' >
      <Image
      src={'/peer e kamil.webp'}
      alt='peer e kamil'
      width={300}
      height={400}
      className='block'
      />
      <div className='content'>
         <h1>Peer e kamil</h1>
         <p>The book deals with the turning points in intervening lives of two people: a runaway girl named Imama Hashim;
          and a boy named Salar Sikander with an IQ of more than 150.</p>
      </div>
     </div>
     <div className='image-2'>
      <Image
      src={'/ab e hayat.webp'}
      alt='peer e kamil'
      width={300}
      height={400}
      className='mt-4 box-border border-black border-solid rounded-lg'
      />
     <div className='content'>
      <h1>Ab e hayat</h1>
      <p>This is the second part to Umera Ahmed&apos;s most famous book, Peer-e-Kamil.
      Are you excited to know whether they lived happily ever after or not?
      Get ready to read more about Salar and Imama&apos;s life.</p>
     </div>
  </div>

     <div className='image-3'>
     <Image
      src={'/halim.webp'}
      alt='peer e kamil'
      width={300}
      height={400}
      className='m-4 box-border border-black border-solid rounded-lg'
      />
      <div className='content-3'>
        <h1>Haalim</h1>
        <p>Taliyah Murad, a 28 year old scam artist living in Kaula Lampur, Malaysia.
         She&apos;s an ace at what she does and has big dreams, literally.</p>
      </div>
   </div>

   <div className='image-4'>
     <Image
      src={'/mala.webp'}
      alt='peer e kamil'
      width={300}
      height={300}
      className='mt-6 box-border  border-black border-solid rounded-lg'
      />
    <div className='content-4'>
      <h1>Maala</h1>
      <p>A courageous girl who defies the odds and goes 
      in search of a demon that has been responsible for a drought. </p>
    </div>
   </div>

      <div className='image-5'> 
      <Image
      src={'/amerbail.webp'}
      alt='peer e kamil'
      width={400}
      height={300}
      className='mt-6 box-border border-black border-solid rounded-lg'
      />
      <div className='content-5'>
        <h1>Amerbail</h1>
        <p>It is a story of imbalanced relationships, broken families, lust for power,
        complexes,insecurities and amidst all problems of love, its intensity and sacrifices. </p>
      </div>
      </div> 
      <Footer/>
   </div>


  )
}

export default About
