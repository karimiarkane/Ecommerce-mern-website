const user = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const customError = require("../utils/customError")
const validator = require("validator")

const generateToken = (_id) => {
  return jwt.sign(
    { /*payload*/ _id },
    /*secret*/ process.env.SECRET_KEY,
    /*option , it remain loged in for 3 days */ 
  );
};
 
const createUser = async (req, res, next) => {
  // check if this email (user ) exist in data base
 
//user data validation
  const userData = req.body;
  if (
    !userData.firstName ||
    !userData.lastName ||
    !userData.email ||
    !userData.password ||
    !userData.mobile
  ) {
     next(new customError("all fiels must be filled" , 400));
  } 

  if(!validator.isEmail(userData.email)){
    next(new customError("email not valid ",400));
   return;
   console.log("the execution  should not continue to here");
  }
  if(!validator.isStrongPassword(userData.password)){
    next(new customError("insecure password  ",400))
    return;
    console.log("the execution  should not continue to here");

  }
  const country = 'ar-DZ'
  if(!validator.isMobilePhone(userData.mobile ,country , { strictMode: false } )){
    next(new customError("invalid mobile number",400))
    return;
    console.log("the execution  should not continue to here");

  }


  


  const userMail = req.body.email;
  const userFound = await user.findOne({ email: userMail });
  if (!userFound) {
      // create the new user , hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    userData.password = hashedPassword;
    const newUser = await user.create(userData);
    //create token
    const token = generateToken(newUser._id);
    res.json({ newUser: newUser, "his token": token });
  } else {
    res.json({
      success: "failed",
      userExist: "exist",
    });
   
  }
};

const loginUser = async (req, res, next) => {
  const emailAndPassword = req.body;

  if (!emailAndPassword.email || !emailAndPassword.password) {
    next(new Error("all fiels must be filled"));
  }
  const userfound = await user.findOne({ email: emailAndPassword.email });
  if (!userfound) {
    res.json({
      mail: "user doesn't exist",
    });
  } else {
    let comparePassword = await bcrypt.compare(
      emailAndPassword.password,
      userfound.password
    );
    if (!comparePassword) {
      res.json({
        message: "incorrect password",
      });
    } else {
      // create token
      const token = generateToken(userfound._id);
      res.json({
        "userfound": userfound,
        "his token": token,
      });
    }
  }
};

module.exports = { createUser, loginUser };
