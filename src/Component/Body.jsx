import React, { useState, useEffect, use } from "react";
import Button from "./Button";
import Header from "./Header";
import RWAS from "../assets/RWAS.avif";
import Helmet from "../assets/helmet.svg";
import Mobiletoggleextension from "./Mobiletoggleextension";

const Home = () => {
  const [coin, setCoin] = useState([]);
  const [records, setRecords] = useState(coin);

  useEffect(() => {
    async function fetchPair() {
      const getCoins = localStorage.getItem("coins");
      const parsedCoins = JSON.parse(getCoins);
      setCoin(parsedCoins?.slice(0, 30));
      setRecords(parsedCoins?.slice(0, 30));

      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        if (!res.ok) {
          throw new Error("Error fetching pairs");
        }
        const convert_to_json = await res.json();
        localStorage.setItem("coins", JSON.stringify(convert_to_json));
        setCoin(convert_to_json?.slice(0, 30));
        console.log(convert_to_json);
      } catch (error) {
        console.error("Error", error);
      }
    }
    fetchPair();
  }, []);

  function filter(event) {
    const searchValue = event.target.value.toLowerCase();
    setRecords(coin?.filter((f) => f.name.toLowerCase().includes(searchValue)));
  }

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
              <Button
                textValue=""
                icon={
                  <i className="fas fa-globe text-[blue] animate-bounce  group-hover:text-white transition-colors "></i>
                }
                className={
                  "flex items-center gap-[7px] group bg-[white] border border-[blue] hover:border-none   text-[blue] p-[7px] rounded-[50px] hover:bg-blue-600 hover:text-[white]"
                }
                textClassName={"text-[blue] group-hover:text-white text-[13px]"}
                textValue2="Desktop App"
                text2ClassName={"text-[18px]"}
              />
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
              <span className="text-[blue]">200M</span> people
            </h5>
          </div>
          <div className="font-semibold lg:text-[24px] text-[20px]">
            <h3>Founded in</h3>
            <h4 className="text-center text-[blue]">2017</h4>
          </div>
          <div className="font-semibold lg:text-[24px] text-[20px]">
            <h3>Independently</h3>
            <h4 className="text-center text-[blue]">Audited</h4>
          </div>
          <div className="font-semibold lg:text-[24px] text-[20px]">
            <h3 className="text-center">ISO</h3>
            <h4 className="lg:text-[] text-center text-[blue]">Certified</h4>
          </div>
          <div className="font-semibold   lg:text-[24px] text-[20px] text-center grid col-span-full">
            <h3>Top reviews</h3>
            <h4 className="text-center text-[blue]">star</h4>
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
        <section id="COINTABLE" className="">
          <div className="flex   flex-col justify-center w-full ">
            <div className="flex flex-col items-center justify-center ">
              <div className="flex flex-col items-center justify-centerlg:p-[] p-[20px]">
                <p className="lg:text-[45px]  text-[28px] font-bold">
                  One Platform, Millions of Assets
                </p>
                <p className="lg:text-[19px] text-[18px] ">
                  As a leading self-custody multi-chain platform, we support
                  millions of assets across 100+
                </p>
                <p className="lg:text-[19px] text-[18px] ">
                  blockchains. From Bitcoin, Ethereum, and Solana, to Cosmos,
                  Optimism, and much more.
                </p>
              </div>

              <div className="w-full  flex flex-col justify-center items-center p-[5px]">
                <div className="w-full flex items-center justify-center mb-8">
                  <div className="relative w-full flex justify-center">
                    <div className="relative lg:w-[80%] w-full">
                      <input
                        type="text"
                        onChange={filter}
                        className="w-full rounded-full py-4 px-6 pl-14 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-300 bg-white text-gray-700"
                        placeholder="Search for any coin here"
                      />
                      <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg
                          
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl shadow-md lg:w-[80%] md:w-[80%] w-[100%] bg-[red] flex justify-center items-center">
                  {!records.length ? (
                    <div className="flex flex-col justify-center items-center w-full py-16 bg-white rounded-xl">
                      <div className="text-gray-400 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-center text-gray-500 text-xl font-medium">
                        No coins found
                      </h3>
                      <p className="text-center text-gray-400 mt-2">
                        Try adjusting your search terms
                      </p>
                    </div>
                  ) : (
                    <table className="min-w-full bg-white rounded-xl overflow-hidden">
                      <thead className="bg-[blue] text-white">
                        <tr>
                          <th className="py-4 px-6 text-left font-semibold">
                            Name
                          </th>
                          <th className="py-4 px-6 text-left font-semibold">
                            Symbol
                          </th>
                          <th className="py-4 px-6 text-center font-semibold lg:flex hidden lg:text-center">
                            Logo
                          </th>
                          <th className=" py-4 px-6  lg:items-center  font-semibold">
                            Price
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-gray-100">
                        {records.map((v, i) => (
                          <tr
                            key={i}
                            className="hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
                          >
                            <td className="py-4 px-6 font-medium text-gray-800">
                              <span className="hidden lg:inline">{v.name}</span>
                              <span className="lg:hidden">
                                {v.name.length > 10
                                  ? `${v.name.substring(0, 10)}...`
                                  : v.name}
                              </span>
                            </td>

                            <td className="py-4 px-6 lg:flex  hidden ">
                              <span className="lg:inline-flex  hidden items-center justify-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                {v.symbol.toUpperCase()}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-center">
                              <div className="flex justify-center">
                                <img
                                loading="lazy"
                                  src={v.image}
                                  alt={`${v.name} logo`}
                                  className="w-10 h-10 rounded-full shadow-sm"
                                />
                              </div>
                            </td>
                            <td className=" flex lg:items-center  py-4 px-6 font-medium text-gray-800">
                              {v.current_price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Mobiletoggleextension />
      </div>
    </>
  );
};

export default Home;
