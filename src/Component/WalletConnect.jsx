import React, { useState } from 'react'
import { ethers } from "ethers";

const WalletConnect = () => {
  const [copy, setCopy] = useState(false);
  const [walletData, setWalletData] = useState({
    address: '',
    balance: '',
    isConnected: false,
    transactionNO:"",
    network:""
  });
  const formatAddress = (address) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };
  async function connectWallet() {
    try {
    
      if (typeof window.ethereum === "undefined") {
        alert("MetaMask not found. Please install or enable it in your browser.");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const balance = await provider.getBalance(address);
      const txNum = await provider.getTransactionCount("ricmoo.eth");
      const formattedBalance = ethers.formatEther(balance);
      const network = await provider.getNetwork();
     

 

      setWalletData({
        address: address,
        balance: formattedBalance,
        isConnected: true,
        transactionNO:txNum,
        network:network.name
      });

    } catch (err) {
      console.error("Error connecting wallet:", err);
      alert("Failed to connect to MetaMask. Check console for details.");
    }
  }
    function disconnectWallet() {
   
    setWalletData({
      address: '',
      balance: '',
      isConnected: false,
      transactionNO:'',
      network:''
    });
    console.log("Wallet disconnected");
  }


  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Header */}
      <div className="lg:bg-gradient-to-r from-blue-500 to-purple-600 bg-[rgb(82,82,238)] p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold">Web3 Wallet</h2>
              <p className="text-blue-100 text-sm">Secure crypto wallet connection</p>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${walletData.isConnected ? 'bg-green-400 text-green-900' : 'bg-yellow-400 text-yellow-900'}`}>
            {walletData.isConnected ? 'Online' : 'Offline'}
          </div>
        </div>
      </div>

      {/* Connection Status */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${walletData.isConnected ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
            <span className={`font-semibold ${walletData.isConnected ? 'text-green-600' : 'text-red-500'}`}>
              {walletData.isConnected ? 'Wallet Connected' : 'Wallet Disconnected'}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mb-6">
          {!walletData.isConnected ? (
            <button 
              onClick={connectWallet}
              className="w-full bg-[rgb(82,82,238)] lg:bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 lg:text-white text-[black] font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 group"
            >
              <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Connect Wallet</span>
            </button>
          ) : (
            <button 
              onClick={disconnectWallet}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 group"
            >
              <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Disconnect Wallet</span>
            </button>
          )}
        </div>

        {/* Wallet Information */}
        {walletData.isConnected && (
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 border border-blue-100 rounded-xl p-5 space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span>Wallet Details</span>
              </h3>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
                <span>Address</span>
              </label>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
                <code className="text-sm font-mono text-gray-800">{formatAddress(walletData.address)}</code>
                <button 
                onMouseEnter={() => setCopy(true)}
                onMouseLeave={() => setCopy(false)}
                  onClick={() => navigator.clipboard.writeText(walletData.address)}
                  className="text-blue-500 hover:text-blue-700 transition-colors p-1 rounded hover:bg-blue-50"
                  title="Copy to clipboard"
                >
                  {copy&& (
                    <div className='z-[4000] absolute mt-[px]  ml-[15px] bg-[white] p-[4px] rounded'>
                   <span className="text-green-500 text-[10px] font-bold">copy text</span>
                    </div>
                  )}
                
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Balance */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span>Balance</span>
              </label>
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <div className="text-2xl font-bold text-gray-900">{walletData.balance}</div>
                <div className="text-sm text-gray-500 font-medium">ETH</div>
              </div>
            </div>
            {/* Network */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
</svg>
                <span>Network</span>
              </label>
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <div className="text-2xl font-bold text-gray-900"><div className="text-sm text-gray-500 font-medium">ETH:</div>{walletData.network}</div>
                
              </div>
            </div>

            {/* Transaction Count */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>Transaction Count</span>
              </label>
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <div className="text-2xl font-bold text-gray-900">{walletData.transactionNO}</div>
                <div className="text-sm text-gray-500 font-medium">Total Transactions</div>
              </div>
            </div>
          </div>
        )}

        {/* Disconnected State */}
        {!walletData.isConnected && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Wallet Not Connected</h3>
            <p className="text-gray-500 text-sm">Connect your wallet to view your balance and interact with dApps</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>DEVMONTANNA.2025</span>
        </div>
      </div>
    </div>
  )
}

export default WalletConnect