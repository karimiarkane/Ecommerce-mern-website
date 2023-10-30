const express = require("express")
const authRouter = express.Router()
const authController = require("../../controller/authController")


authRouter.post("/signUp",authController.createUser)
 authRouter.post('/loginUser',authController.loginUser)


module.exports = authRouter