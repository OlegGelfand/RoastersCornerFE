import React, { useEffect, useState } from "react";
import "../App.css";
import SideBars from "./SideBars";
import Header from "./Header";
import Footer from "./Footer";
import { Breakpoint } from "react-socks";
import { getAllRoasters } from "../services/apiHelperRoasters";

function RoasterInfo(props) {
  const [roasters, setRoasters] = useState([]);
  const [oneRoaster, setOneRoaster] = useState("");

  useEffect(() => {
    const makeAPICall = async () => {
      const resp = await getAllRoasters();
      console.log("useEffect - resp", resp);
      setRoasters(resp);
    };
    makeAPICall();
  }, []);
  console.log("roasters from roasterinfo", roasters);
  // const singleRoaster = roasters.filter( roaster => {
  //   //   console.log('what a roaster is',roaster)
  //       return (roaster.companyName=== props.match.params.companyName);
  //   });
  //   console.log('props.match.params', singleRoaster )

  const singleRoaster = roasters.map((roaster) => {
    if (roaster.companyName === props.match.params.companyName) {
      return (
        <div className="roasters-page-parent">
          <div className="roasters-page-child">
            <div className="roaster-pg-data">
              <div className="roaster-name">{roaster.companyName}
              <img src={roaster.image} alt="users"></img></div>
            </div>
          </div>
        </div>
      );
    }
  });
  console.log("props.match.params", singleRoaster);
  return (
    <div className="login">
      <Header />
      <Breakpoint medium up>
        <SideBars />
      </Breakpoint>
      {singleRoaster}
      <Footer />
    </div>
  );
}

export default RoasterInfo;
