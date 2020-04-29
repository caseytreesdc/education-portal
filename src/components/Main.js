import React from "react";
import './Main.css'

import Theater from "./Theater";
import Gallery from "./Gallery";

import theaterBackground from '../assets/theater-background-2.jpg';

const Main = () => {
  return (
    <div className="Main">
      <Theater backgroundImage={theaterBackground}></Theater>
      <Gallery></Gallery>
    </div>
  );
};

export default Main;
