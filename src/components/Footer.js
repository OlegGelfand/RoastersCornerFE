import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <img
          className="vine"
          src="https://i.ya-webdesign.com/images/vines-border-png-5.png"
          alt="vine"
        ></img>
        <div className="nav">
          <Link className="feedback" to="/feedback">
            <p>Feedback</p>
          </Link>
          {/* <Link className="about" to="/about">
            <p>About Us</p>
          </Link> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
