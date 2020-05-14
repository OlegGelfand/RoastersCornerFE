import React, {  useEffect, useState } from "react";
import {
  getAllRoasters,
  deleteRoaster,
  createRoaster,
} from "../services/apiHelperRoasters";
import SideBars from "./SideBars";
import "../App.css";
import Header from "./Header";
import { Breakpoint } from "react-socks";
import { Link } from "react-router-dom";





function RoastersPage(props) {
  const [roasters, setRoasters] = useState([]);
  // const [companyNameInput, setCompanyNameInput] = useState("");
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


  const renderRoasters = roasters.map((roaster, index) => {
    return (

<div className="roasters-page-parent">
      <div
        className="roasters-page-child"
        key={index}
        onClick={() => handleDelete(roaster._id)}
        
      >
        <div className="roaster-pg-data">
            <div className="roaster-name">
          
            Company Name:{roaster.companyName}
            location:{roaster.location}
            {/* numOrders:{roaster.numOrders} */}

         {/* Date:{roaster.memberDate} */}
        {/* {roaster.numOrders} */}
          <img src={roaster.image} alt="users"></img>

          <i class="fas fa-minus-circle"></i>
          </div>
        </div>
      </div>
      </div>
    );
  });

  // UNUSED HANDLECHANGE
  // const handleCoffeeNameChange = (e) => {
  //   // console.log(e.target.value)
  //   setCompanyNameInput(e.target.value);
  // };

  //DELETE
  const handleDelete = async (id) => {
    const json = await deleteRoaster(id);
    console.log("handleDelete - json", json);
    if (json.status === "success") {
      const roastersArr = roasters.filter((roaster) => roaster._id !== id);
      setRoasters(roastersArr);
    }
  };

  //UNUSED SUBMITS
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(companyNameInput);
  //   // e.target.value
  // };

  // BOTH CREATE
  const handleCreate = async (e) => {
    e.preventDefault();
    const json = await createRoaster({
      MemberDate: memberDateInput,
      companyName: companyNameNewInput,
      image: imageInput,
      body: descriptionNewInput,
      location: location,
      numOrders:numOrders,
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
 
  
    const handleCreateCompanyNameChange = (e) => {
      console.log(e.target.value);
      setCompanyNameNewInput(e.target.value);
    };
    // const handleCreateMemberDateChange = (e) => {
    //   console.log(e.target.value);
    //   setMemberDateInput(e.target.value);
    // };
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
    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
  
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
              placeholder="Insert Company Name Here"
              value={companyNameNewInput}
            ></input>
          </div>
          <div>
            <label>Image: </label>
            <input
              className="input"
              type="text"
              onChange={handleCreateImage}
              placeholder="Please provide a jpg to personalize yourself"
              value={imageInput}
            ></input>
          </div>
          <div>
            <label> Place Description here </label>
            <input
              className="input"
              type="text"
              onChange={handleCreateDescriptionChange}
              placeholder="Please give us a brand statement"
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
              placeholder="City, State"
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
          
            <button className="submit" type="reset" value="Reset">reset</button>
          <button className= "submit">Submit</button>
          <button id="myBtn" className="dropbtn">
           <br></br>
            <Link className="coffeeLink" to="/coffeePage">
              <p>Click here if you 
              have already submitted your information</p>
              </Link>
          </button>
          
        </form>

        {renderRoasters}
      </div>
    );
  
};
export default RoastersPage;
