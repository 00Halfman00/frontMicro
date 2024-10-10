import React from 'react';

const CommentsList = ({ comments }) => {
  const renderComments = comments[0] ? (
    comments.map((comment) => {
      return <li className='comment' key={comment.id}>
        <p className='comment-id'>{comment.id}:</p>
        <p>{comment.content}</p>
        </li>;
    })
  ) : (
    <li>... comments list is empty ...</li>
  );
  return <ul className='comments-list'>{renderComments}</ul>;
};

export default CommentsList;



/*
const CommentsList = ({ comments }) => {
  const [comments, setComments] = useState([]);

  // the use of .then makes it unecessary to create a helper function
  // and it stops lynter from complaining about dependencies in useEffect
  useEffect(() => {
      axios.get(`http://localhost:4001/posts/${postId}/comments`)
      .then((e) => {
        setComments(e.data);
      })
      .catch((e) => console.error(e));
  }, [postId]);

  const renderComments = comments[0] ? (
    comments.map((comment) => {
      return <li className='comment' key={comment.id}>
        <p className='comment-id'>{comment.id}:</p>
        <p>{comment.content}</p>
        </li>;
    })
  ) : (
    <li>... comments list is empty ...</li>
  );

  return <ul className='comments-list'>{renderComments}</ul>;
};

*/
