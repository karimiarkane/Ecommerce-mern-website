const express = require("express")
const authRouter = express.Router()
const authController = require("../../controller/middleware/authController")
authRouter.post("/signUp",authController.createUser)




module.exports = authRouter