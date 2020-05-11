import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function LeftNav() {
  return (
    <div className="left-nav">
      <h2>Welcome Coffee Lovers!!</h2>
      <br>
      </br>
      <br></br>
      <Link className="home" to="/">
      <button>Main Page</button>
      <br></br>
      <br></br>
      </Link>
      <br></br>
      <Link className="roasters" to="/roasters">
      <button>Take a look at all of the Roasters we are fortunate to be partnered with</button>
      </Link>
      <br></br>
      <br></br>
      <br></br>
      <Link className="coffees" to="/coffees">
        <button>Curious for more, check out all of the coffees you could choose from</button>
      </Link>

    </div>
  );
}

export default LeftNav;
