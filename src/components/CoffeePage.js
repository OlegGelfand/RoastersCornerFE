import React, { useEffect, useState } from "react";
import {
  getAllCoffees,
  deleteCoffee,
  createCoffee,
} from "../services/apiHelperRoasters";
import SideBars from "./SideBars";

import "../App.css";
import Header from "./Header";
import { Breakpoint} from "react-socks";

function CoffeesPage() {
  const [coffees, setCoffees] = useState([]);
  const [coffeeNameInput, setCoffeeNameInput] = useState("");
  const [coffeeNameNewInput, setCoffeeNameNewInput] = useState("");
  const [descriptionNewInput, setDescriptionNewInput] = useState("");
  const [roastType, setRoastType] = useState("");
  const [availableIn, setAvailableIn] = useState("");

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
     
        <div
          className="coffeeData"
          key={index}
          onClick={() => handleDelete(coffee._id)}
        >
          <ul className="coffee-tiles">
            <li>
              Coffee Name:<span>{coffee.coffeeName}</span>
            </li>
            <li>
              Body:<span>{coffee.body}</span>
            </li>
            <li>
              Packaging Sizes:<span>{coffee.availableIn}</span>
            </li>
            <li>
              Roast Type<span>{coffee.roastType}</span>
            </li>
          </ul>
        </div>
        
    );
  });

  const handleCompanyNameChange = (e) => {
    // console.log(e.target.value)
    setCoffeeNameInput(e.target.value);
  };
  const handleDelete = async (id) => {
    const json = await deleteCoffee(id);
    console.log("handleDelete - json", json);
    if (json.status === "success") {
      const coffeesArr = coffees.filter((coffee) => coffee._id !== id);
      setCoffees(coffeesArr);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(coffeeNameInput);
    // e.target.value
  };
  const handleCreate = async (e) => {
    e.preventDefault();
    const json = await createCoffee({
      Description: descriptionNewInput,
      coffeeName: coffeeNameNewInput,
      availableIn: availableIn,
      roastType:roastType,
    });
    console.log("handleCreate - roaster", json);
    if (json.status === "success") {
      setCoffees([...coffees, json.roaster]);
      setCoffeeNameNewInput("");
      setDescriptionNewInput("");
      setAvailableIn("");
      setRoastType("");
    }
  };

  const handleCreateCoffeeNameChange = (e) => {
    console.log(e.target.value);
    setCoffeeNameNewInput(e.target.value);
  };

  const handleCreateDescriptionChange = (e) => {
    console.log(e.target.value);
    setDescriptionNewInput(e.target.value);
  };
  const handleCreateRoastTypeChange = (e) => {
    console.log(e.target.value);
    setRoastType(e.target.value);
  };
  const handleCreateAvailableInChange = (e) => {
    console.log(e.target.value);
    setAvailableIn(e.target.value);
  };

  //Coffee Section

  return (
    <div className="Coffees">
      
    
      
       <Header/>
        <Breakpoint medium up>
    <SideBars/>
      </Breakpoint> 
      {/* //create form  */}
      <form onSubmit={handleCreate} className="coffeeFormContainer">
        <div>

          <p>Create your coffees here</p>
     
        </div>
        <div>
          <label>Coffee Name: </label>
          <input
            className="input"
            type="text"
            onChange={handleCreateCoffeeNameChange}
            value={coffeeNameNewInput}
          ></input>
              </div>
        <div>
          <label> Place Description here </label>
          <input
            className="input"
            type="text"
            onChange={handleCreateDescriptionChange}
            value={descriptionNewInput}
          ></input>
          <br />
        </div>
        <div>
          <label> Roast Type </label>
          <input
            className="input"
            type="text"
            onChange={handleCreateRoastTypeChange}
            value={roastType}
          ></input>
          <br />
        </div>
        <div>
          <label> Packaging </label>
          <input
            className="input"
            type="text"
            onChange={handleCreateAvailableInChange}
            value={availableIn}
          ></input>
          <br />
        </div>
     
        <button type="submit">Submit</button>
      </form>
      
      {renderCoffees}
    </div>
  );
}
export default CoffeesPage;