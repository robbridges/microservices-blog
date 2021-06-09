import React, { useState } from 'react';
import axios from 'axios'

/* our post creation logic, it updates temporary state of the app with a blog post, creates it and renders it below */
const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post('http://localhost:4000/posts', {
      title
    });

    setTitle('');
  };

  
  /* upon submission of this order are sending off the new state of the app */
  return ( <div>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          className="form-control" 
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  </div>
  );
}

export default PostCreate;