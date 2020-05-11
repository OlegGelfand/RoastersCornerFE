import React, { useEffect, useState } from "react";
import {
  getAllRoasters,
  deleteRoaster,
  createRoaster,
} from "../services/apiHelperRoasters";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import "../App.css";
import Header from "./Header";

function RoastersPage() {
  const [roasters, setRoasters] = useState([]);
  const [companyNameInput, setCompanyNameInput] = useState("");
  const [companyNameNewInput, setCompanyNameNewInput] = useState("");
  const [descriptionNewInput, setDescriptionNewInput] = useState("");
  const [memberDateInput, setMemberDateInput] = useState("");
  const [imageInput, setImageInput] = useState("");

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
     
        <div
          className="roasterData"
          key={index}
          onClick={() => handleDelete(roaster._id)}
        >
          <ul className="ul">
            <li>
              Company Name:<span>{roaster.companyName}</span>{" "}
            </li>
            <li>
              Location:<span>{roaster.location}</span>
            </li>
            <li>
              Description:<span>{roaster.body}</span>
            </li>
            <li>
              Coffee:<span>{roaster.coffees}</span>
            </li>

            <li> Date:{roaster.memberDate}</li>
            <li>{roaster.numOrders}</li>
            <img src={roaster.image}></img>
            <i className="fa fa-trash pull-right" />
          </ul>
        </div>
        
    );
  });

  const handleCompanyNameChange = (e) => {
    // console.log(e.target.value)
    setCompanyNameInput(e.target.value);
  };
  const handleDelete = async (id) => {
    const json = await deleteRoaster(id);
    console.log("handleDelete - json", json);
    if (json.status === "success") {
      const roastersArr = roasters.filter((roaster) => roaster._id !== id);
      setRoasters(roastersArr);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(companyNameInput);
    // e.target.value
  };
  const handleCreate = async (e) => {
    e.preventDefault();
    const json = await createRoaster({
      MemberDate: memberDateInput,
      companyName: companyNameNewInput,
      image: imageInput,
      body: descriptionNewInput,

      // image: descriptionNewInput,
    });
    console.log("handleCreate - roaster", json);
    if (json.status === "success") {
      setRoasters([...roasters, json.roaster]);
      setCompanyNameNewInput("");
      setDescriptionNewInput("");
      setImageInput("");
    }
  };

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
  return (
    <div className="Roasters">
      <Header/>
    <LeftNav/>
      <RightNav/>
      {/* //create form  */}
      <form onSubmit={handleCreate} className="roasterFormContainer">
        <div>

          <p>Welcome insert your information here</p>
          <label>Member Since</label>
          <input
            className="input"
            type="text"
            onChange={handleCreateMemberDateChange}
            value={memberDateInput}
          ></input>
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
          {/* <br></br> */}
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
        <button type="submit">Submit</button>
      </form>
      
      {renderRoasters}
    </div>
  );
}
export default RoastersPage;
