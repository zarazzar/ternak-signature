import React, {Component} from "react";
 
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Konten from "../container/Konten";
import LandingPage from "../pages/LandingPage";


function Home() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
      </BrowserRouter>
  );
}
 

   
export default Home;
