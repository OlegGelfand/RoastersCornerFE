import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div>
        <div className="drop-down">
          <button className="drop-btn">Roasters Corner</button>
          <div className="drop-down-content">
            <div className="nav">
              <Link className="home" to="/">
                <button>Main Page</button>
                <br></br>
                <br></br>
              </Link>
              <Link className="roasters" to="/roasters">
                <button>See all Roasters</button>
              </Link>
              <Link className="feedback" to="/feedback">
                <button>Feedback</button>
              </Link>
              <Link className="about" to="/about">
                <button>About RoastersCorner</button>
              </Link>
              <Link className="coffees" to="/coffees">
                <button>See all Coffees</button>
              </Link>
              <Link className="coffees" to="/roastersPage">
                <button>See all Coffees</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
