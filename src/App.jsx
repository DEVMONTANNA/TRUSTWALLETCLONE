import React, { useState } from 'react';
import Button from "./Component/Button";
import Home from "./Component/Home";
import Header from "./Component/Header";
import "./index.css";

function App() {
    const [mode, setMode] = useState(false);
  return (
    <div className={mode ? "dark" : "light"}>
      <Header mode={mode} setMode={setMode} />
      <Home mode={mode} />
    </div>
  );
}

export default App;
