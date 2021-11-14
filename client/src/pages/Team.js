import React from 'react';
import { teamMembers } from '../assets/data';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Nav from '../components/Nav/index';


const Team = () => {
  return (
    <>
    <Nav />
    <div className="container">
      <h1 className="text-center mt-5">Our Team</h1>
          {teamMembers.map((member) => (
            <div className="container mt-5">
              <div className="row">
                <div className="col-4 mt-3 px-4">
                <img
                  alt="profile"
                  src= {require(`../assets/${member.image}`).default} 
                />
                </div>
                <div className="col-8">
                <h3> {member.name} </h3>
                <p> {member.bio} </p>
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedinIn size={36} />
                </a>
                <a href={member.github} target="_blank" rel="noreferrer">
                    <FaGithub size={36} />
                </a>
                </div>
              </div>
              </div>
          ))}
    </div>
    </>
  );
};

export default Team;
