import React from "react";
import "../App.css";
import SideBars from "./SideBars";
import Header from "./Header";
import Footer from "./Footer";
import { Breakpoint } from "react-socks";

function Feedback() {
  return (
    <div className="feedback">
      <Header />
      <Breakpoint medium up>
        <SideBars />
      </Breakpoint>
      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSelcq20ayTHVPhK4va0dmgqgUaI2uTe7RU1JTOAWDFONjVuww/viewform?embedded=true"
          width="100%"
          height="1249"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Feedback;
