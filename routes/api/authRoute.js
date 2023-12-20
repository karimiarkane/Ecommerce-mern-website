const express = require("express")
const authRouter = express.Router()
const authController = require("../../controller/authController")


//when you have a route li dir 3lih plusieurs method post get patch .. fi 3od ma dir router.get(route,()=>{}) router.post(route,()=>{}) router.patch(route,()=>{}) t9der dir route wahed authRouter.route("route").get((req,res)=>{
//   console.log(req.hada)
//   res.send(req.hada)
// }).post(()=>{}).patch(()=>{})
// ki kon 3ndek route dynamique for exemple user id tc pas wchno l9ima dyalo exact we use a param to go to that route 
// route.get("/:varname(param)")
// and then we access that param with req.param.varname
//when going to the dynamic route we usualy utilise that param to get the user for exemple  or something else so in all method we use (post , get , delete ,...) with the dynamic route there is a an action we usualy do it to get the data that is reprensented with that id so must execute a middleware in every method 
// so there is a middleware that executed when we call a dynamic route and that depend on the param name
// Router.param(param,(req,res,next,paramname)=>{

// }) 


authRouter.post("/signUp",authController.createUser)
authRouter.get("/signUp",authController.createUser)
 authRouter.post('/loginUser',authController.loginUser)

 authRouter.route("/:id").get((req,res)=>{
   console.log(req.hada)
   res.send(req.hada)
 })

 authRouter.param("id",(req,res,next,id)=>{
  req.hada = "hada hwa" + id
  next()
})





module.exports = authRouter