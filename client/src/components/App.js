import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Citylist from "./Citylist";
import SearchArea from "./Searcharea";
import "normalize.css/normalize.css";
import "../styles/App.css";
import { Provider } from "react-redux";
import store from "../store";

export default props => {
  return (
    <Provider store={store}>
      <Router>
        <div className="page-wrapper">
          <div className="search-area">
            <Route exact path="/" component={SearchArea} />
          </div>
          <div className="categories">
            <Route path="/" component={Home} />
          </div>
          <div className="city-list">
            <Route path="/" component={Citylist} />
          </div>
        </div>
      </Router>
    </Provider>
  );
};
