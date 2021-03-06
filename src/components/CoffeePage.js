import React, { useEffect, useState } from "react";
import {
  getAllCoffees,
  deleteCoffee,
  createCoffee,
} from "../services/apiHelperRoasters";
import SideBars from "./SideBars";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Breakpoint } from "react-socks";

function CoffeePage() {
  const [coffees, setCoffees] = useState([]);
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
      <div className="roasters-page-parent" key={index}>
        <div
          className="roasters-page-child"
          key={index}
          onClick={() => handleDelete(coffee._id)}
        >
          <div className="roaster-pg-data">
            <div className="roaster-name">
              Name:{coffee.coffeeName}
              <br></br>
              Description:{coffee.body}
              <br></br>
              Sizes:{coffee.availableIn}
              <br></br>
              Type{coffee.roastType}
              <i className="fas fa-minus-circle"></i>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const handleDelete = async (id) => {
    const json = await deleteCoffee(id);
    if (json.status === "success") {
      const coffeesArr = coffees.filter((coffee) => coffee._id !== id);
      setCoffees(coffeesArr);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const json = await createCoffee({
      Description: descriptionNewInput,
      coffeeName: coffeeNameNewInput,
      availableIn: availableIn,
      roastType: roastType,
    });

    const resp = await getAllCoffees();
    setCoffees(resp);
    if (json.status === "success") {
      setCoffeeNameNewInput("");
      setDescriptionNewInput("");
      setAvailableIn("");
      setRoastType("");
    }
  };

  const handleCreateCoffeeNameChange = (e) => {
    setCoffeeNameNewInput(e.target.value);
  };

  const handleCreateDescriptionChange = (e) => {
    setDescriptionNewInput(e.target.value);
  };
  const handleCreateRoastTypeChange = (e) => {
    setRoastType(e.target.value);
  };
  const handleCreateAvailableInChange = (e) => {
    setAvailableIn(e.target.value);
  };

  return (
    <div className="Coffees">
      <Header />
      <Breakpoint medium up>
        <SideBars />
      </Breakpoint>
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
            placeholder=" 8oz, 12oz, 16oz, GA-size"
            value={availableIn}
          ></input>
          <br />
        </div>

        <button className="submit" type="submit">
          Submit
        </button>
      </form>

      {renderCoffees}
      <Footer />
    </div>
  );
}
export default CoffeePage;
