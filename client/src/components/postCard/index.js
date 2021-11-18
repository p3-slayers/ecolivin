import React from "react";
import Moment from 'react-moment';
Moment.globalFormat = 'D/MM/YYYY H:MM';


function PostCard(input) {
  const post = input.post;

  return (
    <div className="card text-dark bg-light mb-4 mx-5">
        <div className="card-header d-flex">
          <img 
          src={post.user.profileImage} 
          className="img-fluid img-thumbnail rounded-circle"
          id="imgIcon"
          alt="" />
          <div className="p-2 align-middle">
            <h4> {post.user.firstName} {post.user.lastName}</h4>
            <p className="text-muted small m-0 p-0">Posted on <Moment unix>{post.date/1000}</Moment></p>
          </div>

        </div>
        <div className="card-body bg-white">
        <p className="card-text">{post.post}</p>
        </div>
    </div>
  );
}

export default PostCard;
