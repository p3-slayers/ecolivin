import React from 'react';
import bag from '../assets/bag.jpg'; //change it to what you need
import hands from '../assets/hands.jpg'; 
import categories from '../assets/categories.png'
import Nav from '../components/Nav/index'

function About() {
  return (
    <>
    <Nav />
      <div className="container mt-5">
        <h1 className="text-center">ABOUT</h1>

        <p className="text-center px-5 mx-5 mt-3" >This website is designed to help users track and improve their sustainable living goals. After creating an account users will be provided a questionnaire that will help determine their sustainability scores in five categories.</p>
        <div className="row">
          <div className="col-12 text-center">
        <img alt="Categories" src={categories} style={{width:"65%"}}/>
        </div></div>
        <hr/>
        <div className="row px-4 mt-5 align-items-center">
          <div className="col px-5">
            <h2 className="text-center">PERSONAL GOALS</h2>
            <p>Users will have access to a dashboard where they can view their current scores and a graph comparing their scores to the average scores of all other users. On the dashboard users will also be able to track personal goals that can be monitored and updated weekly as well as information on different areas of improvement based on each category.</p>
          </div>
          <div className="col text-center">
            <img className="rounded" alt="Personal Goals" src={bag} style={{width:"70%"}}/>
          </div>
        </div>

        <div className="row mt-4 mb-5 px-4 align-items-center">
          <div className="col text-center">
            <img className="rounded" alt="Social Network" src={hands} style={{width:"70%"}}/>
          </div>
          <div className="col  px-5">
            <h2 className="text-center">SOCIAL NETWORK</h2>
            <p>In addition to tracking their own progress, users are able to create or join challenges and explore local events related to sustainability. Users that join a challenge or event are able to leave comments and interact with members who are also participating. Each user will also have access to a feed where they can view posts from other members and create their own posts to share goals, improvements, or new products they are using.</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default About;
