import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Main.css";

import Header from "./Header";
import Hero from "./Hero";
import Gallery from "./Gallery";

import "./Gallery.css";
import "./ControlPanel.css";

//Hero Background
import theaterBackground from "../assets/theater-background-2.jpg";
//Home Page series thumbnails
import newest from "../assets/thumbnails/newest_thumbnail.jpg";
import canopyAwards from "../assets/thumbnails/canopy-awards_thumbnail.jpg";
import partnerships from "../assets/thumbnails/partnerships_thumbnail.png";
//Series 1 Thumbnails
import intro from "../assets/thumbnails/intro-to-ct_thumbnail.jpg";
import plantItForward from "../assets/thumbnails/plant-it-forward_thumbnail.png";
import amendment from "../assets/thumbnails/protection-amendment_thumbnail.png";
import ycyt2 from "../assets/thumbnails/ycyt-2_thumbnail.jpg";
//Series 2 Thumbnails
import deloresBushong from "../assets/thumbnails/delores-bushong_thumbnail.png";
import natureConservancy from "../assets/thumbnails/nature-conservancy_thumbnail.jpg";
//Series 3 Thumbnails
import dcdh from "../assets/thumbnails/dhcd_thumbnail.png";
import gallaudet from "../assets/thumbnails/gallaudet_thumbnail.png";
import shakeShack from "../assets/thumbnails/shake-shack_thumbnail.png";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      none: "",
      // videos and form links
      newest: "https://www.youtube.com/embed/bklRzVGupFI",
      //
      intro: "https://tfaforms.com/4821879",
      plantItForward: "https://tfaforms.com/4821886",
      amendment: "https://tfaforms.com/4821403",
      ycyt2: "https://tfaforms.com/4821884",

      canopyAwards: "https://www.youtube.com/embed/jI8rcDC30UM",
      deloresBushong: "https://www.youtube.com/embed/jI8rcDC30UM",
      natureConservancy: "https://www.youtube.com/embed/aCJZhLqc_6k",

      anacostiaRiverkeeper: "https://www.youtube.com/embed/pIjRy-qkE7w",
      gallaudet: "https://www.youtube.com/embed/6ZufRabr8Po",
      shakeShack: "https://www.youtube.com/embed/Ms32WUa7hmw",
      dcdh: "https://www.youtube.com/embed/OYMppo7xlZ8",
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
              <Gallery
                thumbs={{
                  newest: newest,
                  canopyAwards: canopyAwards,
                  partnerships: partnerships,
                }}
                panelButtonLink="/newest"
                panelButtonText="Watch Latest"
                videoTitle="Casey Trees' Video Portal"
                videoDescription="Explore some of our featured videos!"
              ></Gallery>
            </Route>

            <Route path="/newest">
              <Hero
                formSrc={this.state.newest}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={{
                  intro: intro,
                  plantItForward: plantItForward,
                  amendment: amendment,
                  ycyt2: ycyt2,
                }}
                panelButtonLink="/"
                panelButtonText="All Series"
                videoTitle="The Latest Episodes"
                videoDescription="A descripton, telling us a little bit about the show, and then perhaps transitions to a description of the episode."
              ></Gallery>
            </Route>

            <Route path="/intro">
              <Hero
                formSrc={this.state.intro}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={{
                  intro: intro,
                  plantItForward: plantItForward,
                  amendment: amendment,
                  ycyt2: ycyt2,
                }}
                panelButtonLink="/"
                panelButtonText="All Series"
                videoTitle="An introduction to Casey Trees"
                videoDescription="A descripton, telling us a little bit about the show, and then perhaps transitions to a description of the episode."
              ></Gallery>
            </Route>

            <Route path="/plantItForward">
              <Hero
                formSrc={this.state.plantItForward}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={{
                  intro: intro,
                  plantItForward: plantItForward,
                  amendment: amendment,
                  ycyt2: ycyt2,
                }}
                panelButtonLink="/"
                panelButtonText="All Series"
                videoTitle="Plant it Forward"
                videoDescription="Ensuring the future a strong canopy."
              ></Gallery>
            </Route>

            <Route path="/amendment">
              <Hero
                formSrc={this.state.plantItForward}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={{
                  intro: intro,
                  plantItForward: plantItForward,
                  amendment: amendment,
                  ycyt2: ycyt2,
                }}
                panelButtonLink="/"
                panelButtonText="All Series"
                videoTitle="Tree Protection Act"
                videoDescription="A descripton, telling us a little bit about the show, and then perhaps transitions to a description of the episode."
              ></Gallery>
            </Route>

            <Route path="/ycyt2">
              <Hero
                formSrc={this.state.ycyt2}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={{
                  intro: intro,
                  plantItForward: plantItForward,
                  amendment: amendment,
                  ycyt2: ycyt2,
                }}
                panelButtonLink="/"
                panelButtonText="All Series"
                videoTitle="Your City, Your Trees"
                videoDescription="A descripton, telling us a little bit about the show, and then perhaps transitions to a description of the episode."
              ></Gallery>
            </Route>

            <Route path="/canopyAwards">
              <Hero
                formSrc={this.state.canopyAwards}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={{
                  natureConservancy: natureConservancy,
                  deloresBushong: deloresBushong,
                }}
                panelButtonLink="/"
                panelButtonText="All Series"
                videoTitle="Your City, Your Trees"
                videoDescription="A descripton, telling us a little bit about the show, and then perhaps transitions to a description of the episode."
              ></Gallery>
            </Route>

            <Route path="/natureConservancy">
              <Hero
                formSrc={this.state.natureConservancy}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={{
                  natureConservancy: natureConservancy,
                  deloresBushong: deloresBushong,
                }}
                panelButtonLink="/"
                panelButtonText="All Series"
                videoTitle="Canopy Award for Sustainability"
                videoDescription="The Nature Conservancy. A descripton, telling us a littlebit about the show, and then perhaps transitions to a description of the episode."
              ></Gallery>
            </Route>

            <Route path="/deloresBushong">
              <Hero
                formSrc={this.state.deloresBushong}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={{
                  natureConservancy: natureConservancy,
                  deloresBushong: deloresBushong,
                }}
                panelButtonLink="/"
                panelButtonText="All Series"
                videoTitle="Canopy Award for Volunteer Service"
                videoDescription="Delores Bushong A descripton, telling us a littlebit about the show, and then perhaps transitions to a description of the episode."
              ></Gallery>
            </Route>

            <Route path="/partnerships">
              <Hero
                formSrc={this.state.anacostiaRiverkeeper}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={{
                  dcdh: dcdh,
                  gallaudet: gallaudet,
                  shakeShack: shakeShack,
                }}
                panelButtonLink="/"
                panelButtonText="All Series"
                videoTitle="Casey Trees and ..."
                videoDescription="Our great partnerships over the years with DC Businesses, Universities, Government, and Public Schools"
              ></Gallery>
            </Route>

            <Route path="/dcdh">
              <Hero
                formSrc={this.state.dcdh}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={{
                  dcdh: dcdh,
                  gallaudet: gallaudet,
                  shakeShack: shakeShack,
                }}
                panelButtonLink="/"
                panelButtonText="All Series"
                videoTitle="Casey Trees and DC Department of Housing and Community Development"
                videoDescription=" We are honored to present the Department of Housing and Community Development with the 2019 Canopy Awards for Partnership."
              ></Gallery>
            </Route>

            <Route path="/gallaudet">
              <Hero
                formSrc={this.state.gallaudet}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={{
                  dcdh: dcdh,
                  gallaudet: gallaudet,
                  shakeShack: shakeShack,
                }}
                panelButtonLink="/"
                panelButtonText="All Series"
                videoTitle="Casey Trees and Gallaudet University with Kendall Demonstration Elementary"
                videoDescription="The Kendall Demonstration Elementary School, located on campus at Gallaudet 
                  University is an inspiring hub for early education focused on deaf and hard of hearing children.
                  Casey Trees super-volunteer Heidi Burns also works as the school's Coordinator of Teaching andLearning, 
                  and spearheaded an effort to plant a variety of new trees on KDES's grounds."
              ></Gallery>
            </Route>

            <Route path="/shakeShack">
              <Hero
                formSrc={this.state.shakeShack}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={{
                  dcdh: dcdh,
                  gallaudet: gallaudet,
                  shakeShack: shakeShack,
                }}
                panelButtonLink="/"
                panelButtonText="All Series"
                videoTitle="Casey Trees and Shake Shack"
                videoDescription="Shake Shack and Casey Trees come together in the DMV to re-tree the DC tree canopy!"
              ></Gallery>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
