import React, { useState } from 'react';
import axios from 'axios';

const CommentCreateForm = ({ postId }) => {
  const [comment, setComment] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://posts.com/posts/${postId}/comments`, { comment })
      .then((e) => setComment(''))
      .catch((e) => console.error(e));
  };

  return (
    <form className="card" onSubmit={submitHandler}>
      <div className="form-group">
        <label>Comment</label>
        <textarea
          className="form-control"
          value={comment}
          rows={5}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button className="btn btn-secondary">submit</button>
    </form>
  );
};

export default CommentCreateForm;
