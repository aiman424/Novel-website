import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Contact = () => {
  return (
    <div>
     <Header/>
      <section className='contact'>
        <h2 className='mt-3 flex justify-center items-center text-[40px]'>Get In Touch</h2>

        <form action="">
            <div className='input-group'>
              <div className='input-box'>
                <input type="text" placeholder='Full Name'/>
                <input type="email" placeholder='Enter Email'/>
              </div>

              <div className='input-box'>
                 <input type="number" placeholder='Enter Phone Number'/>
                 <input type="text" placeholder='subject'/>
              </div>
            </div>

            <div className='input-group-2'>
              <textarea name="" id="" cols={20} rows={10} placeholder='Your Message'></textarea>
              <input type="submit" value={'send message'} className='btn'/>
            </div>
        </form>
      </section>

      <Footer/>
    </div>
  )
}

export default Contact
