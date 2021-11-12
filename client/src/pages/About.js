import React from 'react';

function About() {
  return (
    <>
      <div className="container">
        <h2 className="text-center">About</h2>

        <p>This app was designed to help users track and improve their sustainable living goals. After creating an account users will be provided a questionnaire. Their answers will determine their sustainability scores in five categories: Transportation, Food, Waste, Housing, and Lifestyle.</p>

        <div className="row">
          <div className="col">
            <h2 className="text-center">Personal Goals</h2>
            <p>Users will have access to a dashboard where they can view their current scores and a graph comparing their scores to the average scores of all other users. On the dashboard users will also be able to track personal goals that can be monitored and updated weekly as well as information on different areas of improvement based on each category.</p>
          </div>
          <div className="col">
            <img alt="Personal Goals" src="https://via.placeholder.com/450x150" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <img alt="Social Network" src="https://via.placeholder.com/450x150" />
          </div>
          <div className="col">
            <h2 className="text-center">Social Network</h2>
            <p>In addition to tracking their own progress, users are able to create or join challenges and explore local events related to sustainability. Users that join a challenge or event are able to leave comments and interact with members who are also participating. Each user will also have access to a feed where they can view posts from other members and create their own posts to share goals, improvements, or new products they are using.</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default About;
