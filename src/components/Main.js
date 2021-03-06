import React from "react";
import "../App.css";
import SideBars from "./SideBars";
import Header from "./Header";
import Footer from "./Footer";
import { Breakpoint } from "react-socks";

function Main() {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  return (
    <div className="images">
      <Header />
      <Breakpoint medium up>
        <SideBars />

        <div className="title">RoastersCorner</div>
        <div className="square">
          <button className="mainSquare">
            <div className="text">
              Welcome to Roasters Corner. Our aim is to be bring you what other
              coffee subscriptions can't, to connect you to your Roaster or any
              roaster you may want to try across the United States.
              <br></br>
              <br></br>
              <span>
                Click around to view our variety of coffees and Roasters
              </span>
            </div>
          </button>
          <button className="mainSquare">
            <div className="text">
            Coffee has become a ritual for many Americans every morning. We
              just want to make it a ritual worth kicking off the day with.
              <br></br>
              <br></br>
              For us Coffee is as essential as water, and with society not
              getting any more simple any time soon, we can only expect this
              ritual to strengthen.
            </div>
          </button>
        </div>
      </Breakpoint>

      <Breakpoint small down>
      <div className="title">RoastersCorner</div>
        <div className="square">
          <button className="mainSquare">
            <div className="text">
              Welcome to Roasters Corner. Our aim is to be bring you what other
              coffee subscriptions can't, to connect you to your Roaster or any
              roaster you may want to try across the United States.
              <br></br>
              <br></br>
              <span>
                Click around to view our variety of coffees and Roasters
              </span>
            </div>
          </button>
        </div>
        

</Breakpoint>
      <Footer />
    </div>
  );
}

export default Main;
