import Button from 'react-bootstrap/Button';
import React, { Fragment, useEffect } from 'react';
import { Link } from "react-router-dom";
import Nav from '../components/Nav/index'

const Home = () => {

  useEffect(() => {console.log(`Home.js MOUNTED`)
    return console.log(`Home.js UNMOUNTED`)
    }, [])

  return (
    <>
      <Nav />
    <div className="landing" style={{backgroundColor:"#DFD4D1"}}>
      {/* will inserts information/summary about the website */}
      <div className="text-center container text-light h-100 d-flex flex-row align-items-center" style={{maxWidth:"800px"}}>
        <div style={{marginBottom:"300px"}}>
        <h1 className="display-4 mb-4 mt-5 p-4 home">Be The Difference</h1>
          <h4 className="mt-5 mb-4">
          Begin learning new ways to live a more sustainable lifestyle and create a social network along the journey.
          </h4>
          <Button className="mt-5" variant="primary" size="lg">
            <Link
                style={{ textDecoration: "none", color: "white"}}
                to="/signup"
              >
                Sign up now
              </Link>
            </Button>

        </div>

      </div>
    </div>
    </>

  );
};

export default Home;
