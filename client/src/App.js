import React from 'react';
import PostCreate from './postCreate';
import PostList from './PostList';




/* App heirarchy, an input to create a post, our post create elemenet, posts, and any comments are contained in postList */
const App = () => {
  return(
    <div className="container">
      <h1>Create Post :)</h1>
      <PostCreate />
      <hr/>
      <h1>Posts</h1>
      <PostList />
    </div>
  )

};


export default App;