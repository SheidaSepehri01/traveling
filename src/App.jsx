import React from "react";
import { Header } from "./components/Header";
import Home from "./components/Home";
//import "./App.css";

function App() {
  return (
    <div className="font-rubik h-screen 
    max-md:h-[100vh] max-md:w-[100vw] overflow-hidden 
    ">
      <Header />
      <Home />
    </div>
  );
}

export default App;
