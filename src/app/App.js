import React from "react";
import Search from "../features/search/Search";
import Posts from "../features/posts/Posts";
import Subreddit from "../features/subreddit/Subreddit";
import './App.css'

export default function App() {
  return (
    <section>
      <Search />
      <section className="fetchPosts">
        <article className="posts">
          <Posts />
        </article>
        <nav className="subreddit">
          <Subreddit />
        </nav>
      </section>
    </section>)
}