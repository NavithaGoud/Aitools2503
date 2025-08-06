import React from "react";
import "./SignIn.css"; // styling file
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
       const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login submitted!");
     navigate("/signup");
  };

  return (
    <div className="container">
      <img src="./images/pluse pic.jpg" alt="pulse pic.jpg" className="main-img" />

      <div className="quote">
        <p>
          &lt; <b><span className="b">B</span>elieve-<span className="r">R</span>ise-<span className="n">N</span>everGiveup</b> &gt;
        </p>
        <p className="description">
          <span className="brn">BRN</span> invites you to seize new opportunities and elevate your career, 
          with each task contributing to excellence and growth. By tracking progress, refining action, 
          and celebrating achievements, <span className="success">Success</span> becomes the result of consistent daily efforts.
        </p>
      </div>

      <div className="login-box">
        <img src="./images/logo.jpg" alt="logo.jpg" className="pulse-logo" />
        <p className="tagline">For tracking progress</p>

        <h3>Sign In</h3>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <div className="forgot-password">
            {/* <a href="#">Forgot Password ?</a> */}
            <Link to="/forgot-password">Forgot Password?</Link>

          </div>
          <button type="submit">Continue</button>
        </form>
        <p className="signup">
          Not a Member yet? <Link to="/signup">Sign up</Link>
        </p>

        <div className="footer-links">
          <a href="#">Terms and Conditions</a> | <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

