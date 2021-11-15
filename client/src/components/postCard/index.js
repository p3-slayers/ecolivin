import React from "react";
// import { Link } from "react-router-dom";
// import Card from 'react-bootstrap/Card'
import Moment from 'react-moment';
Moment.globalFormat = 'D/MM/YYYY H:MM';

function PostCard(input) {
  const post = input.post;

  return (


    <div className="card text-dark bg-light mb-4 mx-5">
        <div className="card-header"><h4>👤 {post.user.firstName} {post.user.lastName}</h4>
        <p className="text-muted small m-0 p-0">Posted on <Moment unix>{post.date/1000}</Moment></p>

        </div>
        <div className="card-body bg-white">
        <p className="card-text">{post.post}</p>
        </div>
    </div>
    
  );
}

export default PostCard;
