import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionCatagory, matchListings } from "../actions/craigslist.actions";
import "font-awesome/css/font-awesome.min.css";
import Moment from "moment";

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
            <option>{slug}</option>
          </select>
          <span> > </span>
          <select>
            <option>{slug}</option>
          </select>
        </form>
        <div className="post-account">
          <div className="post">
            <Link to={"/postform/" + props.match.params.slug}>post</Link>
          </div>
          <div className="account">
            <Link to="/">account</Link>
          </div>
        </div>
      </nav>
      <div className="listing-wrapper-wrapper">
        <div className="listing-wrapper">
          <div className="side-wrapper">
            <span id="cat">{slug}</span>
            <ul>
              <li>
                {" "}
                <input type="checkbox" />
                search titles only
              </li>
              <li>
                {" "}
                <input type="checkbox" />
                has image
              </li>
              <li>
                {" "}
                <input type="checkbox" />
                posted today
              </li>
              <li>
                {" "}
                <input type="checkbox" />
                bundle duplicates
              </li>
              <li>
                {" "}
                <input type="checkbox" />
                include nearby areas
              </li>
            </ul>
            <span id="miles">MILES FROM ZIP</span>
            <form>
              <input type="text" placeholder="miles" />
              <input type="text" placeholder="from zip" />
            </form>
            <Link to="/">reset</Link>
            <Link to="/">update search</Link>
          </div>
        </div>
        <div className="main-listing-wrapper">
          <form>
            <input type="text" placeholder={slug} />
            <button>
              <i className="fa fa-search" />{" "}
            </button>
          </form>
          <div className="posts-list-wrapper">
            {posts.map(post => (
              <ul key={"post" + post.id}>
                <li>
                  <Link key={post.id} to={"/postingpage/" + post.id}>
                    {post.title}
                  </Link>
                  {Moment(post.time_created).fromNow()}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
