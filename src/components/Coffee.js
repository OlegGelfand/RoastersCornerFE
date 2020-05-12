import React from "react";
import "../App.css";
import Header from "./Header";
import SideBars from "./SideBars";
import Footer from "./Footer";
import { Breakpoint} from "react-socks";

function Coffee() {
  return (
      <div>
        <Header/>
        <Breakpoint medium up>
    <SideBars/>
      </Breakpoint>
        <Footer/>
      
    <div className="coffee">
        
  
   
    </div>
    </div>
  );
}

export default Coffee;
