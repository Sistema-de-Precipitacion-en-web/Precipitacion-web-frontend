import React from "react";
import Directions from "./Routes/Directions";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Nav";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    
    <Navbar /> 
    <div className="routes"> 
    <Directions />
    </div>
    </BrowserRouter>
  );
}

export default App;
