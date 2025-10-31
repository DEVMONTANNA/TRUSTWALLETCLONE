import React from "react";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import Button from "./Button";
import Header from "./Header";
import RWAS from "../assets/RWAS.avif";
import Helmet from "../assets/helmet.svg";
import Mobiletoggleextension from "./Mobiletoggleextension";
import CoinTable from "./CoinTable";
import BrowseDapps from "./BrowseDapps";
import Developers from "./Developers";
import Footer from "./Footer";

const Home = () => {


  async function connectWallet() {
    try {
      let retries = 0;
      const maxRetries = 10;

      while (typeof window.ethereum === "undefined" && retries < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        retries++;
      }
      // Check if MetaMask is available
      if (typeof window.ethereum === "undefined") {
        alert(
          "MetaMask not found. Please install or enable it in your browser."
        );
        return;
      }

      // Create a provider instance
      const provider = new ethers.BrowserProvider(window.ethereum);

      // Request account access
      const accounts = await provider.send("eth_requestAccounts", []);

      // Get signer and address
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const balance = await provider.getBalance(address);
      const network = await provider.getNetwork();

      console.log("Connected account details:", {signer});
      console.log("Connected User Address:", {address});
      console.log("Connected account:", {balance});
      console.log("Network:", network.name);

      // Format the balance to ETH
      const formattedBalance = ethers.formatEther(balance);
      console.log("Formatted balance:", formattedBalance, "ETH");

      alert(`Wallet connected: ${address}`);
    } catch (err) {
      console.error("Error connecting wallet:", err);
      alert("Failed to connect to MetaMask. Check console for details.");
    }
  }

  // async function connectWallet() {
  //   if (!window.ethereum) {
  //     alert("No MetaMask wallet found. Please install MetaMask to continue.");
  //     return;
  //   }
  //   const provider = new ethers.BrowserProvider(window.ethereum);
  //   try {
  //     await provider.send("eth_requestAccounts", []);
  //     const signer = provider.getSigner();
  //     console.log("Account:", await signer.getAddress());
  //   } catch (error) {
  //     alert("Failed to connect wallet.");
  //     console.error(error);
  //   }
  // }



  return (
    <>
      <Header />

              
      <div className="h-[100vh]    pt-[90px]">
        <div className="flex flex-col bg-[inherit] md:flex-row pt-[93px]">
          <div className="w-full lg:px-[50px]   px-[20px]  ">
            <h1 className="lg:text-6xl my-6  text-4xl font-bold  text-[black] leading-tight  ">
              True crypto ownership. Powerful Web3 experiences
            </h1>
            <h5 className="text-2xl my-6  text-[black]   leading-tight ">
              Unlock the power of your cryptocurrency assets and explore the
              world of Web3 with Trust Wallet.
            </h5>
            <div className="flex gap-4 lg:justify-start justify-center items-center ">
           
             <Button
                 
                textValue=""
                icon={
                  <i className="fas fa-globe text-[blue] animate-bounce  group-hover:text-white transition-colors "></i>
                }
                className={
                  "flex items-center  gap-[7px] group bg-[white] border border-[blue]    text-[blue] p-[7px] rounded-[50px]  hover:bg-blue-600  hover:border-none hover:text-[white]"
                }
                textClassName={"text-[blue] group-hover:text-white text-[13px]"}
                textValue2="Mobile App"
                text2ClassName={"text-[18px]"}
              />
              <Link to="/connectwallet">
              <Button
              // onClick={connectWallet}
               textValue=""
               className={
                  "flex items-center gap-[7px] group bg-[white] border border-[blue] hover:border-none   text-[blue] p-[8px] rounded-[50px] hover:bg-blue-600 hover:text-[white]"
                }
                textClassName={"text-[blue] group-hover:text-white text-[13px]"}
                textValue2="Connect Wallet"
                text2ClassName={"text-[18px]"}
              />
              </Link>
            </div>
          </div>
          <div className="flex   justify-center items-center w-full p-3">
            <img src="trustlogonew.png" alt="Image" className="w-[500px]" />
          </div>
        </div>

        <div className="lg:flex  md:grid-cols-4 md:items-center grid grid-cols-2 gap-y-8 gap-x-[15px]  md:gap-x-[0px] justify-around md:justify-between items-center p-[40px] mt-[20px]">
          <div className="font-semibold lg:text-[24px] text-[20px]">
            <h3 className="lg:text-center text-center">Trusted by</h3>
            <h5 className="lg:text-[] text-center">
              <span className="text-[blue] ">200M</span> people
            </h5>
          </div>
          <div className="font-semibold lg:text-[24px] text-[20px]">
            <h3 className="lg:text-[] text-center">Founded in</h3>
            <h4 className="text-center text-[blue]">2017</h4>
          </div>
          <div className="font-semibold lg:text-[24px] text-[20px]">
            <h3 className="lg:text-[] text-center">Independently</h3>
            <h4 className=" text-center text-[blue]">Audited</h4>
          </div>
          <div className="font-semibold lg:text-[24px] text-[20px]">
            <h3 className="text-center">ISO</h3>
            <h4 className="lg:text-[] text-center text-[blue]">Certified</h4>
          </div>
          <div className="font-semibold   lg:text-[24px] text-[20px] text-center grid col-span-full">
            <h3>Top reviews</h3>
            <h4 className="text-center text-[blue] ">⭐⭐⭐⭐⭐</h4>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="rounded-[15px] w-[85%] border-[1px] border-[black]"
            src={RWAS}
          />
        </div>
        <div className="flex  lg:items-center  lg:justify-center w-[100%]  lg:h-[400px] h-[820px]   mt-[20px]">
          <div className="lg:flex  block justify-center lg:w-[85%] lg:bg-[blue] bg-[#fff] w-[100%]   lg:p-[15px] p-[10px]  lg:h-[350px] h-[800px] mt-[0px]">
            <div className="lg:w-[50%] w-[100%] lg:p-[20px] p-[5px]  lg:text-[#fff] text-[black] ">
              <p className="font-bold lg:text-[30px] md:text-[40px] text-[30px]  ">
                Building on Trust
              </p>
              <p className="lg:text-[20px]  md:text-[30px]  text-[20px]  mt-[20px]">
                We know that working together as a community is better for
                everyone. Our platform enables blockchain developers to build
                their dApps and wallets natively and connect with millions of
                users, without having to worry about the low level
                implementation details.
              </p>
              <Button
                textValue="Check our developers  docs"
                className={
                  "flex  p-[9px] items-center mt-[20px] justify-center lg:w-[70%] gap-3 group bg-[white] border border-[blue]  text-[blue] rounded-[50px]  hover:bg-[black] hover:text-[white]"
                }
                textClassName={
                  "text-[blue]    group-hover:text-white text-[17px] text-center "
                }
                text2ClassName={"text-[18px]"}
              />
            </div>
            <div className="lg:w-[50%] w-[100%] lg:bg-[transparent] bg-[#fff]  lg:p-[20px] p-[23px] lg:mt-0 mt-[20px] flex justify-center">
              <img className="lg:w-[44%] md:w-[45%] w-[80%]" src={Helmet} />
            </div>
          </div>
        </div>
        <CoinTable/>
        <BrowseDapps />
        <Mobiletoggleextension />
        <Developers/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
