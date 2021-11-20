import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_ALL_POSTS } from '../../utils/queries';
import PostCard from '../../components/postCard';
import PostForm from '../../components/PostForm/PostForm';

import { Spring, animated } from "react-spring";

const Feed = ({ transition }) => {
  const { loading, error, data } = useQuery(QUERY_ALL_POSTS);
  console.log(loading, error, data)
  const posts = data?.getPosts || [];
  console.log("myposts:", posts);

  return (
    <Spring
      from={transition.from}
      to={transition.to}
      config={transition.config}
    >
      {(props) => (
        <animated.div style={props}>
          <div className="container">
            <h1 className="large text-center mb-5">Posts</h1>
            <PostForm />
            <div className="posts d-flex flex-row justify-content-center">
              {posts.map((post) => (
                <PostCard post={post} />
              ))}
            </div>
          </div>
        </animated.div>)}
    </Spring>
  );
};

export default Feed;
