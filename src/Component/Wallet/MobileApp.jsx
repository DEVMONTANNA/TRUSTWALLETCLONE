import React from 'react'
import Header from "../Header.jsx"
import { Link } from "react-router-dom";
import Button from "../Button.jsx";
import Footer from '../Footer.jsx';

const MobileApp = () => {
  return (
    <div>
        <div className=''>
            <Header/>
        </div>
    <div className='w-full justify-center mt-[150px] flex'>
  <div className='w-[85%] p-6 lg:p-[70px] rounded-[25px] bg-[blue] items-start text-white'>
    <div className='flex flex-col items-start'>
    <p className='text-[55px] mt-[5px] font-semibold font-poppins leading-[1.2]'>Download <br/> Trust Wallet</p>
        <p className='text-[19px] mt-[10px] font-poppins '>The Trust Wallet is available as a mobile app <br/> and desktop browser extension</p>
    </div>
  </div>
</div>
<div className='flex justify-center w-full mt-[20px] p-[20px]'>
  <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-rows-2 gap-4 p-4 w-[75%]  items-center'>

<a href='https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp&hl=en&gl=US'>
<div className='p-[60px] bg-white rounded-xl hover:cursor-pointer  flex flex-col shadow-lg hover:shadow-xl transition-shadow border border-gray-300'>
  <div className='text-green-500 text-[40px] mb-2'>📱</div>
  <p className='text-gray-800 font-semibold font-poppins text-[30px]'>Download for Andriod</p>
  <p className='text-gray-800   font-semibold font-poppins text-[19px]'>Get the wallet mobile app from Google Play.</p>
</div>
</a>

{/* AppStore */}
<a href='https://apps.apple.com/app/apple-store/id1288339409?mt=8' className='block'>

  <div className='p-8 md:p-[60px] bg-white rounded-xl hover:cursor-pointer flex flex-col shadow-lg hover:shadow-xl transition-shadow border border-gray-300'>
    <div className='text-gray-800 text-4xl md:text-[40px] mb-2'>🍎</div>
    <p className='text-gray-800 font-semibold font-poppins text-xl md:text-[30px]'>Download for iOS</p>
    <p className='text-gray-800 font-semibold font-poppins text-sm md:text-[19px] mt-2'>
      Get the wallet mobile app from App Store
    </p>
  </div>
</a>

<a href='https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph'>
<div className='p-[60px] bg-white rounded-xl hover:cursor-pointer flex flex-col shadow-lg hover:shadow-xl transition-shadow border border-gray-300'>
  <div className='text-yellow-500 text-[40px] mb-2'>🌐</div>
  <p className='text-gray-800 font-semibold font-poppins text-[30px]'>Download for Chrome</p>
  <p className='text-gray-800 font-semibold font-poppins text-[19px]'>Get the desktop Browser Extension from the Chrome web store</p>
</div>
</a>


<a href='https://trustwallet.com/download/apk'>
<div className='p-[60px] bg-white rounded-xl hover:cursor-pointer  flex flex-col shadow-lg hover:shadow-xl transition-shadow border border-gray-300'>
  <div className='text-purple-500 text-[40px] mb-2'>⚙️</div>
  <p className='text-gray-800 font-bold font-poppins text-[26px]'>Download APK for Andriod</p>
  <p className='text-gray-800 font-semibold font-poppins text-[19px]'>Get the wallet mobile app using Andriod APK</p>
</div>
</a>
  </div>
</div>
      <Footer/>
    </div>
  )
}

export default MobileApp