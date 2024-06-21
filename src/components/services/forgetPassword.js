import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OTP_API = 'http://localhost:8081/api';

const ForgetPassword = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState({
        email : ''
    });
    const [otp, setOTP] = useState({
        email : '',
        otp : ''
    });
    // const [message, setMessage] = useState('');
    const [hideBtn, setHideBtn] = useState(true);
    const [message, setMessage] = React.useState({
        text: "",
        color: "green",
      });
    
      const setError = (error) => {
        setMessage({
          text: error,
          color: "red",
        });
      };

    const sendOTP = async (event) => {
        try {
            event.preventDefault(); 
            const response = await axios.post(OTP_API+'/send-otp', email);
            setMessage({text : response.data.message, color: "green"});
        } catch (error) {
            setError(error.response.data.message);
        }
        setHideBtn(false);
    };

    const verifyOTP = async (event) => {
        try {
            event.preventDefault();
            const response = await axios.post(OTP_API+'/verify-otp', otp);
            setMessage({text : response.data.message, color: "green"});
            navigate('/login');
            alert("OTP verified Successfully");
        } catch (error) {
            // console.log(error.response.data.message);
            alert("Connection timeout!")
            setError(error.response.data.message);
        }
    };

    const handleChange=(e)=>{
        const { name , value } = e.target;
        setEmail (prevState => ({
            ...prevState,
            [name] : value
        }))
        setOTP(prevState => ({
            ...prevState,
            [name] : value
        }))
    }
    return (
        <div className="forgotPass">
        <div className="forgotPass-container">
          <form className="forgotPass-form">
            <div className="flex-column"><h2>Forgot Password</h2></div>

            <div className="flex-column">
            <label>Enter your registered Email </label></div>
            <div className="inputForm">
            <input type="email" name="email" className="input" value={email.email} onChange={handleChange} placeholder="Enter Your Email"/>
            </div>
            {!hideBtn && (<p className="msg" style={{ color: message.color }}>{message.text}</p> )}
            <div className="hide-send-btn">
            <button className={`send-btn ${hideBtn ? 'active' : ''}`} onClick={(e) => sendOTP(e)}>Send</button>
            </div>
            <div className={`verify ${hideBtn ? 'active' : ''}`}>
            <div className="inputForm">
            <input type="text" name="otp" className="input" value={otp.otp} onChange={(e) => handleChange(e)} placeholder="Enter OTP" />
            </div> 
            <button className="verify-btn" onClick={verifyOTP}>Verify OTP</button>
            </div>
            <p className="p-1">By clicking through, I agree with the
            <a href="/"> Terms & Conditions </a>and <a href="/">Privacy Policy</a></p>
          </form>
        </div>
      </div>
    );  
};

export default ForgetPassword;
