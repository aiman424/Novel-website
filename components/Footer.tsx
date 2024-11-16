import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#ddaa99] text-[#574157] py-6 text-center">
    <div className="container mx-auto px-4">
      <p className="font-[Rye] text-[24px] text-[#974257]">Aiman&apos;s Novel House</p>
      
      <p className="text-[16px] mt-2">
        A place for book lovers, storytellers, and all those who find joy in the world of novels.
      </p>

      <div className="mt-4">
        <p className="text-[15px]">Contact us at: <a href="mailto:aimanrizwan424@gmail.com" className="text-[#944c5e] underline">contact@aimansnovelhouse.com</a></p>
        <p className="text-[15px]">Phone: <a href="tel:+1234567890" className="text-[#9b475c] underline">+123-456-7890</a></p>
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#443344] hover:text-[#af5d72]">
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#443344] hover:text-[#af5d72]">
          Twitter
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#443344] hover:text-[#af5d72]">
          Instagram
        </a>
      </div>

      <p className="mt-4 text-[13px]">&copy; {new Date().getFullYear()} Aiman&apos;s Novel House. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
