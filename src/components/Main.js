import React from "react";

import Form from './Form'
import Theater from "./Theater";

import Thumbnail from "./Thumbnail";

import thumb1 from '../assets/ycyt-2_thumbnail.png'


const Main = () => {
  return (
    <div>
      <Theater></Theater>
      <Form></Form>
      <Thumbnail imgSrc={thumb1}></Thumbnail>
    </div>
  );
};

export default Main;
