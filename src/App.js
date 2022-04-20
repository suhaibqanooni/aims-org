import logo from "./logo.svg";
import "./styles/aimsStyle.css";

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Maps from "./components/Maps";
import Afghanistan from "./components/Afghanistan";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="maps" element={<Maps />} />
        <Route path="afghanistan" element={<Afghanistan />} />
      </Routes>
    </BrowserRouter>
    // <Navbar />
  );
}

export default App;
