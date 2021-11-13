import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Moment from 'react-moment';
Moment.globalFormat = 'D/MM/YYYY H:MM';

function PostCard(input) {
  const post = input.post;

  return (

    <div className="post bg-white p-1 my-1">
        <div className="card mb-3" >
        <div className="row g-0">
            <div className="col-md-4">
            <img src="..." className={"img-fluid rounded-start"} alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 class="card-title">{post.user._id}</h5>
                <p className="card-text text-muted">post text: {post.post}</p>
                <p className="card-text"><small className="text-muted">Posted on <Moment unix>{post.date/1000}</Moment></small></p>
            </div>
            </div>
        </div>
        </div>
    </div>
    
  );
}

export default PostCard;
