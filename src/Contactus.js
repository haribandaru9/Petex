import axios from "axios";
import React, { useState } from "react";
import "./Contactus.css";

const Contactus = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post("http://localhost:9092/petex/contactus", formData);
        setFormData({
          fullname: "",
          email: "",
          message: "",
        });
        alert("Form submitted successfully");
      } catch (error) {
        console.log("Error occurred", error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.fullname) {
      errors.fullname = "Full name is required";
    } else if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(data.fullname)) {
      errors.fullname = "Invalid full name";
    }

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))) {
      errors.email = "Invalid email address";
    }

    if (!data.message) {
      errors.message = "Please enter the message";
    } 
    return errors;
  };

  return (
    <>
      <br /> <br /> <br />
      <section className="contactus">
        <br />
        <h1> Connect with Us</h1>
        <br /> <br /> <br /> <br />
        <div className="contact-box">
          <div className="contact-left">
            <h3> Send Your Request </h3> <br /> <br /> <br /> <br />
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  value={formData.fullname}
                  onChange={handleChange}
                  name="fullname"
                  placeholder="Full Name"
                />
                {errors.fullname && <p style={{ color: "red" }}>{errors.fullname}</p>}
              </div>

              <div>
                <input
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="email"
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </div>

              <div>
                <textarea
                  value={formData.message}
                  onChange={handleChange}
                  name="message" // Add the name attribute
                  className="message"
                  placeholder="message"
                />
                {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
              </div>
              <button type="submit">
                    Submit
                               </button>

            </form>
          </div>
          <div class="contact-right" style={{marginLeft: "5%"}}>
                <h3> Reach Us </h3>
                <table class="data">
                    <tr>
                        <td> Email : </td>
                        <td> mailto:contactus@anarghyacomm.in </td>
                    </tr> 

                    <tr>
                        <td> Phone :  </td>
                        <td> +91-040-6793 2204 </td>
                    </tr> 

                    <tr>
                        <td> Address :</td>
                        <td> 
                            1212&1215A, 3rd Fllor, Regus SL Jubilee,Rd No.36, <br/>
                            Jubilee Hills, Hyderabad, Telangana-500033
                        </td>
                    </tr>
                </table>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6348748700343!2d78.40744631037225!3d17.429301601528007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9136803f0a3d%3A0xfb8568429bd0eeb6!2sRegus%20-%20Hyderabad%2C%20Jubilee%20Hills!5e0!3m2!1sen!2sin!4v1697133355644!5m2!1sen!2sin" 
                    width="420" height="170" ></iframe>
            </div>

            
            </div>
            
        </section>
        </>
    )
}
export default Contactus;
