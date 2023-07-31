import React from "react";
import "./Book.css";
function Book() {
    return ( 
        <>
        <div className="hea">
        <div className="head">
            <h1 className="title1">
                Popular destinations
            </h1>
        </div>
        <div className="imgd">
           <div className="goa">
               <div className="tt">
                <h2 className="w">Goa</h2>
              
                </div>
           </div>
           <div className="delhi">
                <div className="tt">
                <h2 className="w">Delhi</h2>
              
                </div>
           </div>
           <div className="mumbai">
                <div className="tt">
                <h2 className="w">Mumbai</h2>
             
                </div>
           </div>
           <div className="jai">
                <div className="tt">
                <h2 className="w">Jaipur</h2>
                
                </div>
           </div>
           <div className="dubai">
              <div className="tt">
                <h2 className="w">Dubai</h2>
                
                </div>
           </div>
        </div>
        </div>
        </>
     );
}

export default Book;