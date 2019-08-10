import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Citylist from "./Citylist";
import SearchArea from "./Searcharea";
import "normalize.css/normalize.css";
import "../styles/App.css";
import { Provider } from "react-redux";
import store from "../store";
import ListingPage from "./ListingPage";
import { subCat } from "./Home";

export default props => {
  return (
    <Router>
      <Provider store={store}>
        <div className="page-wrapper">
          <Route exact path="/" component={Home} />
          <Route path={"/listingpage/:slug"} component={ListingPage} />
        </div>
      </Provider>
    </Router>
  );
};
