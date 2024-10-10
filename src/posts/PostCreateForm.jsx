import React, { useState } from 'react';
import axios from 'axios';

const PostCreateForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/posts', { title, content }).then(({data}) => {
      setContent("");
      setTitle("");
    }).catch(e => console.error(e))
  };
  return (
    <form className="post-form card" onSubmit={submitHandler}>
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Content</label>
        <textarea
          className="form-control"
          value={content}
          rows={6}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button className="btn btn-secondary">submit</button>
    </form>
  );
};

export default PostCreateForm;
