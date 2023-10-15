const user = require("../../models/userModel");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  // check if this email (user ) exist in data base
  const userData = req.body;
  const userPhone = req.body.mobile;
  const userFound = await user.findOne({ mobile : userPhone });
  if (!userFound) {
    // create the new user
    //hashing password
    const salt = await  bcrypt.genSalt(10);
    const hashedPassword = await  bcrypt.hash(req.body.password, salt);
    userData.password = hashedPassword;
    const newUser = await user.create(userData);
    res.json(newUser);
  } else {
    res.json({
      success: "failed",
      userExist: "exist",
    });
  }
};

module.exports = { createUser };
