import React, { useEffect, useState } from "react";
import { getAllCoffees } from "../services/apiHelperRoasters";
import "../App.css";
import SideBars from "./SideBars";
import Header from "./Header";
import { Breakpoint } from "react-socks";

function Coffee() {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const makeAPICall = async () => {
      const resp = await getAllCoffees();
      console.log("useEffect - resp", resp);
      setCoffees(resp);
    };
    makeAPICall();
  }, []);

  const renderCoffees = coffees.map((coffee, index) => {
    return (
      <div className="roasters-page-parent">
        <div className="roasters-page-child" key={index}>
          <div className="roaster-name">
            <h3>Coffee Name:</h3>
            <div className="text-style">{coffee.coffeeName}</div>{" "}
            <h3>Roast Type:</h3>
            <div className="text-style"> {coffee.roastType}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="Roasters">
      <Header />
      <Breakpoint medium up>
        <SideBars />
      </Breakpoint>

      {renderCoffees}
    </div>
  );
}

export default Coffee;
