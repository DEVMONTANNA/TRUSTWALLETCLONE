import React from 'react'
import Phone from "../../public/phoneimgnew.avif"
import Padlock from "../../public/padlock.svg"
import Security from "../../public/security.svg"
import Tracking from "../../public/tracking.svg"
import Button from './Button'

const BrowseDapps = () => {
  return (
    <>
      <div className='w-full px-5 sm:px-6 md:px-8 lg:px-4 py-8 md:py-12 flex items-center justify-center'>
        <div className=" lg:bg-gradient-to-b from-[#fff9a8] via-[#ffaefe] to-[#ffaefe] bg-[#ffaefe] w-full lg:w-[92%] max-w-7xl rounded-3xl lg:rounded-[30px] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">  
         
          <div className='flex flex-col w-full text-center lg:text-center px-2 sm:px-4'>
            <p className='text-3xl  font-[verdana] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.2rem] font-semibold leading-tight sm:leading-tight md:leading-tight'>
              Browse a world of dApps
            </p>
            <p className='text-base  font-[verdana] sm:text-lg md:text-xl lg:text-[1.1rem] mt-4 sm:mt-5 md:mt-6 lg:mt-[20px] max-w-4xl mx-auto leading-relaxed'>
              Access Web3 and DeFi opportunities via our dApp browser
            </p>
          </div>

          <div className='bg-white w-full lg:w-[85%] max-w-6xl flex flex-col lg:flex-row items-center justify-between rounded-3xl lg:rounded-[30px] p-4 sm:p-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12 lg:mb-[30px] mx-auto'>
            
            <div className='w-full lg:w-[50%] flex flex-col lg:items-start lg:pr-6 xl:pr-8'>
              <p className='text-xl font-[verdana] sm:text-2xl md:text-3xl lg:text-[25px] text-black font-bold leading-tight sm:leading-tight md:leading-tight'>
                Deposit crypto easily from exchanges
              </p>
              <p className='text-sm font-[verdana] sm:text-base md:text-[16px] text-black mt-3 sm:mt-4 md:mt-[15px] leading-relaxed'>
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
        <div className='z-[-10] lg:bg-gradient-to-b from-[#fff465] via-[#48ff91] to-[#48ff91] bg-[#fff465] w-full lg:w-[92%] max-w-7xl rounded-3xl lg:rounded-[30px] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 pt-24 lg:pt-28 pb-8 md:pb-12 lg:pb-16'>
            <div className='flex flex-col w-full text-center lg:text-center px-2 sm:px-4'>
            <p className='text-3xl font-[verdana] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.2rem] font-semibold leading-tight sm:leading-tight md:leading-tight'>
             Zero personal tracking           
           </p>
            <p className='lg:w-[66%] font-[verdana] w-full text-base sm:text-lg md:text-xl lg:text-[1.1rem] mt-4 sm:mt-5 md:mt-6 lg:mt-[20px] max-w-4xl mx-auto leading-relaxed'>
       We secure your wallet, but don't control or have access to your private keys or secret phrase - only you do.
            </p>
          </div>
            <div className='bg-white w-full lg:w-[90%] max-w-6xl flex flex-col lg:flex-row items-center justify-between rounded-3xl lg:rounded-[30px] p-4 sm:p-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12 lg:mb-[30px] mx-auto'>
            
            <div className='w-full lg:w-[40%] flex flex-col lg:items-start lg:pr-6 xl:pr-8'>
              <p className='text-xl  sm:text-2xl md:text-3xl lg:text-[25px] font-[verdana]  text-black font-bold leading-tight sm:leading-tight md:leading-tight'>
                True ownership of your crypto assets
              </p>
              <p className='text-sm sm:text-base md:text-[16px] font-[verdana]  text-black mt-3 sm:mt-4 md:mt-[15px] leading-relaxed'>
                We secure your wallet, but don't control or have access to your private keys or secret phrase - only you do.
              </p>
              <div className=' mt-4 sm:mt-5 md:mt-6 lg:mt-[20px]'>
                <Button
                  className="border border-blue-600 bg-[blue]  hover:cursor-pointer text-white px-4 sm:px-6 py-3 rounded-full w-full  text-center  flex items-center justify-center gap-3"
                  textValue="Get started "
                  textClassName="text-sm sm:text-base md:text-[16px]  font-medium whitespace-nowrap"
                />
              </div>
            </div>

            <div className='w-full  lg:w-[60%] flex flex-col items-center justify-center mt-6 lg:mt-0 lg:pl-6 xl:pl-8'>
              <img 
                src={Padlock} 
                className='p-[10px] lg:w-[60%] w-[90%]' 
                alt="phone showing crypto deposit interface" 
              />
            </div>
          </div>
         <div className='  w-full lg:w-[93%] max-w-6xl flex flex-col lg:flex-row items-center justify-between rounded-3xl lg:rounded-[30px] lg:p-4 p-3 sm:p-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12 lg:mb-[30px] mx-auto gap-4 sm:gap-6 lg:gap-8'>
  

  <div className='bg-white lg:w-[30%] w-full flex flex-col items-center justify-start p-4 lg:h-[350px] rounded-[25px]'>
    <p className=' text-[20px] mb-4 font-[verdana]'>Added security with encryption</p>
    <img src={Padlock} alt="padlock icon" className='w-[50%] max-w-[120px] mt-[30px]'/>
    <p className=' mt-[45px] font-[verdana] text-[15px]'>Use our Encrypted Cloud Backup for increased wallet security.</p>
  </div>

 
 <div className='bg-white lg:w-[30%] w-full flex flex-col items-center justify-start p-4 lg:h-[350px] rounded-[25px]'>
    <p className='text-[20px] font-[verdana] mb-4'>Zero personal tracking</p>
    <img src={Security} alt="padlock icon" className='w-[50%] max-w-[120px] mt-[50px]'/>
    <p className=' mt-[60px] font-[verdana] text-[15px]'>We don't track any personal information, including your IP address or balances.</p>
  </div>

  <div className='bg-white lg:w-[30%] w-full flex flex-col items-center justify-start p-4 lg:h-[350px] rounded-[25px]'>
    <p className='text-[20px] font-[verdana] mb-4'>Proactive alerts for risky transactions</p>
    <img src={Tracking} alt="padlock icon" className='w-[33%] max-w-[120px] mt-[30px]'/>
    <p className=' mt-[45px] font-[verdana] text-[15px]'>Stay safe with alerts for risky address and dApp connections.</p>
  </div>


</div>
              <div className=' mt-4 sm:mt-5 md:mt-6 lg:mt-[20px]'>
                <Button
                  className="border border-[black] bg-[transparent] hover:cursor-pointer text-black px-4 sm:px-6 py-3 rounded-full w-full  text-center  flex items-center justify-center gap-3"
                  textValue="Learn more about privacy & security"
                  textClassName="text-sm sm:text-base md:text-[16px]  font-medium whitespace-nowrap"
                />
              </div>
        </div>
      </div>
    </>
  )
}

export default BrowseDapps