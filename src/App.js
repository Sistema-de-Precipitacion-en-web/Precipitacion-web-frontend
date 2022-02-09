import React from "react";
import Directions from "./Routes/Directions";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
    <Navbar /> 
      <div className="container-fluid">
        <Directions />
      </div>
    </BrowserRouter>
  );
}

export default App;
