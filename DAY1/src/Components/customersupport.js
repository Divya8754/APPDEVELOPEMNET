import Navbar2 from './navbar2';
import Sidebar from './sidebar';
import './customer.css';
import send from "./image/send.png";
function CustomerSupport() {
  return (
    <>
      <Navbar2 />
      <Sidebar />
      <div
        style={{ marginLeft: "7%" }}
        className="home-container customer-supp"
      >
        <h2 className='custh'>REACH OUR CUSTOMER SERVICE 24 / 7</h2>
        <div className="home-container2-search">
          <div style={{ width: "90%" }} className="Navbar-search2">
            <div className="Navbar-search1">
              <input
                type="text"
                placeholder="Type your querries"
                style={{ width: "90%" }}
                className='custi'
              ></input>
              <button className='cust'>
                <img style={{ width: "15px" }} src={send}></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerSupport;