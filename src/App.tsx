import Router from "./Router/Router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Nav";
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="routes">
        <Router />
      </div>
    </BrowserRouter>
  );
}
