import React, { useState } from "react";
import Button from "./Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-[white] text-white p-4 md:p-7 fixed w-full top-0 z-10">
        <div className="container   flex justify-between items-center">
          <a href="/">
            <img
              src="trustmainlogo.png"
              alt="logo"
              className="w-40 "
            />
          </a>

          <button
            className="block lg:hidden text-black mt-[-10px] md:mt-[-20px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i
              className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl `}
            ></i>
          </button>

          <ul className="hidden lg:flex items-center space-x-6">
            <li>
              <a href="#" className="hover:text-gray-400 text-[black]">
                Wallet
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[black]">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[black]">
                Build
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[black]">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[black]">
                About
              </a>
            </li>
            <li>
              <Button
                textValue="Language"
                icon={
                  <i className="fas fa-globe text-blue-500 group-hover:text-white transition-colors"></i>
                }
                className={
                  "flex items-center gap-3 group bg-[white] border border-[blue] text-[blue] px-5 py-1 rounded-[20px] hover:bg-blue-600 hover:text-[white]"
                }
                textClassName={"text-[blue] group-hover:text-white font-semibold"}
              />
            </li>
            <li>
              <Button
                textValue="Download"
                className={
                  "flex items-center gap-3 group bg-[blue] text-[white] px-5 py-[6px] rounded-[20px] "
                }
                textClassName={"text-[white]  font-semibold"}
              />
            </li>
          </ul>

          <ul
            className={`lg:hidden absolute top-16 left-0 w-full bg-white p-4 transition-all duration-300 ease-in-out ${
              isOpen
                ? "grid grid-rows-5 gap-4 opacity-100 visible max-h-[80vh]"
                : "opacity-0 invisible max-h-0"
            }`}
          >
            <li>
              <a href="#" className="hover:text-gray-400 text-[black] block">
                Wallet
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[black] block">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[black] block">
                Build
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[black] block">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[black] block">
                About
              </a>
            </li>

            <div className=" flex justify-center items-center p-[13px]">
              {" "}
              <li className="w-[50%]">
                <Button
                  textValue="Language"
                  icon={
                    <i className="fas hover:cursor-pointer  fa-globe text-blue-500 group-hover:text-white transition-colors"></i>
                  }
                  className={
                    "flex items-center gap-3 group bg-[white] border-[2px] border-[blue] text-[blue] p-[10px] rounded-[20px] hover:bg-blue-600 hover:text-[white] w-full justify-center"
                  }
                  textClassName={
                    "text-[blue]  group-hover:text-white font-bold"
                  }
                />
              </li>
              <li className="ml-[15px] w-[50%]">
                <Button
                  textValue="Download"
                  className={
                    "flex hover:cursor-pointer items-center gap-3 group bg-[blue] text-[white] p-[10px] rounded-[20px] hover:text-[black] w-full justify-center"
                  }
                  textClassName={
                    "text-[white] group-hover:text-black font-bold"
                  }
                />
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
