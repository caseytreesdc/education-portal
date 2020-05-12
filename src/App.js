import React from "react";

import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Main></Main>
      </div>
    </BrowserRouter>
  );
}

export default App;
