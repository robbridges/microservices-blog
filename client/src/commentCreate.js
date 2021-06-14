import React, { useState } from 'react';
import axios from 'axios';


/* this is the physical rendering of where we create a comment, when the submit button is placed any value typed into the input element is axiosed over to be rendered by react */
const CommentCreate = ({postId,}) => {
  const [content, setContent] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });

    setContent('');
  };

  

  /* after we update the state of react with the comment we render it correctly */
  return ( 
  <div>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>New Comment</label>
        <input 
          value={content} 
          onChange={e => setContent(e.target.value)} 
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  </div>
  );
};

export default CommentCreate; 