import React from 'react'
import Image from 'next/image'

const Section = () => {
  return (
    <div className='h-screen'>
        <div className='flex h-[80%]'>
        <div className='w-1/2 p-9 flex flex-col justify-center items-start m-12'>
            <h1 className='text-[#5c2f3d] text-[50px] w-[600px] font-[Rye]'>Books are a Uniquely portable Magic</h1>
            <br/>
            <p className='w-[390px] font-[Rye] h-[95px] text-[20px] text-[#965f70]'>My Obsession is novel i'm a Reader here are some my favourite or suggested novel that i want you to must read this novels.</p> 
            <br/>
            <button className='box-border w-[250px] h-[58px] p-[15px] gap-[20px] text-[19px] rounded-xl items-center bg-[#d6a595]'><a href="/about"></a>Here some Novels</button>  
        </div>
        <div className='w-1/2 flex justify-center items-center'>
            <Image
                src="/novel girl.webp"
                alt="girl"
                width={362}
                height={400}
                className='box-border rounded-2xl border-red-400 border-solid'
            />
        </div>
     </div>

    </div>
  )
}

export default Section
