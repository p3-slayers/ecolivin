import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_ALL_POSTS } from '../../utils/queries';

const Feed = () => {
  console.log("before querying");
  const { loading, data } = useQuery(QUERY_ALL_POSTS);
  const posts = data?.posts || [];
  console.log("myposts:", posts);
  return (
    <div className="container">
      {/* will inserts about the post */}
      <h1 className="large text-primary">Posts</h1>
      
      
      <div className="posts">
        {posts.map((post) => (

          <div className="post bg-white p-1 my-1">
            
            <div>
            <p className="my-1">{post.text}</p>
            <p className="my-1">{post.user.firstName}</p>
              <p className="post-date">Posted on {post.date}</p>
            </div>
          </div>


        ))}
      </div>
    </div>
  );
};

export default Feed;
