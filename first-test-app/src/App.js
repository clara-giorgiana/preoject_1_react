import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./componenets/Home";
import Posts from "./componenets/Posts";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Router>
            <Routes>
            <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/posts" element={<Posts />} />

            </Routes>

        </Router>
      </div>
    );
  }
}

export default App;
