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
import { Link } from "react-router-dom";

function RoastersPage() {
  const [roasters, setRoasters] = useState([]);
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
              <img src={roaster.image} alt="users"></img>
              <i class="fas fa-minus-circle"></i>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const handleDelete = async (id) => {
    const json = await deleteRoaster(id);
    if (json.status === "success") {
      const roastersArr = roasters.filter((roaster) => roaster._id !== id);
      setRoasters(roastersArr);
    }
  };


  const handleCreate = async (e) => {
    e.preventDefault();
    const json = await createRoaster({
      MemberDate: memberDateInput,
      companyName: companyNameNewInput,
      image: imageInput,
      body: descriptionNewInput,
      location: location,
      // numOrders: numOrders,
    });
    const resp = await getAllRoasters();
    setRoasters(resp);

    if (json) {
      setCompanyNameNewInput("");
      setDescriptionNewInput("");
      setImageInput("");
      setLocationInput("");
    }
  };
  const handleCreateNumOrdersChange = (e) => {
    setNumOrders(e.target.value);
  };
  const handleCreateCompanyNameChange = (e) => {
    setCompanyNameNewInput(e.target.value);
  };
  const handleCreateDescriptionChange = (e) => {
    setDescriptionNewInput(e.target.value);
  };
  const handleCreateImage = (e) => {
    setImageInput(e.target.value);
  };
  const handleCreateLocation = (e) => {
    setLocationInput(e.target.value);
  };


  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  return (
    <div className="Roasters">
      <Header />
      <Breakpoint medium up>
        <SideBars />
      </Breakpoint>
      <form onSubmit={handleCreate} className="roasterFormContainer">
        <div>
          <p>Welcome insert your information here</p>
         
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
        <button type="submit">Submit</button>
        <button id="myBtn" className="dropbtn">
          <br></br>
          <Link className="coffeeLink" to="/coffeePage">
            <p>Click here if you have already submitted your information</p>
          </Link>
        </button>
      </form>

      {renderRoasters}
    </div>
  );
}
export default RoastersPage;
