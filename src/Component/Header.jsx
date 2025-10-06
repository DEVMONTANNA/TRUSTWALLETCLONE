import React, { useState } from "react";
import Button from "./Button";
import Tracking from "../../public/tracking.svg";
import Telescope from "../../public/telescope.svg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState(false);
  const [walletHover, setWalletHover] = useState(false);
  const [featuresHover, setFeaturesHover] = useState(false);
  const [buildHover, setBuildHover] = useState(false);
  const [supportHover, setSupportHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);

  return (
    <>
      {mode ? (
        <nav className="bg-[black] text-white p-4 md:p-7 fixed w-full top-0 z-10">
          <div className="container flex justify-between items-center">
            <a href="/">
              <img src="trustmainlogo.png" alt="logo" className="w-40" />
            </a>

            <button
              className="block lg:hidden text-white mt-[-10px] md:mt-[-20px]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i
                className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}
              ></i>
            </button>

            <ul className="hidden lg:flex items-center space-x-6">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Wallet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Build
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <button
                  onClick={() => setMode(false)}
                  className="text-[white] hover:text-yellow-300"
                >
                  <i className="fas fa-sun"></i>
                </button>
              </li>
              <li>
                <Button
                  textValue="Language"
                  icon={
                    <i className="fas fa-globe text-blue-400 group-hover:text-white transition-colors"></i>
                  }
                  className={
                    "flex items-center gap-3 group bg-gray-800  text-white px-5 py-1 rounded-[20px] hover:bg-blue-600 hover:text-white"
                  }
                  textClassName={
                    "text-white group-hover:text-white font-semibold"
                  }
                />
              </li>
              <li>
                <Button
                  textValue="Download"
                  className={
                    "flex items-center gap-3 group bg-blue-600 text-white px-5 py-[6px] rounded-[20px] hover:bg-blue-700"
                  }
                  textClassName={"text-white font-semibold"}
                />
              </li>
            </ul>

            <ul
              className={`lg:hidden absolute top-16 left-0 w-full bg-gray-900 p-4 overflow-hidden 
                transition-all duration-500 ease-out
                ${
                  isOpen
                    ? "grid grid-rows-5 gap-4 opacity-100 visible max-h-[80vh] translate-y-0 shadow-lg"
                    : "opacity-0 invisible max-h-0 -translate-y-4"
                }`}
            >
              <li>
                <a href="#" className="hover:text-gray-400 block py-2">
                  Wallet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 block py-2">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 block py-2">
                  Build
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 block py-2">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 block py-2">
                  About
                </a>
              </li>
              <li className="flex justify-center items-center p-3">
                <button
                  onClick={() => setMode(false)}
                  className="text-yellow-400 hover:text-yellow-300 p-2"
                >
                  <i className="fas fa-sun text-xl"></i>
                </button>
              </li>
              <div className="flex justify-center items-center p-3 gap-3">
                <li className="w-[50%]">
                  <Button
                    textValue="Language"
                    icon={
                      <i className="fas fa-globe text-blue-400 group-hover:text-white transition-colors"></i>
                    }
                    className={
                      "flex items-center gap-3 group bg-gray-800 border border-blue-400 text-white p-[10px] rounded-[20px] hover:bg-blue-600 hover:text-white w-full justify-center"
                    }
                    textClassName={
                      "text-white group-hover:text-white font-bold"
                    }
                  />
                </li>
                <li className="w-[50%]">
                  <Button
                    textValue="Download"
                    className={
                      "flex items-center gap-3 group bg-blue-600 text-white p-[10px] rounded-[20px] hover:bg-blue-700 w-full justify-center"
                    }
                    textClassName={"text-white font-bold"}
                  />
                </li>
              </div>
            </ul>
          </div>
        </nav>
      ) : (
        <nav className="bg-white text-black p-4 md:p-7 fixed w-full top-0 z-10 ">
          <div className="container flex justify-between items-center">
            <a href="/">
              <img src="trustmainlogo.png" alt="logo" className="w-40" />
            </a>

            <button
              className="block lg:hidden text-black mt-[-10px] md:mt-[-20px]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i
                className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}
              ></i>
            </button>

            <ul className="hidden lg:flex items-center space-x-6">
              {walletHover && (
                <div
                  onMouseLeave={() => setWalletHover(false)}
                  className="absolute overflow-y-auto overflow-x-hidden justify-between bg-[white] text-[black] z-50 w-[60vw] lg:w-[100%] max-h-[65vh] mt-2 shadow-2xl backdrop-blur-lg flex left-1/2 transform -translate-x-1/2 top-15 p-[20px] rounded-2xl animate-dropdown"
                >
                  <div className="w-[35%]  p-4">
                    <img src={Tracking} />
                  </div>

                  <div className="w-[60%]  p-4  mx-4">
                    <div className="space-y-4 flex  justify-between">
                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            The world of web 3 in oue wallet
                          </p>
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Browser Extension
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            An optimized web 3 experience for desktop
                          </p></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
             
              {featuresHover && (
                <div
                  onMouseLeave={() => setFeaturesHover(false)}
                  className="absolute overflow-y-auto overflow-x-hidden justify-between bg-[white] text-[black] z-50 w-[60vw] lg:w-[100%] max-h-[65vh] mt-2 shadow-2xl backdrop-blur-lg flex left-1/2 transform -translate-x-1/2 top-15 p-[20px] rounded-2xl animate-dropdown"
                >
                  <div className="w-[35%]  p-4">
                    <img src={Telescope} />
                  </div>

                  <div className="w-[60%]  p-4  mx-4">
                    <div className="space-y-4 grid grid-cols-2 grid-rows-1  justify-between">
                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            The world of web 3 in oue wallet
                          </p>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            The world of web 3 in oue wallet
                          </p>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            The world of web 3 in oue wallet
                          </p>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            The world of web 3 in oue wallet
                          </p>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            The world of web 3 in oue wallet
                          </p>
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Browser Extension
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            An optimized web 3 experience for desktop
                          </p></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {buildHover && (
                <div
                  onMouseLeave={() =>setBuildHover(false)}
                  className="absolute overflow-y-auto overflow-x-hidden justify-between bg-[white] text-[black] z-50 w-[60vw] lg:w-[100%] max-h-[65vh] mt-2 shadow-2xl backdrop-blur-lg flex left-1/2 transform -translate-x-1/2 top-15 p-[20px] rounded-2xl animate-dropdown"
                >
                  <div className="w-[35%]  p-4">
                    <img src={Tracking} />
                  </div>

                  <div className="w-[60%]  p-4  mx-4">
                    <div className="space-y-4 grid grid-cols-2 grid-rows-2 justify-between">
                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            The world of web 3 in oue wallet
                          </p>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            The world of web 3 in oue wallet
                          </p>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            The world of web 3 in oue wallet
                          </p>
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Browser Extension
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            An optimized web 3 experience for desktop
                          </p></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {supportHover && (
                <div
                  onMouseLeave={() =>setSupportHover(false)}
                  className="absolute overflow-y-auto overflow-x-hidden justify-between bg-[white] text-[black] z-50 w-[60vw] lg:w-[100%] max-h-[65vh] mt-2 shadow-2xl backdrop-blur-lg flex left-1/2 transform -translate-x-1/2 top-15 p-[20px] rounded-2xl animate-dropdown"
                >
                  <div className="w-[35%]  p-4">
                    <img src={Tracking} />
                  </div>

                  <div className="w-[60%]  p-4  mx-4">
                    <div className="space-y-4 flex  justify-between">
                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            The world of web 3 in oue wallet
                          </p>
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Browser Extension
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            An optimized web 3 experience for desktop
                          </p></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {aboutHover && (
                <div
                  onMouseLeave={() =>setAboutHover(false)}
                  className="absolute overflow-y-auto overflow-x-hidden justify-between bg-[white] text-[black] z-50 w-[60vw] lg:w-[100%] max-h-[65vh] mt-2 shadow-2xl backdrop-blur-lg flex left-1/2 transform -translate-x-1/2 top-15 p-[20px] rounded-2xl animate-dropdown"
                >
                  <div className="w-[35%]  p-4">
                    <img src={Tracking} />
                  </div>

                  <div className="w-[60%]  p-4  mx-4">
                    <div className="space-y-4 grid grid-cols-2 grid-rows-4 justify-between">
                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            The world of web 3 in oue wallet
                          </p>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            The world of web 3 in oue wallet
                          </p>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            The world of web 3 in oue wallet
                          </p>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            The world of web 3 in oue wallet
                          </p>
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            The world of web 3 in oue wallet
                          </p>
                          </a>
                        </div>
                      </div>
                     

                      <div className="flex items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Browser Extension
                          </p>
                          <a href="https://trustwallet.com/download"><p className="text-black text-sm mt-1 text-underline">
                            An optimized web 3 experience for desktop
                          </p></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <li>
                <div
                  onMouseEnter={() => setWalletHover(true)}
                  // onMouseLeave={() => setHover(false)}

                  className="flex  relative hover:text-gray-600 items-center  cursor-pointer "
                >
                  <ol className="mr-2"> Wallet</ol>
                </div>
              </li>
              <li onMouseEnter={() => setFeaturesHover(true)}>
                <a href="#" className="hover:text-gray-600">
                  Features
                </a>
              </li>
              <li onMouseEnter={() => setBuildHover(true)}>
                <a href="#" className="hover:text-gray-600">
                  Build
                </a>
              </li>
              <li onMouseEnter={() => setSupportHover(true)}>
                <a href="#" className="hover:text-gray-600">
                  Support
                </a>
              </li>
              <li onMouseEnter={() => setAboutHover(true)}>
                <a href="#" className="hover:text-gray-600">
                  About
                </a>
              </li>
              <li>
                {/* <button
                  onClick={() => setMode(true)}
                  className="text-[black] hover:text-[black]"
                >
                  <i className="fas fa-moon"></i>
                </button> */}
              </li>
              <li>
                <Button
                  textValue="Language"
                  icon={
                    <i className="fas fa-globe text-blue-500 group-hover:text-white transition-colors"></i>
                  }
                  className={
                    "flex items-center gap-3 group bg-white border border-blue-500 text-blue-500 px-5 py-1 rounded-[20px] hover:bg-blue-500 hover:text-white"
                  }
                  textClassName={
                    "text-blue-500 group-hover:text-white font-semibold"
                  }
                />
              </li>
              <li>
                <Button
                  textValue="Download"
                  className={
                    "flex items-center gap-3 group bg-blue-500 text-white px-5 py-[6px] rounded-[20px] hover:bg-blue-600"
                  }
                  textClassName={"text-white font-semibold"}
                />
              </li>
            </ul>

            {/* Mobile Menu for Light Mode */}
            <ul
              className={`lg:hidden absolute top-16 left-0 w-full bg-white p-4 overflow-hidden 
                transition-all duration-500 ease-out shadow-lg
                ${
                  isOpen
                    ? "grid grid-rows-5 gap-4 opacity-100 visible max-h-[80vh] translate-y-0"
                    : "opacity-0 invisible max-h-0 -translate-y-4"
                }`}
            >
              <li>
                <a href="#" className="hover:text-gray-600 block py-2">
                  Wallet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600 block py-2">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600 block py-2">
                  Build
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600 block py-2">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600 block py-2">
                  About
                </a>
              </li>
              <li className="flex justify-center items-center p-3">
                <button
                  onClick={() => setMode(true)}
                  className="text-black hover:text-black p-2"
                >
                  <i className="fas fa-moon text-xl"></i>
                </button>
              </li>
              <div className="flex justify-center items-center p-3 gap-3">
                <li className="w-[50%]">
                  <Button
                    textValue="Language"
                    icon={
                      <i className="fas fa-globe text-blue-500 group-hover:text-white transition-colors"></i>
                    }
                    className={
                      "flex items-center gap-3 group bg-white border border-blue-500 text-blue-500 p-[10px] rounded-[20px] hover:bg-blue-500 hover:text-white w-full justify-center"
                    }
                    textClassName={
                      "text-blue-500 group-hover:text-white font-bold"
                    }
                  />
                </li>
                <li className="w-[50%]">
                  <Button
                    textValue="Download"
                    className={
                      "flex items-center gap-3 group bg-blue-500 text-white p-[10px] rounded-[20px] hover:bg-blue-600 w-full justify-center"
                    }
                    textClassName={"text-white font-bold"}
                  />
                </li>
              </div>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
