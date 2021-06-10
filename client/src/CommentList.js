import React from 'react';


/* this is our react component that essentially keeps an entire list of comments, we pass the post id in from the main app and then render it beneath the posts */
const CommentList = ({ comments }) => {

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>
    {renderedComments}
  </ul>;
};

export default CommentList;
