import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Thumbnail from "./Thumbnail";

import "./Gallery.css";

import intro from "../assets/thumbnails/intro-to-ct_thumbnail.jpg";
import plantItForward from "../assets/thumbnails/plant-it-forward_thumbnail.png";
import amendment from "../assets/thumbnails/protection-amendment_thumbnail.png";
import ycyt2 from "../assets/thumbnails/ycyt-2_thumbnail.jpg";

const Gallery = () => {
  return (
    <Router>
      <div className="Gallery">
        <h3 className="Gallery__heading">Series</h3>
        <div className="Gallery__thumbnails">
          <Thumbnail imgSrc={intro}></Thumbnail>
          <Thumbnail imgSrc={plantItForward}></Thumbnail>
          <Thumbnail imgSrc={amendment}></Thumbnail>
          <Thumbnail imgSrc={ycyt2}></Thumbnail>
        </div>
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Link to="/intro">
              <h1>intro</h1>
            </Link>
            <Link to="/plantItForward">
              <h1>plantItForward</h1>
            </Link>
            <Link to="/amendment">
              <h1>amendment</h1>
            </Link>
            <Link to="/ycyt2">
              <h1>ycyt2</h1>
            </Link>
          </Route>
          <Route path="/intro">
            <Link to="/">
              <h1>BACK</h1>
            </Link>
            <div className="Gallery">
              <h3 className="Gallery__heading">Intro</h3>
              <div className="Gallery__thumbnails">
                <Thumbnail imgSrc={intro}></Thumbnail>
                <Thumbnail imgSrc={intro}></Thumbnail>
                <Thumbnail imgSrc={intro}></Thumbnail>
                <Thumbnail imgSrc={intro}></Thumbnail>
              </div>
            </div>
          </Route>
          <Route path="/plantItForward">
            <Link to="/">
              <h1>BACK</h1>
            </Link>
            <div className="Gallery">
              <h3 className="Gallery__heading">plantItForward</h3>
              <div className="Gallery__thumbnails">
                <Thumbnail imgSrc={plantItForward}></Thumbnail>
                <Thumbnail imgSrc={plantItForward}></Thumbnail>
                <Thumbnail imgSrc={plantItForward}></Thumbnail>
                <Thumbnail imgSrc={plantItForward}></Thumbnail>
              </div>
            </div>
          </Route>
          <Route path="/amendment">
            <Link to="/">
              <h1>BACK</h1>
            </Link>
            <div className="Gallery">
              <h3 className="Gallery__heading">amendment</h3>
              <div className="Gallery__thumbnails">
                <Thumbnail imgSrc={amendment}></Thumbnail>
                <Thumbnail imgSrc={amendment}></Thumbnail>
                <Thumbnail imgSrc={amendment}></Thumbnail>
                <Thumbnail imgSrc={amendment}></Thumbnail>
              </div>
            </div>
          </Route>
          <Route path="/ycyt2">
            <Link to="/">
              <h1>BACK</h1>
            </Link>
            <div className="Gallery">
              <h3 className="Gallery__heading">ycyt2</h3>
              <div className="Gallery__thumbnails">
                <Thumbnail imgSrc={ycyt2}></Thumbnail>
                <Thumbnail imgSrc={ycyt2}></Thumbnail>
                <Thumbnail imgSrc={ycyt2}></Thumbnail>
                <Thumbnail imgSrc={ycyt2}></Thumbnail>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </Router>
  );
};

export default Gallery;
