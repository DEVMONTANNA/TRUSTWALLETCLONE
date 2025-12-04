import React from 'react'
import TrustLogo from "../../public/trustmainlogo.png"

const Footer = () => {
  return (
    <>
   <div className='w-full p-6 sm:p-8 bg-blue-600 flex items-center justify-center'>
  <div className='bg-[white] border-[black] p-6 sm:p-8 lg:p-10 rounded-xl w-full '>
    
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6 lg:gap-8'>
      
      <div className='sm:col-span-2 lg:col-span-4 xl:col-span-1 flex items-start '>
        <img src={TrustLogo} alt="Trust Wallet Logo" className=' h-8 lg:h-10' />
      </div>

      <div>
        <ul className="text-black font-verdana"> 
          <p className="font-semibold mb-4 text-lg">Wallet</p>
          <ol className="space-y-2 text-black">
            <li className="hover:text-black cursor-pointer transition-colors">Mobile App</li>
            <li className="hover:text-black cursor-pointer transition-colors">Browser Extension</li>
          </ol>
        </ul>
      </div>


      <div>
        <ul className="text-black font-verdana"> 
          <p className="font-semibold mb-4 text-lg">Features</p>
          <ol className="space-y-2 text-black">
            <li className="hover:text-black cursor-pointer transition-colors">Buy Crypto</li>
            <li className="hover:text-black cursor-pointer transition-colors">Swaps</li>
            <li className="hover:text-black cursor-pointer transition-colors">Staking</li>
            <li className="hover:text-black cursor-pointer transition-colors">NFTs</li>
            <li className="hover:text-black cursor-pointer transition-colors">Security</li>
            <li className="hover:text-black cursor-pointer transition-colors">SWIFT: Smart Contract Wallet</li>
          </ol>
        </ul>
      </div>

      <div>
        <ul className="text-black font-verdana"> 
          <p className="font-semibold mb-4 text-lg">Build</p>
          <ol className="space-y-2 text-black">
            <li className="hover:text-black cursor-pointer transition-colors">Developer Docs</li>
            <li className="hover:text-black cursor-pointer transition-colors">Wallet Core</li>
            <li className="hover:text-black cursor-pointer transition-colors hover:underline ">Submit DApp</li>
            <li className="hover:text-black cursor-pointer transition-colors hover:underline ">Get Assets Listed</li>
          </ol>
        </ul>
      </div>

      <div>
        <ul className="text-black font-verdana"> 
          <p className="font-semibold mb-4 text-lg">Support</p>
          <ol className="space-y-2 text-black ">
            <li className="hover:text-black cursor-pointer transition-colors hover:underline ">FAQs</li>
            <li className="hover:text-black cursor-pointer transition-colors hover:underline ">Contact Us</li>
          </ol>
        </ul>
      </div>

      <div>
        <ul className="text-black font-verdana"> 
          <p className="font-semibold mb-4 text-lg">Company</p>
          <ol className="space-y-2 text-black">
            <li className="hover:text-black cursor-pointer transition-colors hover:underline ">About Us</li>
            <li className="hover:text-black cursor-pointer transition-colors hover:underline ">Careers</li>
            <li className="hover:text-black cursor-pointer transition-colors hover:underline ">Blog</li>
          </ol>
        </ul>
      </div>

      <div className='sm:col-span-2 lg:col-span-2'>
        <ul className="text-black font-verdana"> 
          <p className="font-semibold mb-4 text-lg">Legal</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-black">
            <li className="hover:text-black cursor-pointer transition-colors hover:underline ">Terms of Service</li>
            <li className="hover:text-black cursor-pointer transition-colors hover:underline ">Privacy Notice</li>
            <li className="hover:text-black cursor-pointer transition-colors hover:underline ">Cookie Preferences</li>
            <li className="hover:text-black cursor-pointer transition-colors hover:underline ">Cookie Notice</li>
            <li className="hover:text-black cursor-pointer transition-colors hover:underline ">Press Kit</li>
          </ol>
        </ul>
      </div>

    </div>

    <div className='mt-8 pt-6 border-t border-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4'>
      <div className='text-black text-sm'>
        © 2025 DEVMONTANNA. All rights reserved.
      </div>
     <div className='flex space-x-3'>
  <div className='w-8 h-8 bg-[black] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#1a8cd8] transition-colors'>
    <i className="fab fa-twitter text-white text-sm"></i>
  </div>
  
  <div className='w-8 h-8 bg-[black] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#4752c4] transition-colors'>
    <i className="fab fa-discord text-white text-sm"></i>
  </div>
  
  <div className='w-8 h-8 bg-[black] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0077b3] transition-colors'>
    <i className="fab fa-telegram text-white text-sm"></i>
  </div>
  
  <div className='w-8 h-8 bg-[black] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#555] transition-colors'>
    <i className="fab fa-github text-white text-sm"></i>
  </div>
  
  <div className='w-8 h-8 bg-[black] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#cc0000] transition-colors'>
    <i className="fab fa-youtube text-white text-sm"></i>
  </div>
</div>
    </div>

  </div>
</div>
    </>

  )
}

export default Footer