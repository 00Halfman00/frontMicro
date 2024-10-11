import React from 'react';

const CommentsList = ({ comments }) => {
  const renderComments = comments[0] ? (
    comments.map((comment) => {
      let message = "";
      if(comment.status === "pending") message = "pending ";
      else if(comment.status === "rejected") message = "comment rejected";
      else message = comment.content;
      return <li className='comment' key={comment.id}>
        <p className='comment-id'>{comment.id}:</p>
        <p>{message}</p>
        </li>;
    })
  ) : (
    <li>... comments list is empty ...</li>
  );
  return <ul className='comments-list'>{renderComments}</ul>;
};
export default CommentsList;
