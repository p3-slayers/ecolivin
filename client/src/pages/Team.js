import React from 'react';
import { teamMembers } from '../assets/data';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Nav from '../components/Nav/index';


const Team = () => {
  return (
    <>
    <Nav />
    <div className="container">
      <h1 className="text-center mt-5">OUR TEAM</h1>
          {teamMembers.sort( () => .5 - Math.random() ).map((member) => (
            <div className="container mt-3 p-4">
              <div className="row align-items-center">
                <div className="col-4 px-4">
                <img
                  className="rounded-circle shadow"
                  alt="profile"
                  src= {require(`../assets/${member.image}`).default} 
                />
                </div>
                <div className="col-8">
                <h3> {member.name} </h3>
                <p> {member.bio} </p>
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedinIn className="links m-1"size={36} />
                </a>
                <a href={member.github} target="_blank" rel="noreferrer">
                    <FaGithub className="links m-1"size={36} />
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
