import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Tracking from "../../public/tracking.svg";
import Telescope from "../../public/telescope.svg";
import Helmet from "../assets/helmet.svg";
import Hand from "../../public/hand.svg";
import Trust from "../../public/trust.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
      {mode ? (
        <nav className="bg-[black] text-white p-4 md:p-7 fixed w-full top-0 z-10">
          <div className="container flex justify-between items-center">
            <a href="/">
              <img
                loading="lazy"
                src="trustmainlogo.png"
                alt="logo"
                className="w-40"
              />
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
              <button>
                <a href="#" className="hover:text-gray-400">
                  Wallet
                </a>
              </button>
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
                <Link to="/MobileApp"
                 className="hover:text-gray-400 block py-2">
                  Wallet
                </Link>
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
              onClick={() => setIsOpen(true)}
            >
              <i
                className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}
              ></i>
            </button>

            <ul className="hidden lg:flex items-center space-x-6">
              {activeDropdown === "wallet" && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  onMouseEnter={() => setActiveDropdown("wallet")}
                  className="absolute overflow-y-auto overflow-x-hidden justify-between bg-[white] text-[black] z-50 w-[60vw] lg:w-[100%] max-h-[50vh] mt-10 shadow-2xl backdrop-blur-lg flex left-1/2 transform -translate-x-1/2 top-15 p-[20px] rounded-2xl animate-dropdown"
                >
                  <div className="w-[35%] flex items-center  p-4">
                    <img loading="lazy" src={Tracking} />
                  </div>

                  <div className="w-[60%]  p-4  mx-4">
                    <div className="space-y-4 flex  justify-between">
                      <div className="flex hover:underline items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white"
                            >
                              <rect
                                x="3"
                                y="3"
                                width="18"
                                height="18"
                                rx="2"
                                ry="2"
                              />
                              <path d="M3 9h18" />
                              <path d="M9 21V9" />
                              <circle cx="18" cy="6" r="1" />
                              <circle cx="15" cy="6" r="1" />
                              <circle cx="12" cy="6" r="1" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4 font-poppins">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                           <Link to="/MobileApp">
                            <p className="text-black text-sm mt-1 ">
                              The world of web 3 in our wallet
                            </p>
                          </Link>
                        </div>
                      </div>

                      <div className="flex  hover:underline items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Browser Extension
                          </p>
                           <Link to="/BrowserExtension">
                            <p className="text-black text-sm mt-1 text-underline">
                              An optimized web 3 experience for desktop
                            </p>
                         </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeDropdown === "features" && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  onMouseEnter={() => setActiveDropdown("features")}
                  className="absolute overflow-y-auto overflow-x-hidden justify-between bg-[white] text-[black] z-50 w-[60vw] lg:w-[100%] max-h-[60vh] mt-9 shadow-2xl backdrop-blur-lg flex left-1/2 transform -translate-x-1/2 top-15 p-[20px] rounded-2xl animate-dropdown"
                >
                  <div className="w-[35%]  p-4">
                    <img loading="lazy" src={Telescope} />
                  </div>

                  <div className="w-[60%]  p-4  mx-4">
                    <div className="space-y-4 grid grid-cols-2 grid-rows-3 justify-between">
                      <div className="flex items-center p-4  hover:underline   rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0 ">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white"
                            >
                              <path d="M8 7l4-4 4 4" />
                              <path d="M12 3v10" />
                              <path d="M16 17l-4 4-4-4" />
                              <path d="M12 21v-10" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black hover:decoration-wavy transition-colors">
                            Swap
                          </p>
                          <a href="https://trustwallet.com/swap">
                            <p className="text-black text-sm mt-1 ">
                              Swap securely and seamlessly
                            </p>
                          </a>
                        </div>
                      </div>

                      <div className="flex hover:underline items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              width="24"
                              className="text-white"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M12 2L2 7l10 5 10-5-10-5z" />
                              <path d="M2 17l10 5 10-5" />
                              <path d="M2 12l10 5 10-5" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold hover:decoration-wavy text-black  transition-colors">
                            Staking
                          </p>
                          <a href="https://trustwallet.com/staking">
                            <p className="text-black text-sm mt-1 ">
                              Earn crypto rewards while securing networks
                            </p>
                          </a>
                        </div>
                      </div>
                      <div className="flex hover:underline items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white"
                            >
                              <rect
                                x="3"
                                y="3"
                                width="18"
                                height="18"
                                rx="2"
                                ry="2"
                              />
                              <circle cx="8.5" cy="8.5" r="1.5" />
                              <polyline points="21 15 16 10 5 21" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            NFTs
                          </p>
                          <a href="https://trustwallet.com/nft">
                            <p className="text-black text-sm mt-1 ">
                              Explore the world of NTFs
                            </p>
                          </a>
                        </div>
                      </div>
                      <div className="flex hover:underline  items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white"
                            >
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Security
                          </p>
                          <a href="https://trustwallet.com/security">
                            <p className="text-black text-sm mt-1 text-underline">
                              Learn how we keep your assets and Web3
                            </p>
                          </a>
                        </div>
                      </div>
                      <div className="flex hover:underline  items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 8v8" />
                              <path d="M8 12h8" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Buy crypto
                          </p>
                          <a href="https://trustwallet.com/buy-crypto">
                            <p className="text-black text-sm mt-1 text-underline">
                              Buy crypto in under 5 minutes
                            </p>
                          </a>
                        </div>
                      </div>
                      <div className="flex hover:underline items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 8v8" />
                              <path d="M8 12h8" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            SWIFT: Smart Contract wallet
                          </p>
                          <a href="https://trustwallet.com/swift">
                            <p className="text-black text-sm mt-1 ">
                              Explore Web3 easily with account
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeDropdown === "build" && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  onMouseEnter={() => setActiveDropdown("build")}
                  className="absolute overflow-y-auto overflow-x-hidden justify-between bg-[white] text-[black] z-50 w-[60vw] lg:w-[100%] max-h-[50vh] mt-8 shadow-2xl backdrop-blur-lg flex left-1/2 transform -translate-x-1/2 top-15 p-[20px] rounded-2xl animate-dropdown"
                >
                  <div className="w-[35%]  p-4">
                    <img loading="lazy" src={Helmet} />
                  </div>

                  <div className="w-[60%]  p-4  mx-4">
                    <div className="space-y-4 grid grid-cols-2 grid-rows-2 justify-between">
                      <div className="flex hover:underline  items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white"
                            >
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <polyline points="14,2 14,8 20,8" />
                              <line x1="16" y1="13" x2="8" y2="13" />
                              <line x1="16" y1="17" x2="8" y2="17" />
                              <polyline points="10,9 9,9 8,9" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Developer Docs
                          </p>
                          <a href="https://developer.trustwallet.com/developer/">
                            <p className="text-black text-sm mt-1 text-underline">
                              Get guides for building powerful Web3 applications
                            </p>
                          </a>
                        </div>
                      </div>

                      <div className="flex hover:underline  items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white"
                            >
                              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                              <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Wallet Core
                          </p>
                          <a href="https://developer.trustwallet.com/developer/wallet-core">
                            <p className="text-black text-sm mt-1 text-underline">
                              Open-source, mobile-focused , crypto wallet
                              library
                            </p>
                          </a>
                        </div>
                      </div>
                      <div className="flex hover:underline items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white"
                            >
                              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                              <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                              <polyline points="7.5 19.79 7.5 14.6 3 12" />
                              <polyline points="21 12 16.5 14.6 16.5 19.79" />
                              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                              <line x1="12" y1="22.08" x2="12" y2="12" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Submit dAPP
                          </p>
                          <a href="https://developer.trustwallet.com/developer/listing-new-dapps">
                            <p className="text-black text-sm mt-1 text-underline">
                              Get your dAPPs in front of millions
                            </p>
                          </a>
                        </div>
                      </div>
                      <div className="flex hover:underline  items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white"
                            >
                              <rect x="3" y="3" width="7" height="7" />
                              <rect x="14" y="3" width="7" height="7" />
                              <rect x="14" y="14" width="7" height="7" />
                              <rect x="3" y="14" width="7" height="7" />
                              <path d="M8 8v8" />
                              <path d="M16 8v8" />
                              <path d="M8 16h8" />
                              <path d="M8 8h8" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Get assets listed
                          </p>
                          <a href="https://developer.trustwallet.com/developer/listing-new-assets">
                            <p className="text-black text-sm mt-1 text-underline">
                              Elevate your assets's exposure
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeDropdown === "support" && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  onMouseEnter={() => setActiveDropdown("support")}
                  className="absolute overflow-y-auto overflow-x-hidden justify-between bg-[white] text-[black] z-50 w-[60vw] lg:w-[100%] max-h-[50vh] mt-2 shadow-2xl backdrop-blur-lg flex left-1/2 transform -translate-x-1/2 top-15 p-[20px] rounded-2xl animate-dropdown"
                >
                  <div className="w-[35%]  p-4">
                    <img loading="lazy" src={Hand} />
                  </div>

                  <div className="w-[60%]  p-4  mx-4">
                    <div className="space-y-4 flex  justify-between">
                      <div className="flex  hover:underline items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                              <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Faq
                          </p>
                          <a href="https://community.trustwallet.com/c/helpcenter/8">
                            <p className="text-black text-sm mt-1 text-underline">
                              Get answers to your most pressing questions
                            </p>
                          </a>
                        </div>
                      </div>

                      <div className="flex  hover:underline items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white"
                            >
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                              <path d="M13 8a3 3 0 1 0 0 6" />
                              <path d="M16 5a6 6 0 0 0-6 6" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Contact Us
                          </p>
                          <a href="https://support.trustwallet.com/en/support/home">
                            <p className="text-black text-sm mt-1 text-underline">
                              Reach out for personalized supports
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeDropdown === "about" && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  onMouseEnter={() => setActiveDropdown("about")}
                  className="absolute overflow-y-auto overflow-x-hidden justify-between bg-[white] text-[black] z-50 w-[60vw] lg:w-[100%] max-h-[65vh] mt-2 shadow-2xl backdrop-blur-lg flex left-1/2 transform -translate-x-1/2 top-15 p-[20px] rounded-2xl animate-dropdown"
                >
                  <div className="w-[35%] flex items-center  p-4">
                    <img loading="lazy" src={Trust} />
                  </div>

                  <div className="w-[60%]  p-4  mx-4">
                    <div className="space-y-1 grid grid-cols-2    grid-rows-4 justify-between">
                      <div className="flex  hover:underline items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white"
                            >
                              <path d="M8 6h8" />
                              <path d="M8 10h8" />
                              <path d="M8 14h6" />
                              <rect x="4" y="4" width="16" height="16" rx="2" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download">
                            <p className="text-black text-sm mt-1 text-underline">
                              The world of web 3 in oue wallet
                            </p>
                          </a>
                        </div>
                      </div>
                      <div className="flex  hover:underline items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white"
                            >
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                              <path d="M9 12l2 2 4-4" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download">
                            <p className="text-black text-sm mt-1 text-underline">
                              The world of web 3 in oue wallet
                            </p>
                          </a>
                        </div>
                      </div>

                      <div className="flex  hover:underline items-center p-4   rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white"
                            >
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <polyline points="14,2 14,8 20,8" />
                              <line x1="16" y1="13" x2="8" y2="13" />
                              <line x1="16" y1="17" x2="8" y2="17" />
                              <polyline points="10,9 9,9 8,9" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download">
                            <p className="text-black text-sm mt-1 text-underline">
                              The world of web 3 in oue wallet
                            </p>
                          </a>
                        </div>
                      </div>

                      <div className="flex  hover:underline items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white"
                            >
                              <rect
                                x="2"
                                y="2"
                                width="20"
                                height="20"
                                rx="2.18"
                                ry="2.18"
                              />
                              <line x1="7" y1="2" x2="7" y2="22" />
                              <line x1="17" y1="2" x2="17" y2="22" />
                              <line x1="2" y1="12" x2="22" y2="12" />
                              <line x1="2" y1="7" x2="7" y2="7" />
                              <line x1="2" y1="17" x2="7" y2="17" />
                              <line x1="17" y1="17" x2="22" y2="17" />
                              <line x1="17" y1="7" x2="22" y2="7" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download">
                            <p className="text-black text-sm mt-1 text-underline">
                              The world of web 3 in oue wallet
                            </p>
                          </a>
                        </div>
                      </div>

                      <div className="flex  hover:underline items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="fas fa-credit-card text-white text-lg"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download">
                            <p className="text-black text-sm mt-1 text-underline">
                              The world of web 3 in oue wallet
                            </p>
                          </a>
                        </div>
                      </div>
                      <div className="flex  hover:underline items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white"
                            >
                              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              <path d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Mobile App
                          </p>
                          <a href="https://trustwallet.com/download">
                            <p className="text-black text-sm mt-1 text-underline">
                              The world of web 3 in oue wallet
                            </p>
                          </a>
                        </div>
                      </div>

                      <div className="flex  hover:underline items-center p-4  rounded-2xl transition-all duration-300 group cursor-pointer border border-transparent ">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[blue] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-white"
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-black  transition-colors">
                            Browser Extension
                          </p>
                          <Link to="/browser-extension">
                            <p className="text-black text-sm mt-1 text-underline">
                              An optimized web 3 experience for desktop
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <li onMouseEnter={() => setActiveDropdown("wallet")}>
                <a href="#" className="hover:text-gray-600">
                  Wallet
                </a>
              </li>
              <li onMouseEnter={() => setActiveDropdown("features")}>
                <a href="#" className="hover:text-gray-600">
                  Features
                </a>
              </li>
              <li onMouseEnter={() => setActiveDropdown("build")}>
                <a href="#" className="hover:text-gray-600">
                  Build
                </a>
              </li>
              <li onMouseEnter={() => setActiveDropdown("support")}>
                <a href="#" className="hover:text-gray-600">
                  Support
                </a>
              </li>
              <li onMouseEnter={() => setActiveDropdown("about")}>
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
