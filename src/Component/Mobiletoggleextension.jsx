import React, { useState } from "react";
import Extension from "../../public/extension.gif";
import Mobile from "../../public/mobile.gif";

const Mobiletoggleextension = () => {
  const [extension, setExtension] = useState("");

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center lg:p-6 p-4">
        <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 p-8 lg:p-12">
              <div className="max-w-md mx-auto lg:mx-0">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  Your one-stop, Web3
                  <span className="text-blue-600">wallet</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                  Buy, sell, and swap crypto, earn rewards, manage NFTs, and
                  discover DApps - all in one secure wallet.
                </p>

                <div className="bg-gray-100 rounded-2xl p-2 flex mb-8">
                  <button
                    onClick={() => setExtension("mobile")}
                    className={`flex-1 py-4 px-6 rounded-xl transition-all duration-300 font-semibold ${
                      extension === "mobile"
                        ? "bg-white text-blue-600 shadow-md"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    📱 Mobile
                  </button>
                  <button
                    onClick={() => setExtension("extension")}
                    className={`flex-1 py-4 px-6 rounded-xl transition-all duration-300 font-semibold ${
                      extension === "extension"
                        ? "bg-white text-blue-600 shadow-md"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    🖥️ Extension
                  </button>
                </div>
                <div className="   p-2 flex mb-8">
                  {extension === "mobile" ? (
                    <a target="blank" href="https://trustwallet.com/download">
                      <button className="lg:w-[100%] bg-[blue] text-[white] p-[13px] rounded-2xl cursor-pointer">
                        Download Mobile
                      </button>
                    </a>
                  ) : (
                    <a target="blank" href="https://trustwallet.com/download">
                      <button className="lg:w-[100%] bg-[blue] text-[white] p-[13px] rounded-2xl cursor-pointer">
                        Download Extension
                      </button>
                    </a>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Secure crypto transactions
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    NFT management
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    DApp browser
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8 lg:p-12 min-h-[500px]">
              <div className="relative">
                {extension === "mobile" ? (
                  <div className="transform hover:scale-105 transition-transform duration-500">
                    <div className="relative">
                      <img
                        className="w-full max-w-[280px] lg:max-w-[320px] h-auto rounded-3xl shadow-2xl"
                        src={Mobile}
                        alt="TrustWallet Mobile App"
                      />
                      <div className="absolute inset-0 border-2 border-gray-300 rounded-3xl pointer-events-none"></div>
                    </div>
                  </div>
                ) : (
                  <div className="transform hover:scale-105 transition-transform duration-500">
                    <div className="relative bg-white rounded-2xl p-6 shadow-2xl">
                      <img
                        className="w-full max-w-[400px] h-auto rounded-lg"
                        src={Extension}
                        alt="TrustWallet Browser Extension"
                      />

                      <div className="absolute -top-2 -left-2 -right-2 h-8 bg-gray-200 rounded-t-2xl flex items-center px-4">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobiletoggleextension;
