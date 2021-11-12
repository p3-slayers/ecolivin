import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="landing" style={{backgroundColor:"#ECCCB6"}}>
      {/* will inserts information/summary about the website */}
      <div className="text-center container text-light h-100 d-flex flex-row align-items-center" style={{maxWidth:"800px"}}>
        <div style={{marginBottom:"300px"}}>
        <h1 className="display-3 mb-4 logo">Welcome to ecoLIVIN</h1>
          <p>
          Lorem ipsum dolor sit amet, ad movet cetero iuvaret eam. Eos wisi errem ut, urbanitas necessitatibus cu sea. At vix aeterno praesent argumentum. No has nusquam argumentum. Mea nostrum omittam ne, in eos meliore principes. Partem dissentias sit te, pri tritani repudiandae at. Populo mollis ius ne, at antiopam euripidis mnesarchum has.
          </p>
          <Button className="mt-5" variant="light" size="lg">
            <Link
                style={{ textDecoration: "none", color: "black"}}
                to="/signup"
              >
                Sign up now
              </Link>
            </Button>

        </div>

      </div>
    </div>
  );
};

export default Home;
