import React from 'react'
import Juanimg from "../../public/juanimg.avif"
import Harryimg from "../../public/harryimg.avif"



const Developers = () => {
  return (
    <>
    <div className='lg:pl-[50px] p-[20px]'>
        
        <h2 className='font-[verdana] font-semibold text-[25px] lg:w-[30%] w-[100%] p-2  '>Enjoy a Web3 experience powered by community</h2>
        <h2 className='font-medium font-[verdana] lg:text-[20px] text-[17px] lg:w-[50%] w-[100%] p-2  mt-[15px]'>Join our vibrant and diverse community to learn about the power of self-custody, crypto, and Web3.</h2>
    </div>

<div className='flex  justify-center items-center'>
   <div className='lg:pl-[6gcd 0px]  p-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-between items-center mt-[30px] mb-[50px] w-full '>
    <img src={Juanimg} alt="developerimage" className='lg:w-full  rounded-[25px] ' />
    <img src={Juanimg} alt="developerimage" className='lg:w-full  rounded-[25px] ' />
    <img src={Harryimg} alt="developerimage" className='lg:w-full  rounded-[25px] ' />
    <img src={Juanimg} alt="developerimage" className='lg:w-full  rounded-[25px] ' />
   </div>
</div>


    </>
  )
}

export default Developers