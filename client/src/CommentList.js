import React, {useState, useEffect} from 'react';
import axios from 'axios';

/* this is our react component that essentially keeps an entire list of comments, we pass the post id in from the main app and then render it beneath the posts */
const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });



  return <ul>
    {renderedComments}
  </ul>;
};

export default CommentList;
