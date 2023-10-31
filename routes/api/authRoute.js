const express = require("express")
const authRouter = express.Router()
const authController = require("../../controller/authController")


authRouter.post("/signUp",authController.createUser)
 authRouter.post('/loginUser',authController.loginUser)
 authRouter.get("/walo",(req,res)=>res.json({
   walo : "walo",
 }))


module.exports = authRouter