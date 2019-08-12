import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { matchListings } from "../actions/craigslist.actions";

export default props => {
  const posts = useSelector(appState => appState.listings);
  const slug = props.match.params.slug;

  useEffect(() => {
    matchListings(slug);
  }, [slug]);
  return (
    <div className="h">
      <nav className="listing-nav">
        <div id="rl-tag">
          <Link to="/">
            <span>RL</span>
          </Link>
        </div>
        <form>
          <select>
            <option>las vegas</option>
          </select>
          <span> > </span>
          <select>
            <option>community</option>
          </select>
          <span> > </span>
          <select>
            <option>{slug}</option>
          </select>
        </form>
        <div className="post-account">
          <div className="post">
            <Link to="/">post</Link>
          </div>
          <div className="account">
            <Link to="/">account</Link>
          </div>
        </div>
      </nav>
      {posts.map(post => (
        <h1> {post.description}</h1>
      ))}
    </div>
  );
};
