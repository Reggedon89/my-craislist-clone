import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { sendPost } from "../actions/craigslist.actions";
import { Link } from "react-router-dom";

export default props => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    sendPost(title, description, props.match.params.slug);
    // props.history.push("/" + props.match.params.slug);
  }

  return (
    <div>
      <div id="rl-tag">
        <Link to={"/listingpage/" + props.match.params.slug}>
          <span>RL</span>
        </Link>
      </div>
      <h1>Posting to {props.match.params.slug}</h1>
      <form className="post-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          className="post-input"
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};
