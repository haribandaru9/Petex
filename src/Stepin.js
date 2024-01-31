
         import React from "react";
import { Link } from "react-router-dom";
import './Stepin.css';


function Booking(){
    return(
    <>
    <>
  <div className="heading">
    <div className="text">
      <h1>PETEX STEP-IN</h1><br />
      <p></p>
    </div>
    <div>
      <img src="https://images.pexels.com/photos/3299905/pexels-photo-3299905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={300}/>
    </div>
  </div>
  <section>
    <article>
      <div className="main">
        <div className="temples">
          
          <div>
          <div style={{display: 'flex', width:'100%'}}>

            <figure>
              <img src="https://images.pexels.com/photos/5733432/pexels-photo-5733432.jpeg" alt="" height="200vh" width="250px"/>
              <figcaption>User-login</figcaption><br /><br />
              <Link to="#">Step-In</Link>
            </figure>
            <figure>
              <img src="https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"alt="" height="200vh" width="250px" />
              <figcaption>Vendor-Login</figcaption>  <br /> <br />
              <Link to="#">Step-In</Link>
            </figure>
            <figure>
              <img src="https://images.pexels.com/photos/7469214/pexels-photo-7469214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Darshanam" height="200vh"width="250px" />
              <figcaption>Doctor Login</figcaption> <br /><br />
              <Link to="#">Step-In</Link>
            </figure>
          </div>
          <div>
            <figure>
              <img src="https://images.pexels.com/photos/4144144/pexels-photo-4144144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Accommodation" height="200vh"width="250px"/>
              <figcaption>Admindasboard</figcaption><br/><br/>
              <a href="/Adminlogin">Step-In</a>
            </figure>
            </div>

          </div>
        </div>
      </div>
    </article>
  </section>

</>

</>

    );
}
export default Booking;
    
    
