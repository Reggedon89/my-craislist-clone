import React from "react";
import Calender from "react-calendar";
import { Link } from "react-router-dom";

export default props => {
  return (
    <div>
      {/* use the size opf the div to change the size of the calender */}

      <div id="mainWrapper">
        <div id="leftSideBar">
          <h1>Ryanslist</h1>
          <li>
            <Link to="/home">Create a posting</Link>
          </li>
          <li>
            <Link to="/home">My Account</Link>
          </li>
          <input id="search" type="text" placeholder="Search Ryanslist" />
          <div id="calendar">
            <Calender />
          </div>
          <div className="linksDiv">
            <li>
              <Link to="/home">help, faq, abuse, legal</Link>
            </li>
            <li>
              <Link to="/home">avoid scams & fraud</Link>
            </li>
            <li>
              <Link to="/home">personal safety tips</Link>
            </li>
            <li>
              <Link to="/home">terms of usenew</Link>
            </li>
            <li>
              <Link to="/home">privacy policy</Link>
            </li>
            <li>
              <Link to="/home">system status</Link>
            </li>
          </div>
          <div className="linksDiv">
            <li>
              <Link to="/home">about craigslist</Link>
            </li>
            <li>
              <Link to="/home">craigslist is hiring in sf</Link>
            </li>
            <li>
              <Link to="/home">craigslist open source</Link>
            </li>
            <li>
              <Link to="/home">craigslist blog</Link>
            </li>
            <li>
              <Link to="/home">best-of-craigslist</Link>
            </li>
            <li>
              <Link to="/home">craigslist TV</Link>
            </li>
            <li>
              <Link to="/home">"craigslist joe"</Link>
            </li>
            <li>
              <Link to="/home">craig connects</Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
