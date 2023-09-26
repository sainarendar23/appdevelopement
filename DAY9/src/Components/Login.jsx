import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Assests/css/Login and Signup.css';

import { useDispatch } from "react-redux";
import { login } from "../Redux/UserSlice";
import CarousalActive from "./CarousalActive";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const dispatch = useDispatch();
  const navigateToDashboard = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.email) {
      isValid = false;
      newErrors.email = "Email is required.";
    } else {
      newErrors.email = "";
    }

    if (!formData.password) {
      isValid = false;
      newErrors.password = "Password is required.";
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
    return isValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log(formData);

      dispatch(login({
        name: formData.email,
        loggedIn: true,
      }));
      navigateToDashboard('/owner-dashboard');
    }
  }

  const navigateToSignup = useNavigate();

  const handleClick = () => {
    navigateToSignup('/signup');
  }

  return (
      <div className="login-container">
    <div>
      <div>
      <CarousalActive/>
        <form onSubmit={handleSubmit}>
          <div className="fingerprint"><i class='bx bx-f'></i></div>
          <div className="login-text"> LOGIN !</div>
          <input className="common-input-field" type="email" placeholder="Enter Email" name="email" onChange={handleOnChange} />
          {errors.email && <div className="error-message">{errors.email}</div>}
          <input className="common-input-field" type="password" placeholder="Enter Password" name="password" onChange={handleOnChange} />
          {errors.password && <div className="error-message">{errors.password}</div>}
          <button className="common-button" type="submit">Login</button>
          <div className="forgot-pass-login">Forgot Password?</div>
          <div className="not-a-member">don't have an account? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleClick}>Register Here</span> </div>
        </form>
      </div>
    </div>
      </div>
  );
}

export default Login;
