import React from 'react';


/* this is our react component that essentially keeps an entire list of comments, we pass the post id in from the main app and then render it beneath the posts */
const CommentList = ({ comments }) => {

  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === 'approved') {
      content = comment.content;
    }

    if (comment.status === 'pending') {
      content = 'This is a pending comment awaiting moderation';
    }
    
    if (comment.status === 'rejected') {
      content = 'This comment has been rejected by the all knowing moderator. He hates oranges';
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>
    {renderedComments}
  </ul>;
};

export default CommentList;
