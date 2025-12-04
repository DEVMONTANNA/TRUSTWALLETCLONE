import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "./Component/Button";
import Home from "./Component/Home";
import Header from "./Component/Header";
import "./index.css";
import WalletConnect from './Component/WalletConnect';
import MobileApp from './Component/Wallet/MobileApp';
import BrowserExtension from './Component/Wallet/BrowserExtension';

function App() {
    const [mode, setMode] = useState(false);
  return (
    <div className={mode ? "dark" : "light"}>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connectwallet" element={<WalletConnect />} />
        <Route path="/MobileApp" element={<MobileApp/>} />
        <Route path="/BrowserExtension" element={<BrowserExtension/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
