import React from 'react';
import { teamMembers } from '../assets/data';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Nav from '../components/Nav/index';
import { Spring, animated } from "react-spring";


const Team = ({ transition }) => {
  return (
    <>
      <Nav />
      <Spring
        from={transition.from}
        to={transition.to}
        config={transition.config}
      >
        {(props) => (
          <animated.div style={props}>
            <div className="container d-flex flex-row justify-content-center" style={{ width: "70%" }}>
              <h1 className="text-center mt-5">OUR TEAM</h1>
              {teamMembers.sort(() => .5 - Math.random()).map((member) => (
                <div className="container mt-3 p-4">
                  <div className="row align-items-center members">
                    <div className="col-md-4 col-12 px-4">
                      <img
                        className="rounded-circle shadow"
                        alt="profile"
                        src={require(`../assets/${member.image}`).default}
                      />
                    </div>
                    <div className="col-md-8 col-12">
                      <h3> {member.name} </h3>
                      <p> {member.bio} </p>
                      <a href={member.linkedin} target="_blank" rel="noreferrer">
                        <FaLinkedinIn className="links m-1" size={36} />
                      </a>
                      <a href={member.github} target="_blank" rel="noreferrer">
                        <FaGithub className="links m-1" size={36} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </animated.div>)}
      </Spring>
    </>
  );
};

export default Team;
