import React from 'react';
import "../App.css";
import SideBars from "./SideBars";
import Header from "./Header";
import Footer from "./Footer";
import { Breakpoint} from "react-socks";

function Login() {
 
  return (
      <div className="login">
        <button></button>
        <button></button>
     <Header/>
     <Breakpoint medium up>
    <SideBars/>
      </Breakpoint>
     <Footer/>˝
      </div>
  );
}

export default Login;