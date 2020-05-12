import React from "react";
import "../App.css";
import SideBars from "./SideBars";
import Header from "./Header";
import Footer from "./Footer";
import { Breakpoint} from "react-socks";

function Main() {
  return (
    <div className="images">
      <Header />
      <Breakpoint medium up>
    <SideBars/>
      </Breakpoint>
      <div className="title">RoastersCorner</div>
      <div className="square">
        <button className="mainSquare">
          <div>
            Welcome to Roasters Corner. We are partnered with many roasters
            across the United States and please{" "}
            <span>click on this image to see a full list of our Roasts</span>
          </div>
        </button>
        <button className="mainSquare">
          <div>b</div>
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Main;
