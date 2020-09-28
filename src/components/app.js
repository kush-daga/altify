import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import imageGithub from "../assets/GitHub-Mark-64px.png";
const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Home path="/" />
    </Router>
    <a
      href="https://github.com/kush-daga/altify"
      rel="noreferrer"
      target="_blank"
    >
      <div
        style={{
          position: "fixed",
          display: "flex",
          bottom: "20px",
          right: 0,
          justifyContent: "center",
          alignItems: "center",
          marginRight: "20px",
          cursor: "pointer",
          backgroundColor: "#f3f3f3",
          padding: "16px",
          borderRadius: "5px",
        }}
      >
        <img src={imageGithub} width={32} alt="github" />
      </div>
    </a>
  </div>
);

export default App;
