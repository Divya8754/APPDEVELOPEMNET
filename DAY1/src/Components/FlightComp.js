import air from "./image/airplane.png";
import "./Flight.css";
import { Link } from "react-router-dom";
function FlightComp() {
  return (
    <>
      <div className="flight-comp">
        <div className="flight-comp-child">
          <div className="flight-comp-img">
            <img src="https://res.cloudinary.com/dobtf02zs/image/upload/v1689261896/airways/download_v9dkfe.png"></img>
          </div>
          <div className="flight-comp-cont">
            <h2>Air india</h2>
            <div className="flight-comp-dest">
              <div className="flight-comp-dest-child1">
                <div className="flight-comp-dest-child">
                  <h3>From</h3>
                  <p>Delhi</p>
                </div>
                <div className="flight-flight">
                  <div className="tag">
                    <hr className="hr-tag"></hr>
                  </div>
                  <img src={air}></img>
                  <div className="tag">
                    <hr className="hr-tag"></hr>
                  </div>
                </div>

                <div className="flight-comp-dest-child">
                  <h3>To</h3>
                  <p>Chennai</p>
                </div>
              </div>
              <div className="flight-comp-dest-child1">
                <div
                  style={{ borderLeft: "2px solid black" }}
                  className="flight-comp-dest-child"
                >
                  <h3>Start</h3>
                  <p>10:00 AM</p>
                </div>
                <div className="flight-flight">
                  <div className="tag">
                    <hr className="hr-tag"></hr>
                  </div>
                  <img src={air}></img>
                  <div className="tag">
                    <hr className="hr-tag"></hr>
                  </div>
                </div>

                <div className="flight-comp-dest-child">
                  <h3>End</h3>
                  <p>10:30 AM</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flight-comp-cont1"
            style={{ borderLeft: "2px solid gray" }}
          >
            <div className="flight-comp-dest-child2 ">
              <h3>Price : $3,000</h3>
              {/* <h3>3,000</h3> */}
              <div className="flight-comp-dest-child2-button ">
                <Link to="/booknow/2">
                <button>Book Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlightComp;