import React from 'react'
import Phone from "../../public/phoneimgnew.avif"
import Button from './Button'
const BrowseDapps = () => {
  return (
   <div className='w-[100%] p-[20px] flex items-center justify-center'>
     <div className="bg-gradient-to-b lg:w-[92%] rounded-[30px] from-[#fff9a8] via-[#ffaefe] to-[#ffaefe] flex flex-col justify-center items-center p-[25px] ">  
      <div className='flex flex-col items-center justify-center gap-3'>
        <p className='lg:text-[3.2rem] md:text-[2rem] text-[2rem] font-semibold translate-2'>Browse a world of dApps</p>
     <p className=' text-[1.1rem] font-stretch-extra-condensed mt-[20px]'> Access Web3 and DeFi opportunities via our dApp browser</p>
     </div>

       <div className=' bg-[white] w-full lg:w-[85%] flex flex-col lg:flex-row items-center justify-between rounded-[30px] p-[10px] lg:p-[20px] mb-6 lg:mb-[30px] mx-auto'>
  <div className='w-[100%]  lg:w-1/2 lg:p-[20px] p-[3px] flex flex-col items-center lg:items-start justify-center'>
    <p  className='text-[25px] text-black  font-bold '>Deposit crypto easily from exchanges</p>
    <p  className='text-[16px] text-black mt-[15px] '>Take control of your crypto. Avoid complicated steps and deposit directly to your wallet from exchanges like Binance and Coinbase.</p>
    <Button
  className="border border-[blue] hover:bg-[blue] hover:text-[white] cursor-pointer text-black p-2 rounded-[23px] justify-center mt-[20px] flex items-center gap-3"
  textValue="Get started with deposits"
  textClassName="text-[16px] font-medium"
/>
  </div>
  <div className='w-[100%]  lg:w-1/2 flex flex-col items-center lg:items-end justify-center'>
     <img 
    src={Phone} 
    className='lg:w-[80%] w-[100%] ' 
    alt="phone" 
  /></div>
 
</div>
    </div>
   </div>
  )
}

export default BrowseDapps