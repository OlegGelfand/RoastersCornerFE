import React from "react";
import "../App.css";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import Footer from "./Footer";

function Main() {
  return (
    <div>
      <div className="main">
        <ul>
          <li>RoastersCorner</li>
          <li> keeping you nostalgically caffinated, wherever you are</li>
        </ul>
        <img
          className="mainImg"
          src="https://media.giphy.com/media/Q6joirtIBHUsw/giphy.gif"
        ></img>
        <img
          className="mainImg"
          src="https://www.littlecoffeeplace.com/wp-content/uploads/2018/10/Crema.co-Coffee-Subscription-Review.jpg"
        ></img>
      </div>
      <LeftNav />
      <RightNav />
      <Footer />
    </div>
  );
}

export default Main;
