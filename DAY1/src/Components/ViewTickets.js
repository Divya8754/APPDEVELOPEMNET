
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
//import editIcon from "./../assets/edit.png";
//import deleteIcon from "./../assets/delete.JPG";
import "../App.css";


const ViewTickets = () => {

  const navigate = useNavigate();
  const baseURL = "http://localhost:8080";
  const [flights, setFlights] = useState([]);

  const setFlightData = () => {
    axios.get(baseURL + "/getFlight").then((response) => {
      setFlights(response.data);
      console.log(response.data);
    }).catch(error => {
      alert("Error Ocurred while loading data:" + error);
    });
  }

  useEffect(() => {
    setFlightData();
  }, []);

  return (
    <div class="card-body">
      <br>
      </br>
      


      <br></br>
      <div className="col-md-6">
        <h4>Tickets List</h4>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Flight No</th>
                    <th>Flight Name</th>
                    <th>Flight Type</th>
                    <th scope="col">Action</th>

                  </tr>
                </thead>
                <tbody>

                  {
                    flights &&
                    flights.map((flight, index) => (
                      <tr>
                        <th scope="row">{flight.flight_id}</th>

                        <td>{flight.Source}</td>
                        <td>{flight.destination}</td>
                      
         
               
                     
                      </tr>

                    ))
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
       
      </div>

    </div>

  );
}
export default ViewTickets;