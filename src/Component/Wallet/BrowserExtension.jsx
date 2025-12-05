import React, {useState, useEffect} from 'react'
import Image from "../../../public/pcimg.png"
import Header from '../Header'
import Button from '../Button'
import Footer from '../Footer'

const BrowserExtension = () => {
const [visibleCount, setVisibleCount] = useState(30); // Start with 24 items (4 per column × 6 columns)

const handleShowMore = () => {
  // Increase by 24 more items each click (adds 4 more rows)
  setVisibleCount(prev => prev + 90);
};
const handleShowLess = () => {
  // Increase by 24 more items each click (adds 4 more rows)
  setVisibleCount(prev => prev - 100);
};

  const [data, setData] = useState();
  async function fetchData() {
    try {
      const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

  }
 useEffect(() => {
  // Initial fetch
  fetchData();
  
  // // Set up interval to fetch every 1 second
  // const intervalId = setInterval(() => {
  //   fetchData();
  // }, 10000); // 1000ms = 1 second
  
  // Cleanup function to clear interval when component unmounts
  // return () => {
  //   clearInterval(intervalId);
  // };
}, []);

  return (
    <div>

<div>
  <Header/>
</div>

<div className='w-full flex justify-center items-center mt-[100px] p-[20px]'>
  <div className='w-full lg:w-[80%] flex flex-col lg:flex-row items-center justify-between p-[20px] gap-8'>
    <div className='w-full lg:w-1/2 flex flex-col justify-center'>
      <p className='text-[40px] md:text-[55px] font-bold font-poppins leading-tight'>
        Explore Web3 <br/> in your browser
      </p>
      <p className='text-[16px] md:text-[18px] mt-4 font-poppins text-gray-700'>
        <p className='text-[16px] md:text-[18px]  font-poppins text-gray-700'>Our Browser Extension is your secure crypto wallet</p> 
        <p className='text-[16px] md:text-[18px]  font-poppins text-gray-700'>and gateway to thousands of Web3 dApps. Swap </p> 
        <p className='text-[16px] md:text-[18px]  font-poppins text-gray-700'>tokens, play games, earn rewards, and more.</p>
      </p>
      <Button
        textValue="Download extensions"
        className={
          "w-fit p-[12px] px-6 font-bold items-center mt-6 justify-center group bg-[blue] border hover:cursor-pointer text-white rounded-[50px]  hover:text-white transition-colors"
        }
      />
    </div>
    
    <div className='w-full lg:w-1/2 flex justify-center items-center'>
      <img 
        src={Image} 
        alt="pcimage" 
        className='max-w-full h-auto lg:max-w-[600px] object-contain'
      />
    </div>
  </div>
</div>
<div>
  <p className='text-center text-[23px]  font-semibold  font-poppins  text-[black] '>The Trust Wallet Browser Extension works on…</p>
</div>
    <div className='w-full flex justify-center  items-center p-6'>
  <div className='w-full lg:w-[80%] bg-blue-600 rounded-xl shadow-lg p-6'>
    <h2 className='text-2xl font-bold text-white mb-6 text-center'>Cryptocurrency Market</h2>
    



  <div className='w-full  bg-[white] rounded-xl shadow-lg p-6'>
    <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>Top Cryptocurrencies</h2>
    
    {data && (
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
        {data.slice(0, visibleCount).map((coin, index) => (
          <div 
            key={coin.id || index} 
            className='flex flex-col items-center p-3 hover:cursor-pointer rounded-lg hover:bg-gray-50 hover:shadow-md transition-all'
          >
            {/* Logo */}
            <img 
            loading='lazy'
              src={coin.image} 
              alt={coin.symbol} 
              className='w-10   h-10 md:w-10 md:h-10 mb-2'
            />
            
            {/* Name and Symbol */}
            <div className='text-center'>
              
              <p className='text-[14px] font-poppins font-semibold text-black uppercase'>
                {coin.symbol}
              </p>
            </div>
            
            {/* Price */}
            <div className='mt-2 text-center'>
              <p className='font-poppins font-semibold text-gray-800 text-[14px]'>
                ${coin.current_price < 1 
                  ? coin.current_price.toFixed(4) 
                  : coin.current_price.toFixed(2)}
              </p>
              <p className={`text-xs ${coin.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {coin.price_change_percentage_24h >= 0 ? '↗' : '↘'} 
                {Math.abs(coin.price_change_percentage_24h).toFixed(1)}%
              </p>
            </div>
           
          </div>
        ))}
      </div>
    )}
    
    {/* Show More Button */}
    {data && visibleCount < data.length && (
      <div className='mt-8 text-center'>
        <button
          onClick={handleShowMore}
          className='px-6 py-3 hover:cursor-pointer border border-[blue] rounded-[25px]  bg-[white] text-[blue] font-medium  hover:text-[white] hover:bg-[blue] transition-colors shadow-md hover:shadow-lg'
        >
        View all networks
        </button>
        
        <p className='text-gray-500 text-sm mt-2'>
          Showing {visibleCount} of {data.length} cryptocurrencies
        </p>
      </div>
    )}
    {data && visibleCount > data.length && (
      <div className='mt-8 text-center'>
        <button
          onClick={handleShowLess}
          className='px-6 py-3 hover:cursor-pointer border border-[blue] rounded-[25px]  bg-[white] text-[blue] font-medium  hover:text-[white] hover:bg-[blue] transition-colors shadow-md hover:shadow-lg'
        >
        Hide all networks
        </button>
        
        <p className='text-gray-500 text-sm mt-2'>
          Showing {visibleCount} of {data.length} cryptocurrencies
        </p>
      </div>
    )}
    
    {data && visibleCount >= data.length && (
      <div className='mt-6 text-center'>
        <p className='text-gray-500 text-sm'>
          All {data.length} cryptocurrencies displayed
        </p>
      </div>
    )}
  </div>
</div>
  </div>

  <Footer/>
</div>
  
  )
}

export default BrowserExtension