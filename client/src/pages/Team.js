import React from 'react';
import { teamMembers } from '../assets/data';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  return (
    <div className="container">
      <h1>Our Team</h1>
          {teamMembers.map((member) => (
            <div className="container">
              <div className="row">
                <div className="col">
                <img
                  alt="profile"
                  src={member.image}
                />
                </div>
                <div className="col">
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
  );
};

export default Team;
