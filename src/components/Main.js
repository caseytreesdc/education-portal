import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./Main.css";

import Header from "./Header";
import Hero from "./Hero";

import "./Gallery.css";
import "./ControlPanel.css";

import Thumbnail from "./Thumbnail";
import CTButton from "./CTButton";

import newest from "../assets/thumbnails/newest_thumbnail.jpg";
import canopyAwards from "../assets/thumbnails/canopy-awards_thumbnail.jpg";

import intro from "../assets/thumbnails/intro-to-ct_thumbnail.jpg";
import plantItForward from "../assets/thumbnails/plant-it-forward_thumbnail.png";
import amendment from "../assets/thumbnails/protection-amendment_thumbnail.png";
import ycyt2 from "../assets/thumbnails/ycyt-2_thumbnail.jpg";

import deloresBushong from "../assets/thumbnails/delores-bushong_thumbnail.png";
import natureConservancy from "../assets/thumbnails/nature-conservancy_thumbnail.jpg";

import theaterBackground from "../assets/theater-background-2.jpg";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      none: "",

      newest: "https://www.youtube.com/embed/bklRzVGupFI",
      intro: "https://tfaforms.com/4821879",
      plantItForward: "https://tfaforms.com/4821886",
      amendment: "https://tfaforms.com/4821403",
      ycyt2: "https://tfaforms.com/4821884",

      canopyAwards:"https://www.youtube.com/embed/jI8rcDC30UM",
      deloresBushong: "https://www.youtube.com/embed/jI8rcDC30UM",
      natureConservancy: "https://www.youtube.com/embed/aCJZhLqc_6k"
    };
  }

  render() {
    return (
      <div className="Main">
        <Header></Header>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/">
              <Hero
                formSrc={this.state.none}
                backgroundImage={theaterBackground}
              ></Hero>
              <div className="Gallery">
                <div className="ControlPanel">
                  <Link to="/newest">
                    <CTButton blue text="Watch Latest"></CTButton>
                  </Link>
                  <div className="ControlPanel__text-box">
                    <h3>Casey Trees' Web Series</h3>
                    <p className="ControlPanel__description">
                      A descripton, telling us a little bit about the show, and
                      then perhaps transitions to a description of the episode.
                    </p>
                  </div>
                </div>
                <div className="Gallery__thumbnails">
                  <Link to="/newest">
                    <Thumbnail imgSrc={newest}></Thumbnail>
                  </Link>
                  <Link to="/2019canopyawards">
                    <Thumbnail imgSrc={canopyAwards}></Thumbnail>
                  </Link>
                </div>
              </div>
            </Route>

            <Route path="/newest">
              <Hero
                formSrc={this.state.newest}
                backgroundImage={theaterBackground}
              ></Hero>
              <div className="Gallery">
                <div className="ControlPanel">
                  <Link to="/">
                    <CTButton blue text="All Series"></CTButton>
                  </Link>
                  <div className="ControlPanel__text-box">
                    <h3>The Latest Episodes</h3>
                    <p className="ControlPanel__description">
                      A descripton, telling us a little bit about the show, and
                      then perhaps transitions to a description of the episode.
                    </p>
                  </div>
                </div>
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
              <Hero
                formSrc={this.state.intro}
                backgroundImage={theaterBackground}
              ></Hero>
              <div className="Gallery">
                <div className="ControlPanel">
                  <Link to="/">
                    <CTButton blue text="All Series"></CTButton>
                  </Link>
                  <div className="ControlPanel__text-box">
                    <h3>An introduction to Casey Trees</h3>
                    <p className="ControlPanel__description">
                      A descripton, telling us a little bit about the show, and
                      then perhaps transitions to a description of the episode.
                    </p>
                  </div>
                </div>
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
            <Route path="/plantItForward">
              <Hero
                formSrc={this.state.plantItForward}
                backgroundImage={theaterBackground}
              ></Hero>
              <div className="Gallery">
                <div className="ControlPanel">
                  <Link to="/">
                    <CTButton blue text="All Series"></CTButton>
                  </Link>
                  <div className="ControlPanel__text-box">
                    <h3>Plant it Forward</h3>
                    <p className="ControlPanel__description">
                      A descripton, telling us a little bit about the show, and
                      then perhaps transitions to a description of the episode.
                    </p>
                  </div>
                </div>
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
            <Route path="/amendment">
              <Hero
                formSrc={this.state.amendment}
                backgroundImage={theaterBackground}
              ></Hero>
              <div className="Gallery">
                <div className="ControlPanel">
                  <Link to="/">
                    <CTButton blue text="All Series"></CTButton>
                  </Link>
                  <div className="ControlPanel__text-box">
                    <h3>Tree Protection Act</h3>
                    <p className="ControlPanel__description">
                      A descripton, telling us a little bit about the show, and
                      then perhaps transitions to a description of the episode.
                    </p>
                  </div>
                </div>
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
            <Route path="/ycyt2">
              <Hero
                formSrc={this.state.ycyt2}
                backgroundImage={theaterBackground}
              ></Hero>
              <div className="Gallery">
                <div className="ControlPanel">
                  <Link to="/">
                    <CTButton blue text="All Series"></CTButton>
                  </Link>
                  <div className="ControlPanel__text-box">
                    <h3>Your City, Your Trees</h3>
                    <p className="ControlPanel__description">
                      A descripton, telling us a little bit about the show, and
                      then perhaps transitions to a description of the episode.
                    </p>
                  </div>
                </div>
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

            <Route path="/2019canopyawards">
              <Hero
                formSrc={this.state.canopyAwards}
                backgroundImage={theaterBackground}
              ></Hero>
              <div className="Gallery">
                <div className="ControlPanel">
                  <Link to="/">
                    <CTButton blue text="All Series"></CTButton>
                  </Link>
                  <div className="ControlPanel__text-box">
                    <h3>Our 2019 Canopy Awards Honorees</h3>
                    <p className="ControlPanel__description">
                      A descripton, telling us a little bit about the show, and
                      then perhaps transitions to a description of the episode.
                    </p>
                  </div>
                </div>
                <div className="Gallery__thumbnails">
                  <Link to="/deloresBushong">
                    <Thumbnail imgSrc={deloresBushong}></Thumbnail>
                  </Link>
                  <Link to="/natureConservancy">
                    <Thumbnail imgSrc={natureConservancy}></Thumbnail>
                  </Link>
                </div>
              </div>
            </Route>
            <Route path="/natureConservancy">
              <Hero
                formSrc={this.state.natureConservancy}
                backgroundImage={theaterBackground}
              ></Hero>
              <div className="Gallery">
                <div className="ControlPanel">
                  <Link to="/">
                    <CTButton blue text="All Series"></CTButton>
                  </Link>
                  <div className="ControlPanel__text-box">
                    <h3>Canopy Award for Sustainability</h3>
                    <p className="ControlPanel__description">
                      The Nature Conservancy. A descripton, telling us a little bit about the show, and
                      then perhaps transitions to a description of the episode.
                    </p>
                  </div>
                </div>
                <div className="Gallery__thumbnails">
                  <Link to="/deloresBushong">
                    <Thumbnail imgSrc={deloresBushong}></Thumbnail>
                  </Link>
                  <Link to="/natureConservancy">
                    <Thumbnail imgSrc={natureConservancy}></Thumbnail>
                  </Link>
                </div>
              </div>
            </Route>
            <Route path="/deloresBushong">
              <Hero
                formSrc={this.state.deloresBushong}
                backgroundImage={theaterBackground}
              ></Hero>
              <div className="Gallery">
                <div className="ControlPanel">
                  <Link to="/">
                    <CTButton blue text="All Series"></CTButton>
                  </Link>
                  <div className="ControlPanel__text-box">
                    <h3>Canopy Award for Volunteer Service</h3>
                    <p className="ControlPanel__description">
                      Delores Bushong. A descripton, telling us a little bit about the show, and
                      then perhaps transitions to a description of the episode.
                    </p>
                  </div>
                </div>
                <div className="Gallery__thumbnails">
                  <Link to="/deloresBushong">
                    <Thumbnail imgSrc={deloresBushong}></Thumbnail>
                  </Link>
                  <Link to="/natureConservancy">
                    <Thumbnail imgSrc={natureConservancy}></Thumbnail>
                  </Link>
                </div>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
