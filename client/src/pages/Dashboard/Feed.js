import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_ALL_POSTS } from '../../utils/queries';
import PostCard from '../../components/postCard';
import PostForm from '../../components/PostForm/PostForm'

const Feed = () => {
  const { loading, error, data } = useQuery(QUERY_ALL_POSTS);
  console.log(loading, error, data)
  const posts = data?.getPosts || [];
  console.log("myposts:", posts);
  return (

    <div className="container">
      <h1 className="large text-center mb-5">Posts</h1>
        <PostForm/>
      <div className="posts d-flex flex-row justify-content-center">
        {posts.map((post) => (
          <PostCard post={post}/>
        ))}
      </div>
    </div>

  

  );
};

export default Feed;
