const express = require("express")
const authRouter = express.Router()
const authController = require("../../controller/middleware/authController")
authRouter.get("/signUp",authController.getSignIn)



module.exports = authRouter