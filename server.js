const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const User = require("./models/User");
const path = require("path")

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"./client/build")));

// MongoDB Connection
mongoose.connect("mongodb+srv://Navitha:Navitha2324@cluster0.mxvyppw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection failed", err));

// Route to handle signup
app.post("/signup", async (req, res) => {
  try {
    const userData = req.body;
    console.log("📥 Received data from frontend:", userData);

    const newUser = new User(userData);
    await newUser.save();

    console.log("✅ Data saved successfully!")
    res.status(201).json({ message: "✅ User registered successfully" });
  } catch (error) {
    console.error("❌ Error saving user:", error);
    res.status(500).json({ message: "❌ Failed to register user",error:error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});



// const mongoose = require("mongoose");


// const userSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   mobileNumber: String,
//   dob: String,
//   gender: String,
//   maritalStatus: String,
//   country: String,
//   city: String,
//   guardianName: String,
//   guardianNumber: String,
//   email: String,
//   password: String,
//   confirmPassword: String,
//   profilePicture: String,
//   termsAccepted: Boolean
// });

// let user =new mongoose.model("user", userSchema,"2503user");

// let insertDataintoDB = async ()=>{
//     try{
//        let newUser = new user({
//   firstName: "Navitha",
//   lastName: "p",
//   mobileNumber: 4567890,
//   dob: "56/8/45",
//   gender: "f",
//   maritalStatus: "m",
//   country: "india",
//   city: "hyd",
//   guardianName: "o",
//   guardianNumber: "j",
//   email: "navi@123",
//   password: "123",
//   confirmPassword: "123",
//   profilePicture:"pic",
//   termsAccepted: true   
//     })
//     console.log("Successfully inserting the data into db")
//     await user.insertMany([newUser])
//     }catch(err){
//         console.log("unable to inserting the data into DB")
//     }
   
// }

// let connectToMDB = async ()=>{

//   try{
//      await mongoose.connect("mongodb+srv://Navitha:Navitha2324@cluster0.mxvyppw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
//      console.log("Successfully connected to MongoDB")
//      insertDataintoDB();
//   }catch(err){
//       console.log(err);
//       console.log("Unable to connect to MDB");
//   }
// };
// connectToMDB ();