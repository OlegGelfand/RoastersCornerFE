import React, {useEffect, useState} from 'react';
import "../App.css";
import SideBars from "./SideBars";
import Header from "./Header";
import Footer from "./Footer";
import { Breakpoint} from "react-socks";
import Roasters from './Roasters';
import {
    getAllRoasters
  } from "../services/apiHelperRoasters";
import { Link } from "react-router-dom";


function RoasterInfo(props) {
    const [roasters, setRoasters] = useState([])

  useEffect(() => {
    
    const makeAPICall = async () => {
      const resp =  await getAllRoasters()
      console.log('useEffect - resp', resp)
      setRoasters(resp)
    }
    makeAPICall()
    
  }, [])
  console.log('roasters from roasterinfo', roasters)

  
  const singleRoaster = roasters.filter( roaster => {
    //   console.log('what a roaster is',roaster)
        return (roaster.companyName=== props.match.params.companyName);
    });  
    console.log('props.match.params',props, singleRoaster )
  return(
      <div className="login">
         {/* <h1> {singleRoaster.companyName}</h1> */}
     <Header/>
     <Breakpoint medium up>
    <SideBars/>
      </Breakpoint>
     <Footer/>
      </div>
 
  );
}

export default RoasterInfo;