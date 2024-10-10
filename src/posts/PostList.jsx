import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreateForm from '../comments/CommentCreateForm';
import CommentsList from '../comments/CommentsList';

const PostList = () => {
  const [posts, listPost] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:4002/events')
      .then(({data}) => {
        console.log("data: ", data)
        listPost(data);
      })
      .catch((e) => console.error(e));
  }, []);

  const renderPosts = Object.values(posts).map((post) => {
    return (
      <div key={post.id} className="card">
        <div className="card-body">
          <h3 className="post-title">{post.title}</h3>
          <p>{post.content}</p>
        </div>
        <CommentsList comments={post.comments} />
        <div>
          <CommentCreateForm postId={post.id} />
        </div>
      </div>
    );
  });

  const view = Object.keys(posts).length ? (
    renderPosts
  ) : (
    <h3 className="pending">... posts list is empty ...</h3>
  );

  return <div>{view}</div>;
};

export default PostList;
