import { useState } from "react";
import Navbar2 from './navbar2';
import Sidebar from './sidebar';
import PatternComponent from "./PatternComponent";
import { TextField } from "@mui/material";
import "./seat.css";
import { useNavigate } from "react-router-dom";

function BookNow() {
  //   const cou = () => [];
  const navigate = useNavigate();
  const handler=()=>{
    navigate('/ticket');
  }
  return (
    <>
      <Navbar2 />
      <Sidebar />+-
      <div className="home-container">
        <h1 style={{ marginLeft: "25%", paddingBottom: "70px" ,margintop:"10%", fontweight:"10px"}}>Select Seats</h1>
        <div className="booknow-comp">
          <PatternComponent />
          <div className="booknow-cont">
            <h1 style={{ marginTop: "30px" }}>Confirm Yours</h1>
            
            <div className="passenger-form">
              <TextField
                id="outlined-basic"
                label="Passenger Name"
                variant="outlined"
                className="login-field"
              /><br></br>
              <TextField
                id="outlined-basic"
                label="Age"
                variant="outlined"
                className="login-field"
                type="number"
              /><br></br>
              <TextField
                id="outlined-basic"
                label="Request"
                variant="outlined"
                className="login-field"
              /><br></br>
            </div>
            <div className="login-container2-button confirm">
              <button onClick={handler}>BookNow</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookNow;