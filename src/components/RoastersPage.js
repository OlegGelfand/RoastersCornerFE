import React, { useEffect, useState } from "react";
import {
  getAllRoasters,
  deleteRoaster,
  createRoaster,
} from "../services/apiHelperRoasters";
import SideBars from "./SideBars";
import "../App.css";
import Header from "./Header";
import { Breakpoint } from "react-socks";
import CoffeePage from "./CoffeePage";
import { Link } from "react-router-dom";

function RoastersPage() {
  const [roasters, setRoasters] = useState([]);
  const [companyNameInput, setCompanyNameInput] = useState("");
  const [companyNameNewInput, setCompanyNameNewInput] = useState("");
  const [descriptionNewInput, setDescriptionNewInput] = useState("");
  const [memberDateInput, setMemberDateInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [location, setLocationInput] = useState("");
  const [numOrders, setNumOrders] = useState("");

  useEffect(() => {
    const makeAPICall = async () => {
      const resp = await getAllRoasters();
      console.log("useEffect - resp", resp);
      setRoasters(resp);
    };
    makeAPICall();
  }, []);

  //BOTH RENDERS
  const renderRoasters = roasters.map((roaster, index) => {
    return (
      <div
        className="roasterData"
        key={index}
        onClick={() => handleDelete(roaster._id)}
      >
        <ul className="roaster-tiles">
          <li>
            Company Name:<span>{roaster.companyName}</span>
          </li>
          <li>
            location:<span>{roaster.location}</span>
          </li>
          <li>
            Description:<span>{roaster.body}</span>
          </li>
          <li>
            numOrders:<span>{roaster.numOrders}</span>
          </li>

          <li> Date:{roaster.memberDate}</li>
          <li>{roaster.numOrders}</li>
          <img src={roaster.image}></img>
          <i className="fa fa-trash pull-right" />
        </ul>
      </div>
    );
  });

  // UNUSED HANDLECHANGE
  const handleCoffeeNameChange = (e) => {
    // console.log(e.target.value)
    setCompanyNameInput(e.target.value);
  };

  //BOTH DELETES
  const handleDelete = async (id) => {
    const json = await deleteRoaster(id);
    console.log("handleDelete - json", json);
    if (json.status === "success") {
      const roastersArr = roasters.filter((roaster) => roaster._id !== id);
      setRoasters(roastersArr);
    }
  };

  //UNUSED SUBMITS
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(companyNameInput);
    // e.target.value
  };

  // BOTH CREATE
  const handleCreate = async (e) => {
    // e.preventDefault();
    const json = await createRoaster({
      MemberDate: memberDateInput,
      companyName: companyNameNewInput,
      image: imageInput,
      body: descriptionNewInput,
      location: location,
      numOrders:numOrders
    });
    console.log("handleCreate - roaster", json);
    if (json.status === "success") {
      setRoasters([...roasters, json.roaster]);
      setCompanyNameNewInput("");
      setDescriptionNewInput("");
      setImageInput("");
      setLocationInput("");
    }
  };
  const handleCreateNumOrdersChange = (e) => {
    // console.log(e.target.value)
    setNumOrders(e.target.value);
  };
  const handleCoffeeCreate = async (e) => {
    //HandleChange for Handle Create
    const handleCreateCompanyNameChange = (e) => {
      console.log(e.target.value);
      setCompanyNameNewInput(e.target.value);
    };
    const handleCreateMemberDateChange = (e) => {
      console.log(e.target.value);
      setMemberDateInput(e.target.value);
    };
    const handleCreateDescriptionChange = (e) => {
      console.log(e.target.value);
      setDescriptionNewInput(e.target.value);
    };
    const handleCreateImage = (e) => {
      // console.log(e.target.value)
      setImageInput(e.target.value);
    };
    const handleCreateLocation = (e) => {
      // console.log(e.target.value)
      setLocationInput(e.target.value);
    };

    // Function for createcoffee form
    // function myFunction() {
    //   document.getElementById("myDropdown").classList.toggle("show");
    // }

    return (
      <div className="Roasters">
        <Header />
        <Breakpoint medium up>
          <SideBars />
        </Breakpoint>
        {/* //create form  */}
        <form onSubmit={handleCreate} className="roasterFormContainer">
          <div>
            <p>Welcome insert your information here</p>
            {/* <label>Member Since</label> */}
            {/* <input
            className="input"
            type="text"
            onChange={handleCreateMemberDateChange}
            value={memberDateInput}
          ></input> */}
            {memberDateInput}
          </div>
          <div>
            <label>Company Name: </label>
            <input
              className="input"
              type="text"
              onChange={handleCreateCompanyNameChange}
              value={companyNameNewInput}
            ></input>
          </div>
          <div>
            <label>Image: </label>
            <input
              className="input"
              type="text"
              onChange={handleCreateImage}
              value={imageInput}
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
            <label> City, State of Roaster </label>
            <input
              className="input"
              type="text"
              onChange={handleCreateLocation}
              value={location}
            ></input>
            <br />
          </div>
          <div>
            <label>Number of Orders </label>
            <input
              className="input"
              type="text"
              onChange={handleCreateNumOrdersChange}
              value={numOrders}
            ></input>
          </div>
          <button id="myBtn" class="dropbtn" type="submit">
            Submit{" "}
            <Link className="coffeePage" to="/coffeePage">
              <p>Once submitted you will be able to add Coffee Info</p>
            </Link>
          </button>
        </form>

        {renderRoasters}
      </div>
    );
  };
}
export default RoastersPage;
