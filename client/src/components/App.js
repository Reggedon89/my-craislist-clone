import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import PostForm from "./PostForm";
import "normalize.css/normalize.css";
import "../styles/App.css";
import { Provider } from "react-redux";
import store from "../store";
import ListingPage from "./ListingPage";
import { subCat } from "./Home";
import IndiPostingPage from "./IndiPostingPage";

export default props => {
  return (
    <Router>
      <Provider store={store}>
        <div className="page-wrapper">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/indipostingpage" component={IndiPostingPage} />
            <Route path="/postform/:slug" component={PostForm} />
            <Route path="/listingpage/:slug" component={ListingPage} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
};
