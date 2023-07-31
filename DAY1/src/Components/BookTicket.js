import React, { Component } from 'react';
import Navbar2 from './navbar2';
import Sidebar from './sidebar';
import FlightComp from './FlightComp';
import { useNavigate } from 'react-router-dom';

import "./Bookticket.css";
function BookTickets() {
    const navigate = useNavigate();
    const handler=()=>{
      navigate('/ticket');
    }
    return ( 
        <>
        <Navbar2 />
			 <Sidebar/>
        <div className='top'>
            <h1 className='tet'>Book Your's!</h1>
            <div className='bookcard'>
                <div className='ter'>
                    <h4 className='word'>Leaving from</h4>
                 <input type="text"  className='ticket'></input>
                 </div>
                 <div className='ter'>
                 <h4 className='word'>Going to</h4>
                 <input type="text"  className='ticket'></input>
                 </div>
                 <div className='ter'>
                 <h4 className='word'>Departure</h4>
                 <input type="date"  className='ticket'></input>
                 </div>
                 
                 <a href="/" className="ticket-button">
						        {/* <button className="ticketsearch">Search</button> */}
                                <button type="submit" className="ticketsearch" onClick={handler}><i class="fa fa-search"></i></button>
					    </a>
            </div>
            <FlightComp/>
            <FlightComp/>
            <FlightComp/>
            <FlightComp/>
        </div>
        </>
     );
}

export default BookTickets;