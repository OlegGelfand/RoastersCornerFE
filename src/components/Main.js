import React from "react";
import "../App.css";
import Example from "./Example";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

function Main() {
  return (
    <div>
      <div className="main">
        <img src="https://media.giphy.com/media/Q6joirtIBHUsw/giphy.gif"></img>
        <img src="https://www.littlecoffeeplace.com/wp-content/uploads/2018/10/Crema.co-Coffee-Subscription-Review.jpg"></img>
        </div>

      <Example />
      <LeftNav />
      <RightNav />
    </div>
  );
}

export default Main;
