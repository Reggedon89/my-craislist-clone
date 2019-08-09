import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { actionCatagory } from "../actions/craigslist.actions";
import SearchArea from "./Searcharea";
import Citylist from "./Citylist";
export default props => {
  const catagory = useSelector(appState => appState.categories);

  useEffect(() => {
    actionCatagory();
  }, []);

  return (
    <div className="home-wrapper">
      <SearchArea />
      <div>
        <div className="city-name">
          <h1>las vegas</h1>
        </div>
        <div className="last-wrapper">
          {catagory.map(item => (
            <div key={item.name} className="main-cat">
              <div className="main-cat-wrapper">
                <h3>{item.name}</h3>
              </div>
              <div>
                {item.subcat.map(sub => (
                  <div className="sub-cat" key={sub.id}>
                    <Link to="/">{sub.name}</Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Citylist />
    </div>
  );
};
