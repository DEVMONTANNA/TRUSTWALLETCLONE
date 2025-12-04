import React, { useState, useEffect,  } from "react";


const CoinTable = () => {
  const [coin, setCoin] = useState([]);
  const [records, setRecords] = useState(coin);
  const [allCoins, setAllCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

      useEffect(() => {
        async function fetchPair() {
          const getCoins = localStorage.getItem("coins");
          const parsedCoins = JSON.parse(getCoins);
    
          if (parsedCoins) {
            setCoin(parsedCoins?.slice(0, itemsPerPage));
            setRecords(parsedCoins?.slice(0, itemsPerPage));
            setAllCoins(parsedCoins); // Store all coins
          }
    
          try {
            const res = await fetch(
              "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            );
            if (!res.ok) {
              throw new Error("Error fetching pairs");
            }
            const convert_to_json = await res.json();
            localStorage.setItem("coins", JSON.stringify(convert_to_json));
    
            setCoin(convert_to_json?.slice(0, itemsPerPage));
            setRecords(convert_to_json?.slice(0, itemsPerPage));
            setAllCoins(convert_to_json); 
    
            console.log(convert_to_json);
          } catch (error) {
            console.error("Error", error);
          }
        }
        fetchPair();
      }, []);
    
      const handleNxt = () => {
        const nextPage = currentPage + 1;
        const startIndex = (nextPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
    
        const nextData = allCoins?.slice(startIndex, endIndex);
    
        if (nextData && nextData.length > 0) {
          setCoin(nextData);
          setRecords(nextData);
          setCurrentPage(nextPage);
        }
      };
    
      const handlePrev = () => {
        if (currentPage > 1) {
          const prevPage = currentPage - 1;
          const startIndex = (prevPage - 1) * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
    
          const prevData = allCoins?.slice(startIndex, endIndex);
    
          if (prevData && prevData.length > 0) {
            setCoin(prevData);
            setRecords(prevData);
            setCurrentPage(prevPage);
          }
        }
      };
    
      function filter(event) {
        const searchValue = event.target.value.toLowerCase();
        setRecords(coin?.filter((f) => f.name.toLowerCase().includes(searchValue)));
      }
  return (
    <div>


        <section id="COINTABLE" className="lg:mt-[] mt-[100px]">
          <div className="flex   flex-col justify-center w-full ">
            <div className="flex flex-col items-center justify-center ">
              <div className="flex flex-col items-center justify-centerlg:p-[] p-[20px]">
                <p className="lg:text-[45px]  text-[24px] font-bold">
                  One Platform, Millions of Assets
                </p>
               <div className="lg:block hidden"> <p className="lg:text-[19px] text-[18px] ">
                  As a leading self-custody multi-chain platform, we support
                  millions of assets across 100+
                </p>
                <p className="lg:text-[19px] text-[18px] ">
                  blockchains. From Bitcoin, Ethereum, and Solana, to Cosmos,
                  Optimism, and much more.
                </p></div>
                <p className="lg:hidden flex"> As a leading self-custody multi-chain platform, we support
                  millions of assets across 100+ blockchains. From Bitcoin, Ethereum, and Solana, to Cosmos,
                  Optimism, and much more.</p>
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

                <div className="overflow-x-auto rounded-xl shadow-md lg:w-[80%] md:w-[80%] w-[100%]  flex justify-center items-center">
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
                            ID
                          </th>
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
                            <td className="py-4 px-6 text-center font-medium text-gray-500">
                              {i + 1}
                            </td>
                            <td className="py-4 px-6 font-medium text-gray-800">
                              <span className="hidden lg:inline">{v.name}</span>
                              <span className="lg:hidden">
                                {v.name.length > 7
                                  ? `${v.name.substring(0, 7)}...`
                                  : v.name}
                              </span>
                            </td>

                            <td className="py-4 px-6 lg:flex   hidden ">
                              <span className="lg:inline-flex  hidden items-center justify-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                {v.symbol.toUpperCase()}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-center justify-center ">
                              <div className="flex ">
                                <img
                                  loading="lazy"
                                  src={v.image}
                                  alt={`${v.name} logo`}
                                  className="w-10 h-10 rounded-full shadow-sm"
                                />
                              </div>
                            </td>
                            <td className=" flex lg:items-center justify-center   py-4 px-6 font-medium text-gray-800">
                              <span className="text-center items-center">
                                {v.current_price}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
                <div className="flex justify-between w-[90%] items-center mt-4 p-4">
                  <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className={`px-6 py-2 rounded-lg transition-colors font-medium ${
                      currentPage === 1
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gray-600 text-white hover:bg-gray-700"
                    }`}
                  >
                    Previous
                  </button>

                  <span className="text-gray-600 font-medium">
                    Page {currentPage} of{" "}
                    {Math.ceil(allCoins?.length / itemsPerPage) || 1}
                  </span>

                  <button
                    onClick={handleNxt}
                    disabled={
                      !allCoins ||
                      currentPage >= Math.ceil(allCoins.length / itemsPerPage)
                    }
                    className={`px-6 py-2 rounded-lg transition-colors font-medium ${
                      !allCoins ||
                      currentPage >= Math.ceil(allCoins.length / itemsPerPage)
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default CoinTable;