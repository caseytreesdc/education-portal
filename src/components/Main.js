import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Main.css";

import Header from "./Header";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Footer from "./Footer";

import "./Gallery.css";

//Hero Background
import theaterBackground from "../assets/theater-background-2.jpg";
//Home Page Series Thumbnails
import yourCityYourTrees_series_thumbnail from "../assets/thumbnails/ycyt-e00.png";
import branchOut_series_thumbnail from "../assets/thumbnails/branch-e00.png";
import teaAndTrees_series_thumbnail from "../assets/thumbnails/tea-e00.png";
//YCYT Thumbnails
import ycyt_E01_thumbnail from "../assets/thumbnails/ycyt-e00.png";
import ycyt_E02_thumbnail from "../assets/thumbnails/ycyt-e02.png";
import ycyt_E03_thumbnail from "../assets/thumbnails/ycyt-e03.png";
//Branch Out Thumbnails
import branch_E01_thumbnail from "../assets/thumbnails/branch-e01.png";
//Tea nad Trees Thumbnails
import tea_E01_thumbnail from "../assets/thumbnails/tea-e01.png";
//More to Come Thumbnail
import moreToCome_thumbnail from "../assets/thumbnails/moreToCome.png"

class Pages {
  constructor(path, url, imageSrc, caption) {
    this.path = path;
    this.url = url;
    this.imageSrc = imageSrc;
    this.caption = caption;
  }
}
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      none: "",
      yourCity_series: new Pages(
        "ycyt",
        "https://tfaforms.com/4822991",
        yourCityYourTrees_series_thumbnail,
        "Your City Your Trees"
      ),
      // yourCity_series: {
      //   path: "ycyt",
      //   url: "https://tfaforms.com/4822991",
      //   imageSrc: yourCityYourTrees_series_thumbnail,
      //   caption: "Your City Your Trees",
      // },
      branch_series: {
        path: "branch-out",
        url: "https://tfaforms.com/4823704",
        imageSrc: branchOut_series_thumbnail,
        caption: "Branch Out",
      },
      tea_series: {
        path: "tea-and-trees",
        url: "https://tfaforms.com/4823707",
        imageSrc: teaAndTrees_series_thumbnail,
        caption: "Tea & Trees",
      },
      ycytE01: {
        path: "ycytE01",
        url: "https://tfaforms.com/4822991",
        imageSrc: ycyt_E01_thumbnail,
        caption: "01: Series Introduction",
      },
      ycytE02: {
        path: "ycytE02",
        url: "https://tfaforms.com/4821884",
        imageSrc: ycyt_E02_thumbnail,
        caption: "02: Steps to Tree ID",
      },
      ycytE03: {
        path: "ycytE03",
        url: "https://tfaforms.com/4823993",
        imageSrc: ycyt_E03_thumbnail,
        caption: "03: Growth and Context",
      },
      branchE01: {
        path: "branchE01",
        url: "https://tfaforms.com/4823704",
        imageSrc: branch_E01_thumbnail,
        caption: "01: Anacostia Riverkeeper",
      },
      teaAndTreesE01: {
        path: "teaE01",
        url: "https://tfaforms.com/4823707",
        imageSrc: tea_E01_thumbnail,
        caption: "01: Dr. Jess Sanders",
      },
      moreToCome: {
        path: "moreToCome",
        url: "https://tfaforms.com/4823707",
        imageSrc: moreToCome_thumbnail,
        caption: "More to Come Soon!",
      },
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
                splash
                formSrc={this.state.none}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={[
                  this.state.yourCity_series,
                  this.state.branch_series,
                  this.state.tea_series,
                ]}
                panelButtonLink="/ycytE02"
                panelButtonText="Watch Latest"
                panelTitle="Casey Trees Remote"
                panelDescription="Check out our newest series and classes!"
              ></Gallery>
            </Route>

            <Route path={"/" + this.state.yourCity_series.path}>
              <Hero
                formSrc={this.state.ycytE01.url}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={[
                  this.state.ycytE01,
                  this.state.ycytE02,
                  this.state.ycytE03,
                ]}
                panelButtonLink="/"
                panelButtonText="All Series"
                panelTitle="Your City, Your Trees"
                panelDescription="These quick virtual classes are focused on the trees of Washington, D.C. From common species found in D.C. to steps to identify them, Your City, Your Trees will give you the tools to find and explore the trees around you, even if it’s just outside your front door."
              ></Gallery>
            </Route>

            <Route path={"/" + this.state.ycytE01.path}>
              <Hero
                formSrc={this.state.ycytE01.url}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={[
                  this.state.ycytE01,
                  this.state.ycytE02,
                  this.state.ycytE03,
                ]}
                panelButtonLink="/"
                panelButtonText="All Series"
                panelTitle="Your City, Your Trees: Series Introduction"
                panelDescription="From our Education Team, welcome to our newest series, Your City, Your Trees "
              ></Gallery>
            </Route>

            <Route path={"/" + this.state.ycytE02.path}>
              <Hero
                formSrc={this.state.ycytE02.url}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={[
                  this.state.ycytE01,
                  this.state.ycytE02,
                  this.state.ycytE03,
                ]}
                panelButtonLink="/"
                panelButtonText="All Series"
                panelTitle="Your City, Your Trees: Steps to Tree ID"
                panelDescription="Episode 2 with Gabrielle Rovegno, Community Education Coordinator "
              ></Gallery>
            </Route>

            <Route path={"/" + this.state.ycytE03.path}>
              <Hero
                formSrc={this.state.ycytE03.url}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={[
                  this.state.ycytE01,
                  this.state.ycytE02,
                  this.state.ycytE03,
                ]}
                panelButtonLink="/"
                panelButtonText="All Series"
                panelTitle="Your City, Your Trees: Steps to Tree ID"
                panelDescription="Episode 2 with Gabrielle Rovegno, Community Education Coordinator "
              ></Gallery>
            </Route>

            <Route path={"/" + this.state.branch_series.path}>
              <Hero
                formSrc={this.state.branchE01.url}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={[this.state.branchE01, this.state.moreToCome]}
                panelButtonLink="/"
                panelButtonText="All Series"
                panelTitle="Branch Out"
                panelDescription="In the spirit of staying in touch with loved ones and trying new things, our video series Branch Out follows us as we catch up with a friend (which could be a partner, organization, or agency!), see how they're doing, and wax poetic about how great the environment is."
              ></Gallery>
            </Route>

            <Route path={"/" + this.state.branchE01.path}>
              <Hero
                formSrc={this.state.branchE01.url}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={[this.state.branchE01, this.state.moreToCome]}
                panelButtonLink="/"
                panelButtonText="All Series"
                panelTitle="Branch Out: Trey Sherard of Anacostia Riverkeeper"
                panelDescription="Description description description etc. "
              ></Gallery>
            </Route>

            <Route path={"/" + this.state.tea_series.path}>
              <Hero
                formSrc={this.state.teaAndTreesE01.url}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={[this.state.teaAndTreesE01, this.state.moreToCome]}
                panelButtonLink="/"
                panelButtonText="All Series"
                panelTitle="Tea & Trees"
                panelDescription="We teach all about the trees throughout the District, but what about the people behind the Casey Trees curtain? Tea & Trees is your behind the scenes look at the people of Casey Trees, what we do, and where we make it happen."
              ></Gallery>
            </Route>

            <Route path={"/" + this.state.teaAndTreesE01.path}>
              <Hero
                formSrc={this.state.teaAndTreesE01.url}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={[this.state.teaAndTreesE01, this.state.moreToCome]}
                panelButtonLink="/"
                panelButtonText="All Series"
                panelTitle="Tea and Trees: The Inaugural Episode"
                panelDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
              ></Gallery>
            </Route>

            <Route path={"/" + this.state.moreToCome.path}>
              <Hero
                formSrc={this.state.teaAndTreesE01.url}
                backgroundImage={theaterBackground}
              ></Hero>
              <Gallery
                thumbs={[
                  this.state.yourCity_series,
                  this.state.branch_series,
                  this.state.tea_series,
                ]}
                panelButtonLink="/"
                panelButtonText="All Series"
                panelTitle="We'll be putting out episodes weekly!"
                panelDescription="Until then, fill out the form to watch the newest Tea and Trees, featuring Dr. Jessica Sanders, Director od Science and Policy"
              ></Gallery>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    );
  }
}

export default Main;
