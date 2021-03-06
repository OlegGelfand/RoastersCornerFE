import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Breakpoint } from "react-socks";

function Header() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  return (
    <div>
      <Breakpoint medium up>
        <div>
          <div className="drop-down">
            <div className="drop-down-content">
              <img
                className="vine"
                src="https://i.ya-webdesign.com/images/vines-border-png-5.png"
                alt="desktop-vine"
              ></img>
              <div className="nav">
                <Link to="/">
                  <p>Roasters Corner</p>
                  <h5>Nothing but Coffee</h5>
                </Link>
                <Link to="/roasters">
                  <p>All Roasters</p>
                  <h5>Great People</h5>
                </Link>
                <img
                  className="logo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbINJ_HgTWc_gxCS2JdKrZ92cxIS8l5Y9OPBN18XRQCb5bZERm&usqp=CAU"
                  alt="mainlogo"
                ></img>
                <Link className="coffees" to="/coffees">
                  <p>All Coffees</p>
                  <h5>Huge Selection</h5>
                </Link>
                <span className="login-buttons" to>
                  <Link to="/roastersPage">
                    <p>Login</p>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Breakpoint>
      <Breakpoint small down>
        <h2>Roasters Corner </h2>
        <img
          className="mobile-vine"
          src="https://i.ya-webdesign.com/images/vines-border-png-5.png"
          alt="topvine"
        ></img>
        <button className="accordion">Menu</button>
        <div className="panel">
          <Link to="/roastersPage">
            <p>Login</p>
          </Link>
          <Link className="coffees" to="/coffees">
            <p>All Coffees</p>
          </Link>
          <Link className="roasters" to="/roasters">
            <p>All Roasters</p>
          </Link>
          <Link className="home" to="/">
            <p>Roasters Corner</p>
          </Link>
          <Link className="coffeePage" to="/">
            <p>Roasters Coffees</p>
          </Link>
        </div>
      </Breakpoint>
    </div>
  );
}

export default Header;
