import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import "./Gallery.css";
import "./ControlPanel.css";

import Thumbnail from "./Thumbnail";
import CTButton from "./CTButton";

import series from "../assets/thumbnails/series_thumbnail.png";

import intro from "../assets/thumbnails/intro-to-ct_thumbnail.jpg";
import plantItForward from "../assets/thumbnails/plant-it-forward_thumbnail.png";
import amendment from "../assets/thumbnails/protection-amendment_thumbnail.png";
import ycyt2 from "../assets/thumbnails/ycyt-2_thumbnail.jpg";

const Gallery = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <div className="Gallery">
            <div className="ControlPanel">
              <Link to="/newest">
                <CTButton blue text="Watch Latest"></CTButton>
              </Link>
              <div className="ControlPanel__text-box">
                <h3>Casey Trees' Web Series</h3>
                <p className="ControlPanel__description">
                  A descripton, telling us a little bit about the show, and then
                  perhaps transitions to a description of the episode.
                </p>
              </div>
            </div>
            <div className="Gallery__thumbnails">
              <Link to="/newest">
                <Thumbnail caption={intro} imgSrc={series}></Thumbnail>
              </Link>
              <Link to="/plantItForward">
                <Thumbnail imgSrc={series}></Thumbnail>
              </Link>
              <Link to="/amendment">
                <Thumbnail imgSrc={series}></Thumbnail>
              </Link>
              <Link to="/ycyt2">
                <Thumbnail imgSrc={series}></Thumbnail>
              </Link>
            </div>
          </div>
        </Route>
        <Route path="/newest">
          <div className="Gallery">
            <div className="ControlPanel">
              <Link to="/">
                <CTButton blue text="All Series"></CTButton>
              </Link>
              <div className="ControlPanel__text-box">
                <h3>The Latest Episodes</h3>
                <p className="ControlPanel__description">
                  A descripton, telling us a little bit about the show, and then
                  perhaps transitions to a description of the episode.
                </p>
              </div>
            </div>
            <div className="Gallery__thumbnails">
              <Thumbnail imgSrc={intro}></Thumbnail>
              <Thumbnail imgSrc={plantItForward}></Thumbnail>
              <Thumbnail imgSrc={amendment}></Thumbnail>
              <Thumbnail imgSrc={ycyt2}></Thumbnail>
            </div>
          </div>
        </Route>
        <Route path="/plantItForward">
          <div className="Gallery">
            <h3 className="Gallery__heading">
              <span>
                <Link to="/">Back to series</Link>{" "}
              </span>
              Your City, Your Trees
            </h3>
            <div className="Gallery__thumbnails">
              <Thumbnail imgSrc={intro}></Thumbnail>
              <Thumbnail imgSrc={plantItForward}></Thumbnail>
              <Thumbnail imgSrc={amendment}></Thumbnail>
              <Thumbnail imgSrc={ycyt2}></Thumbnail>
            </div>
          </div>
        </Route>
        <Route path="/amendment">
          <div className="Gallery">
            <h3 className="Gallery__heading">
              <span>
                <Link to="/">Back to series</Link>{" "}
              </span>
              2019 Canopy Awards
            </h3>
            <div className="Gallery__thumbnails">
              <Thumbnail imgSrc={intro}></Thumbnail>
              <Thumbnail imgSrc={plantItForward}></Thumbnail>
              <Thumbnail imgSrc={amendment}></Thumbnail>
              <Thumbnail imgSrc={ycyt2}></Thumbnail>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default Gallery;
