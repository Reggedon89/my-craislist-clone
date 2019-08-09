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
        <div>
          <Route path="/" component={Home} />
        </div>
      </Router>
    </Provider>
  );
};
