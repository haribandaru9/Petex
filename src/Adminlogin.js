import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Adminlogin.css';



const Adminlogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Fetch data when email and password change
    if (email !== "" && password !== "") {
      fetch(`http://localhost:9098/petex/login?email=${email}&password=${password}`)
        .then((response) => response.json())
        .then((pdata) => {
          const isLoginSuccess = checkLogin(pdata, email, password);

          if (isLoginSuccess) {
            alert("Logged in Successfully");
            window.location.href="/Admindasboard"    

          } else {
            // Handle unsuccessful login
            alert("Invalid username or password");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // Handle error fetching data
        });
    }
  }, [email, password]);

  function checkLogin(data, enteredEmail, enteredPassword) {
    // Your logic to check if the entered email and password match the data from the API
    // Example: (Replace with your actual logic)
    return data.some(
      (user) => user.email === enteredEmail && user.password === enteredPassword
    );
  }

  function handleSubmit() {
    // Use the state values directly
    if (email === "" || password === "") {
      alert("Email and Password are required fields");
      return;
    }

    // No need to use document.getElementById, as you have state values
    // setemail(email);
    // setPassword(password);
  }

  return (
    <>
      
      
        <h1 style={{ textAlign: "center", paddingTop: "50px" }}>Login</h1>
        <div className="row">
          <div className="col-12">
            <form className="p-5">
              <div
                className="p-3"
                style={{ margin: "auto", display: "block", width: "300px" }}
              >
                <label
                  htmlFor="email"
                  className="form-label text-primary fw-bold"
                >
                  Email:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputemail"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div
                className="p-3"
                style={{ margin: "auto", display: "block", width: "300px" }}
              >
                <label
                  htmlFor="password"
                  className="form-label text-primary fw-bold"
                >
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputpassword"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              
              <div className="p-3 text-center">
                <p>
                  Forgot password? <Link to="/forgot">Click here</Link>
                </p>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
    
    </>
  );
};

export default Adminlogin;
