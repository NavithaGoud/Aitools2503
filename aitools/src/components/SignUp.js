import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import axios from "axios"

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    dob: '',
    gender: '',
    maritalStatus: '',
    country: '',
    city: '',
    guardianName: '',
    guardianNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending formData to server:", formData);

    try {
      // If you're not uploading files, just send JSON
      const response = await axios.post("http://localhost:5000/signup", formData);
      alert("✅ User registered successfully!");
    } catch (error) {
      console.error("❌ Error registering user:", error);
      alert("❌ Failed to register. Please try again.");
    }
  };


  return (
    <div className="signup-wrapper">
      <div className="signup-left">
        <div className="form-box">
          <img src="./images/logo.jpg" alt="logo" className="logo" />
          <h2>Sign Up</h2>

          <form onSubmit={handleSubmit}>
            <label><input name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} required /></label>
            <label><input name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} required /></label>
            <label><input name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} required /></label>
            <label><input name="dob" type="date" value={formData.dob} onChange={handleChange} required /></label>

            <div className="radio-group">
              <label><input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} /> Male</label>
              <label><input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} /> Female</label>
            </div>

            <div className="radio-group">
              <label><input type="radio" name="maritalStatus" value="Single" checked={formData.maritalStatus === "Single"} onChange={handleChange} /> Single</label>
              <label><input type="radio" name="maritalStatus" value="Married" checked={formData.maritalStatus === "Married"} onChange={handleChange} /> Married</label>
            </div>

            <select name="country" value={formData.country} onChange={handleChange} required>
              <option value="">Select country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>

            <input name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
            <input name="guardianName" placeholder="Guardian Name" value={formData.guardianName} onChange={handleChange} required />
            <input name="guardianNumber" placeholder="Guardian Number" value={formData.guardianNumber} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <input name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
            <input name="profilePicture" type="file"  onChange={handleChange} />

            <div className="checkbox-group">
              <input name="termsAccepted" type="checkbox" checked={formData.termsAccepted} onChange={handleChange} required /> I accept the Terms and Conditions.
            </div>

            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="cancel-btn" onClick={() => window.location.reload()}>Cancel</button>
          </form>

          <p>Already have an account? <Link to="/">Sign in</Link></p>
          <div className="footer-links">
            <a href="#">Terms and Conditions</a> | <a href="#">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="signup-right">
        <img src="./images/pluse pic.jpg" alt="illustration" className="illustration" />
        <p className="motto">&lt; Believe-iRise-NeverGiveup &gt;</p>
        <p className="quote">BRN invites you to seize new opportunities and elevate your career ,with each task contributing to excellence and growth.By tracking progress,refining actions,and celebrating achievements... Success becomes the result of consistent daily effort.</p>
      </div>
    </div>
  );
};

export default SignUp;