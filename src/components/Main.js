import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Main.css";

import Header from "./Header";
import Hero from "./Hero";
import Gallery from "./Gallery";

import "./Gallery.css";

//Hero Background
import theaterBackground from "../assets/theater-background-2.jpg";
//Home Page Series Thumbnails
import newest from "../assets/thumbnails/newest_thumbnail.jpg";
import canopyAwards from "../assets/thumbnails/canopy-awards_thumbnail.jpg";
import partnerships from "../assets/thumbnails/partnerships_thumbnail.png";
import ycyt from "../assets/thumbnails/ycyt_thumbnail.png";
//YCYT Thumbnails
import ycytE01 from "../assets/thumbnails/ycyt-e01_thumbnail.png";
//also ycyt-2 thumbnail listed below in newest
//Newest Thumbnails
import intro from "../assets/thumbnails/intro-to-ct_thumbnail.jpg";
import plantItForward from "../assets/thumbnails/plant-it-forward_thumbnail.png";
import amendment from "../assets/thumbnails/protection-amendment_thumbnail.png";
import ycytE02 from "../assets/thumbnails/ycyt-e02_thumbnail.jpg";
//CanopyAwards Thumbnails
import deloresBushong from "../assets/thumbnails/delores-bushong_thumbnail.png";
import natureConservancy from "../assets/thumbnails/nature-conservancy_thumbnail.jpg";
//Partnerships Thumbnails
import dcdh from "../assets/thumbnails/dhcd_thumbnail.png";
import gallaudet from "../assets/thumbnails/gallaudet_thumbnail.png";
import shakeShack from "../assets/thumbnails/shake-shack_thumbnail.png";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      none: "",
      // videos and form links
      newest: "https://tfaforms.com/4821884",
      ycytE01: "https://tfaforms.com/4822991",
      //
      intro: "https://tfaforms.com/4821879",
      plantItForward: "https://tfaforms.com/4821886",
      amendment: "https://tfaforms.com/4821403",
      ycytE02: "https://tfaforms.com/4821884",

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
                  ycyt: ycyt,
                  canopyAwards: canopyAwards,
                  partnerships: partnerships,
                }}
                panelButtonLink="/ycytE02"
                panelButtonText="Watch Latest"
                videoTitle="Casey Trees' Video Portal"
                videoDescription="Explore some of our featured videos!"
              ></Gallery>
            </Route>

            <Route path="/ycyt">
              <Hero
                formSrc={this.state.ycytE01}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={{
                  ycytE01: ycytE01,
                  ycytE02: ycytE02,
                }}
                panelButtonLink="/"
                panelButtonText="All Series"
                videoTitle="Your City, Your Trees"
                videoDescription="Welcome to our newest series!"
              ></Gallery>
            </Route>

            <Route path="/ycytE01">
              <Hero
                formSrc={this.state.ycytE01}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={{
                  ycytE01: ycytE01,
                  ycytE02: ycytE02,
                }}
                panelButtonLink="/"
                panelButtonText="All Series"
                videoTitle="Your City, Your Trees: Series Introduction"
                videoDescription="From our Education Team, welcome to our newest series, Your City, Your Trees "
              ></Gallery>
            </Route>

            <Route path="/ycytE02">
              <Hero
                formSrc={this.state.ycytE02}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={{
                  ycytE01: ycytE01,
                  ycytE02: ycytE02,
                }}
                panelButtonLink="/"
                panelButtonText="All Series"
                videoTitle="Your City, Your Trees: Steps to Tree ID"
                videoDescription="Episode 2 with Gabrielle Rovegno, Community Education Coordinator "
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
                  ycytE02: ycytE02,
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
                  ycytE02: ycytE02,
                }}
                panelButtonLink="/"
                panelButtonText="All Series"
                videoTitle="Plant it Forward"
                videoDescription="Ensuring the future a strong canopy."
              ></Gallery>
            </Route>

            <Route path="/amendment">
              <Hero
                formSrc={this.state.amendment}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={{
                  intro: intro,
                  plantItForward: plantItForward,
                  amendment: amendment,
                  ycytE02: ycytE02,
                }}
                panelButtonLink="/"
                panelButtonText="All Series"
                videoTitle="Tree Protection Act"
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
                videoTitle="The Canopy Awards!"
                videoDescription="Our yearly celebration of the people who keep DC's Urban Forest flourishing."
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
