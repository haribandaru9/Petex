import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Userlogin.css";

export default function Userlogin(){


  const [formData, setFormData] = useState({
    email: '',
    pwd: '',
    
  });

    const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  const navigate = useNavigate('');

  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9091/petex/login", {
        email: formData.email,
        pwd: formData.pwd,
      });
      if (response.status === 200) {
        alert('Login successful!');
        window.location.reload(); 
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.log("Error occurred", error);
      alert('Invalid Credentials');
    }
  };
  


    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    };



    const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
        alert('You have been successfully Loggedin')
        window.location.assign("Driverersignup")    
    } else {
      setErrors(validationErrors);
    }
    };
      
    

    const validateForm = (data) => {
      let errors = {};
  
      if (!data.email) {
        errors.email = "Email is required";
      } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))) {
        errors.email = "Invalid email address";
      }

      if (!data.pwd) {    
          errors.pwd = "password is required";    
      }    
      else if (!(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(data.pwd))) {    
          errors.pwd = "7 to 15 characters at least one numeric digit and a special character";    
      }   
        
      return errors;
    };

        
        
      
  

    return(
        <>
        <section className='section-driver'>
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="box-signup">
        <div className="square" style={{'--i': 0}}></div>
        <div className="square" style={{'--i': 1}}></div>
        <div className="square" style={{'--i': 2}}></div>
        <div className="square" style={{'--i': 3}}></div>
        <div className="square" style={{'--i': 4}}></div>
      <div className="container-driver" style={{marginLeft: "20%"}}>
        <div className="form-driver" >
          <div className="inputBox">
          <h2 style={{color: "black"}}> User Step-In</h2>
          <form onSubmit={handleSubmit}>
          <div className="inputBox">
                <input type="text" placeholder="email" 
                name="email"    
                onChange={handleChange}
                value={formData.email}    
                />
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}           
              </div>

              <div className="inputBox">
                <input type="password" placeholder="password" 
                name="pwd"    
                value={formData.pwd}    
                onChange={handleChange}/>
                {errors.pwd && <p style={{color: "red"}}>{errors.pwd}</p>}       
              </div>

          <div className="inputBox" onClick={onsubmit}>
                <input type="submit" value="Signup" />
          </div>
          <p><Link to="/Forgetpassword">Forgot Password</Link></p> <br/>
          <p>Don't have an account ? <Link to="/Usersignup"> Usersignup</Link></p>
          </form>
        </div>
      </div>
      </div>
      </div>
      </section>
        </>
    )
}