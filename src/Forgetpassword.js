import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./forgetpassword.css"


const ForgetPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9099/petexuser/send-reset-email', { email }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        setMessage('Email sent successfully. Check your email for reset instructions.');
        setSubmitClicked(true);
      } else {
        setMessage('Failed to send email. Please try again later.');
        setSubmitClicked(false); // Set submitClicked back to false
      }
    } catch (error) {
      setMessage('An error occurred while processing your request.');
      setSubmitClicked(false); // Set submitClicked back to false
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:9099/petexuser/verify-otp', { email, otp }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        setMessage('OTP verified successfully. You can now reset your password.');
        setOtpVerified(true);
      } else {
        setMessage('Invalid OTP. Please try again.');
        setOtpVerified(false); // Set otpVerified back to false
      }
    } catch (error) {
      setMessage('An error occurred while verifying OTP.');
      setOtpVerified(false); // Set otpVerified back to false
    }
  };

  const handleResetPassword = async () => {
    try {
      const newPassword = prompt('Enter your new password:');
      const confirmPassword = prompt('Confirm your new password:');
      if (newPassword && confirmPassword && newPassword === confirmPassword) {
        // Call the updatePassword endpoint
        await axios.post('http://localhost:9099/petexuser/reset-password', {
          email,
          newPassword,
        });
        setMessage('Password updated successfully.');
        navigate('/Signup'); 
      } else {
        setMessage('Passwords do not match.');
      }
    } catch (error) {
      setMessage('An error occurred while updating your password.');
    }
  };
  

  return (
<div className='section-forget'>
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="box-forgot">
        <div className="square" style={{'--i': 0}}></div>
        <div className="square" style={{'--i': 1}}></div>
        <div className="square" style={{'--i': 2}}></div>
        <div className="square" style={{'--i': 3}}></div>
        <div className="square" style={{'--i': 4}}></div>
        <div className="container-forget">
          <div className="form-forget">
            <form onSubmit={handleSubmit} style={{ marginRight: "60%" }}>
              <div className="inputBox">
                <label style={{ fontSize: "1.2rem" }}>
                  Email: 
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder='enter registered email'
                    required
                    style={{ width: "200%", height: "4vh", marginTop: "15%"}}
                  />
                </label>
                <div className="inputBox" onClick={onsubmit}>
                <input 
                className='inputBox'
                type="submit" value="SendOtp" style={{ marginTop: "15%",marginLeft: "65%" }} />
              </div>
              </div>
            </form>
            {submitClicked && (
              <div className="inputBox">
                <label>
                  Enter OTP:
                  <input type="text" value={otp} onChange={handleOtpChange} required />
                </label>
                <div className="inputBox" onClick={handleVerifyOtp}>
                <input 
                className='inputBox'
                type="submit" value="VerifyOtp" style={{ marginTop: "2%",marginLeft: "25%" }} />
              </div>
              </div>
            )}
            <p>{message}</p>
            {otpVerified && (
              <div className="inputBox" onClick={handleResetPassword}>
              <input 
              className='inputBox'
              type="submit" value="Reset Password" style={{ marginTop: "2%",marginLeft: "25%" }} />
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
