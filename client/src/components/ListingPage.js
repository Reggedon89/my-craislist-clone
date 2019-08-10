import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { actionCatagory, matchListings } from "../actions/craigslist.actions";

export default props => {
  const pageName = useSelector(appState => appState.listings);

  useEffect(() => {
    matchListings();
  }, []);
  const slug = props.match.params.slug;

  return (
    <div>
      <h1>{slug}</h1>
      <p>{slug.title}</p>
    </div>
  );
};
