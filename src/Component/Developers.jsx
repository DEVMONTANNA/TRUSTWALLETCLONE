import React, {useState} from 'react'
import Juanimg from "../../public/juanimg.avif"
import Harryimg from "../../public/harryimg.avif"
import Button from './Button';



const Developers = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const imageData = [
    { src: Juanimg, name: "Juan Smith", role: "Frontend Developer" , about:"Trust Wallet's dApp browser made my DeFi journey smooth. "},
    { src: Juanimg, name: "Sarah Johnson", role: "UI/UX Designer",  about:"The intuitive interface helped me explore DeFi confidently." },
    { src: Harryimg, name: "Harry Wilson", role: "Backend Developer", about:"Started with small amounts, learned quickly. Trust Wallet's browser is the perfect DeFi" },
    { src: Juanimg, name: "Emily Brown", role: "Full Stack Developer", about:"Hands-on DeFi learning made easy. Test protocols safely and build confidence with Trust" }
  ];
  return (
    <>
    <div className='lg:pl-[50px] p-[20px]'>
        
        <h2 className='font-[verdana] font-semibold text-[25px] lg:w-[30%] w-[100%] p-2  '>Enjoy a Web3 experience powered by community</h2>
        <h2 className='font-medium font-[verdana] lg:text-[20px] text-[17px] lg:w-[50%] w-[100%] p-2  mt-[15px]'>Join our vibrant and diverse community to learn about the power of self-custody, crypto, and Web3.</h2>
    </div>

<div className='flex  justify-center items-center'>
   <div className='lg:pl-[60px] p-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-between items-center mt-[30px] mb-[50px] w-full'>
      {imageData.map((item, index) => (
        <div 
          key={index}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          
          <div className={`
            absolute lg:top-[405px] top-[500px]  w-full left-1/2 transform -translate-x-1/2 -translate-y-full overflow-x-hidden
            bg-black bg-opacity-80 text-white px-3 py-2 rounded-[17px] text-sm
            transition-all duration-300 ease-in-out z-10 whitespace-nowrap
            ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
          `}>
            <div className="font-semibold">{item.name}</div>
            <div className="text-xs text-gray-300">{item.role}</div>
            <div className="text-xs text-gray-300 overflow-hidden">{item.about}</div>
          </div>

        
          <img 
            src={item.src} 
            alt="developerimage" 
            className='lg:w-full rounded-[25px] hover:cursor-pointer transition-transform duration-300 group-hover:scale-105'
          />
        </div>
      ))}
    </div>
</div>
<a href='https://t.me/trustwallet'>
     <div className=' lg:p-[40px] p-[20px] mt-[-30px]'>
                <Button
                  className="border  bg-[blue] hover:cursor-pointer text-white px-4 sm:px-6 py-3 rounded-full   text-center  flex items-center justify-center gap-3"
                  textValue="Join our community on telegram"
                  textClassName="text-sm sm:text-base md:text-[16px]  font-medium whitespace-nowrap"
                />
              </div>
</a>



    </>
  )
}

export default Developers