import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";
import { Breakpoint} from "react-socks";
function Footer() {
 
  return (
    <footer>
      <div className="footer">
        {/* <button></button>
        <button></button> */}
     <img className="vine" src="https://i.ya-webdesign.com/images/vines-border-png-5.png"></img>
            <div className="nav">
{/*            
              <Link className="home" to="/">
                <p>Roasters Corner</p>
                
        
              </Link> */}
      
              <Link className="feedback" to="/feedback">
              <p>feedback</p>
              </Link>
              <Link className="about" to="/about">
              <p>About Us</p>
              </Link>
             
            
            </div>
      </div>
    </footer>
  );
}

export default Footer;
