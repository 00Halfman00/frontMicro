import React from "react";
import PostCreateForm from "./posts/PostCreateForm";
import PostList from "./posts/PostList";

const App = () => {
  return (
    <div className="card container">
      <h1 className="title">Create Posts</h1>
      <PostCreateForm/>
      <h1 className="title">Posts</h1>
      <PostList/>
    </div>
  )
}

export default App;
