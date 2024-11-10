import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer';
import Image from 'next/image';

const Suggestion = () => {
  return (
    <div className='h-screen'>
      <Header/>
      <section className='flex justify-center'>
        <div className='w-1/2 flex flex-col justify-center items-start m-12'>
        <h1 className="text-[40px] font-bold w-[496px] underline">Suggestions</h1>
        <br/>
        <p className='w-[390px] font-[Rye] h-[95px] text-[25px]'>Faris Ghazi an intelligence officer is convicted for the murder of his 
        step-brother and wife and attempted murder of his relative Zumar Yousuf. This story is so mystery like full of suspense
        thriller thats my favourite novel. </p>
        </div>
        <div className='mt-20 flex justify-center items-center '>
          <Image
          src={'/namal.webp'}
          alt='namal'
          width={400}
          height={300}
          />
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Suggestion
 