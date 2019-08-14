import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { sendPost } from "../actions/craigslist.actions";

export default props => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    sendPost(title, content, props.match.params.slug);
  }

  return (
    <div>
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
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};
