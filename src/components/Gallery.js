import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Thumbnail from "./Thumbnail";

import "./Gallery.css";

import goBack from "../assets/theater-background-2.jpg"
import intro from "../assets/thumbnails/intro-to-ct_thumbnail.jpg";
import plantItForward from "../assets/thumbnails/plant-it-forward_thumbnail.png";
import amendment from "../assets/thumbnails/protection-amendment_thumbnail.png";
import ycyt2 from "../assets/thumbnails/ycyt-2_thumbnail.jpg";

const Gallery = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <div className="Gallery">
              <h3 className="Gallery__heading">Series</h3>
              <div className="Gallery__thumbnails">
              <Link to="/intro">
              <Thumbnail imgSrc={intro}></Thumbnail>
              </Link>
              <Link to="/plantItForward">
              <Thumbnail imgSrc={plantItForward}></Thumbnail>
              </Link>
              <Link to="/amendment">
              <Thumbnail imgSrc={amendment}></Thumbnail>
              </Link>
              <Link to="/ycyt2">
              <Thumbnail imgSrc={ycyt2}></Thumbnail>
              </Link>
              </div>
            </div>
          </Route>

          <Route path="/intro">
            <div className="Gallery">
              <h3 className="Gallery__heading"><span><Link to="/">Back to series</Link>     </span>Intro</h3>
              <div className="Gallery__thumbnails">
                <Thumbnail imgSrc={intro}></Thumbnail>
                <Thumbnail imgSrc={intro}></Thumbnail>
                <Thumbnail imgSrc={intro}></Thumbnail>
                <Thumbnail imgSrc={intro}></Thumbnail>
              </div>
            </div>
          </Route>
          <Route path="/plantItForward">
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
  );
};

export default Gallery;
