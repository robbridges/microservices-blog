import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CommentCreate from './commentCreate';
import CommentList from './CommentList';


/* This is our combined post list we give it some style below, but the onsubmit creates a post and saves it value adding it to the post list */
const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4002/posts');
    
    setPosts(res.data);
  };

  useEffect(() => {
    
   fetchPosts(); 
  }, []);
  /* rendering each post and comment below */
  const renderedPosts = Object.values(posts).map(post => {
    return (
      <div 
      className="card" 
      style= {{width: '30%', marginBottom: '20px' }}
      key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList comments={post.comments}/>
          <CommentCreate postId={post.id} />
        </div>
      </div>
    )
  })

  return <div className="d-flex flex-row flex-wrap justify-content-between">
    {renderedPosts}
    </div>;
};

export default PostList;
