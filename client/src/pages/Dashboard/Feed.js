import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_ALL_POSTS, getAllPosts } from '../../utils/queries';

const Feed = () => {
  const { loading, error, data } = useQuery(getAllPosts);
  console.log(loading, error, data)
  const posts = data?.getPosts || [];
  console.log("myposts:", posts);
  return (
    <div className="container">
      {/* will inserts about the post */}
      <h1 className="large text-primary">Posts</h1>
      
      
      <div className="posts">
        {posts.map((post) => (
        
          <div className="post bg-white p-1 my-1">
            
            <div>
            <p className="my-1">p {post.post}</p>
            <p className="my-1">fname {post.user.firstName}</p>
              <p className="post-date">Posted on {post.date}</p>
            </div>
          </div>


        ))}
      </div>
    </div>
  );
};

export default Feed;
