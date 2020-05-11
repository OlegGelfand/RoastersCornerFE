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
             
             
              <a href="">Feedback</a>
              <a href="">About RoastersCorner</a>

              
            </div>
          </div>
        </div>
      </div>
  
   
    </div>
  );
}

export default Header;