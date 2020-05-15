import React, { useState, useEffect } from "react";
import { getAllRoasters } from "../services/apiHelperRoasters";
import "../App.css";
import SideBars from "./SideBars";
import Header from "./Header";
import { Breakpoint } from "react-socks";
import { Link } from "react-router-dom";

function Roasters() {
  const [roasters, setRoasters] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      const resp = await getAllRoasters();
      console.log("useEffect - resp", resp);
      setRoasters(resp);
    };
    makeAPICall();
  }, []);

  const renderRoasters = roasters.map((roaster, index) => {
    console.log("this is roaster", roaster);
    return (
      <div className="roasters-page-parent">
        <div className="roasters-page-child" key={index}>
          <Link
            className="roasterByName"
            to={`/roasters/${roaster.companyName}`}
          >
            <div className="roaster-pg-data">
              <div className="roaster-name">
                {roaster.companyName}
                <img src={roaster.image} alt="user"></img>
                <h6>click here to learn more about this roaster</h6>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="roaster-boxes">
      <div className="roasters-main-page">
        <Header />
        <Breakpoint medium up>
          <SideBars />
        </Breakpoint>

        {renderRoasters}
      </div>
    </div>
  );
}

export default Roasters;
