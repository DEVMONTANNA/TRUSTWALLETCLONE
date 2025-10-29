import React from 'react'
import Phone from "../../public/phoneimgnew.avif"
import Button from './Button'

const BrowseDapps = () => {
  return (
    <>
      <div className='w-full px-5 sm:px-6 md:px-8 lg:px-4 py-8 md:py-12 flex items-center justify-center'>
        <div className=" lg:bg-gradient-to-b from-[#fff9a8] via-[#ffaefe] to-[#ffaefe] bg-[#ffaefe] w-full lg:w-[92%] max-w-7xl rounded-3xl lg:rounded-[30px] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">  
         
          <div className='flex flex-col w-full text-center lg:text-center px-2 sm:px-4'>
            <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.2rem] font-semibold leading-tight sm:leading-tight md:leading-tight'>
              Browse a world of dApps
            </p>
            <p className='text-base sm:text-lg md:text-xl lg:text-[1.1rem] mt-4 sm:mt-5 md:mt-6 lg:mt-[20px] max-w-4xl mx-auto leading-relaxed'>
              Access Web3 and DeFi opportunities via our dApp browser
            </p>
          </div>

          <div className='bg-white w-full lg:w-[85%] max-w-6xl flex flex-col lg:flex-row items-center justify-between rounded-3xl lg:rounded-[30px] p-4 sm:p-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12 lg:mb-[30px] mx-auto'>
            
            <div className='w-full lg:w-[50%] flex flex-col lg:items-start lg:pr-6 xl:pr-8'>
              <p className='text-xl sm:text-2xl md:text-3xl lg:text-[25px] text-black font-bold leading-tight sm:leading-tight md:leading-tight'>
                Deposit crypto easily from exchanges
              </p>
              <p className='text-sm sm:text-base md:text-[16px] text-black mt-3 sm:mt-4 md:mt-[15px] leading-relaxed'>
                Take control of your crypto. Avoid complicated steps and deposit directly to your wallet from exchanges like Binance and Coinbase.
              </p>
              <div className='w-full mt-4 sm:mt-5 md:mt-6 lg:mt-[20px]'>
                <Button
                  className="border border-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer text-black px-4 sm:px-6 py-3 rounded-full w-full lg:w-[70%] text-center transition-colors duration-200 flex items-center justify-center gap-3"
                  textValue="Get started with deposits"
                  textClassName="text-sm sm:text-base md:text-[16px] font-medium whitespace-nowrap"
                />
              </div>
            </div>

            <div className='w-full lg:w-[50%] flex flex-col items-center justify-center mt-6 lg:mt-0 lg:pl-6 xl:pl-8'>
              <img 
                src={Phone} 
                className='p-[10px] w-full' 
                alt="phone showing crypto deposit interface" 
              />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full px-5 sm:px-6 md:px-8 lg:px-4 pb-8 md:pb-12 flex items-center justify-center -mt-20 lg:-mt-24'>
        <div className='z-[-10] lg:bg-gradient-to-b from-[#fff465] via-[#48ff91] to-[#fff465] bg-[#48ff91] w-full lg:w-[92%] max-w-7xl rounded-3xl lg:rounded-[30px] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 pt-24 lg:pt-28 pb-8 md:pb-12 lg:pb-16'>
          fhewjvbwerivb
        </div>
      </div>
    </>
  )
}

export default BrowseDapps