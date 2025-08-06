const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  mobileNumber: String,
  dob: String,
  gender: String,
  maritalStatus: String,
  country: String,
  city: String,
  guardianName: String,
  guardianNumber: String,
  email: String,
  password: String,
  confirmPassword: String,
  profilePicture: String,
  termsAccepted: Boolean
});

module.exports = mongoose.model("User", userSchema,"2503users");