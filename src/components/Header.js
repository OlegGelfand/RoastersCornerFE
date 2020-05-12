import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Breakpoint } from "react-socks";

function Header() {
  return (
    <div>
      <div>
        <div className="drop-down">
          <div className="drop-down-content">
            <img
              className="vine"
              src="https://i.ya-webdesign.com/images/vines-border-png-5.png"
            ></img>
            <div className="nav">
              <Link className="home" to="/">
                <p>Roasters Corner</p>
                <h5>Nothing but Coffee</h5>
                <br></br>
                <br></br>
              </Link>
              <Link className="roasters" to="/roasters">
                <p>All Roasters</p>
                <h5>Great People</h5>
              </Link>
              <Link className="about"> 
              <img className= "logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbINJ_HgTWc_gxCS2JdKrZ92cxIS8l5Y9OPBN18XRQCb5bZERm&usqp=CAU"></img>
              {/* <p >RoastersCorner</p> */}
              {/* <h5>Get To Know Us</h5>  */}
              </Link>
              <Link className="coffees" to="/coffees">
                <p>All Coffees</p>
                <h5>Huge Selection</h5>
              </Link>
              <span className="login-buttons">
                <Link to="/Login">
                  <p>Login</p>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
