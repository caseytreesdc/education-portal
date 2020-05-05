import React from "react";
import { Switch, Route } from "react-router-dom";

import theaterBackground from "../assets/theater-background-2.jpg";

class Money extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Videos: [
        {
          routerPath: "/" + this.playlist.split(" ").join(""),
          tagName: "intro",
          playlist: "Latest Videos",
          title: "An Introduction to Casey Trees",
          description:
            "We restore, enhance and protect the tree canopy of the nation's capital.",
          source: "https://www.youtube.com/embed/bklRzVGupFI",
          background: theaterBackground,
        },
      ],
    };
  }

  render() {
    console.log(this.state.Videos.routerPath);
    return (
      <Switch>
        <Route path={this.state.Videos[0].routerPath}>
          <h1>TESTING</h1>
        </Route>
      </Switch>
    );
  }
}

export default Money;
