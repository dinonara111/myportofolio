import React from "react";
import About from "../components/HomeOne/about"; 

import Profil from "../components/HomeOne/profil"; 
import Progress from "../components/HomeOne/progress";
import Project from "../components/HomeOne/project"; 
import Kontak from "../components/HomeOne/kontak"; 
const Home = () => {
  return (
    <div>
     
      <About />    {/* Bagian About */}
      <Profil />
      <Progress />
      <Project />
      <Kontak />
    
    </div>
  );
};

export default Home;