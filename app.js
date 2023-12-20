const express = require("express");
const app = express();

const authRoute = require("./routes/api/authRoute") 
const CustomError = require("./utils/customError")
const errorHandling = require("./controller/errorController")
const cors = require("cors")
 
// middleware
// mliha tkhmm fiha comme code yet executa ma bin ma tb3et req o mzel ma red res 
// yet executaw avec l'ordre 
// yokn ma tprisizich next() marahch yet executa next middleware
// next mchi m3ntha return red blk sema ida kan kayn code tht next rah l compilateur yfri l fct ta3 next w ywli alors nhar theb thabes f next o  mor next kayn code dir return
// global midelware app.use yet executaw f kol req 
// specific midelware app.get app.post .apply. executaw f specifiq route with specific method 
// t9der t'execute plusieurs fcts  f 1 route  app.get("/",fct1,fct2)
// les fct yzm ykon 3ndhom les params (req,res,next(optional))
// t9der tbdel w t crier attribute ta3 req 
// t9der tbdel wla tzid req attribute f fct lwla apres tst3mlha f fct 2eme
// when do similar response-sending method in Express.js middleware, it typically ends the request-response cycle, and any code below that point in the
//  middleware or route handler will not be executed. The response is sent to the client, and the request is considered complete.

//express

// this middleware is same as the next middleware but it is used when we recieve json data so it allow us to parse to json
app.use(express.json())
// this middleware allow us to access informations comming from form
app.use(express.urlencoded(  {extended : false}))
app.use(cors(
  {origin : "*"}
))



app.get("/", (req, res) => {
  res.send("hello");
  res.status(500)
});

app.get("/yasser",  (req, res) => {

  res.send("hello yasser")

});

//authentification route
 app.use("/api/auth",authRoute)



// default route
 app.all("*",(req,res,next)=>{
  
    const err = new CustomError(`can't find ${req.originalUrl} on the server` , 404)
    next(err)
 })

app.get("/Users", (req, res) => {
  const newser = new User({
    firstName: "iarkane",
    lastName: "ayoub",
    email: "ayoubiarkane6@gmail.com",
    password: "ayoub123456",
    mobile: "0555790466",
  });


  newUser
    .save()
    .then((result) => {
      res.send(result)
      console.log("user created");
    })
    .catch((erreur) => res.send(erreur,"user"));

  })
 

app.get("/Allusers", (req, res) => {
  User.find().then((result) => res.send(result)).catch((erreur)=>res.send(erreur))
});


app.get("/oneuser", (req, res) => {
  User.findById("65239ec0d36d96d60f573636").then((result) => res.send(result)).catch((erreur)=>res.send(erreur)) })

  
  app.use(errorHandling)
  



  app.listen((process.env.PORT || 4000), () => console.log("server is listning "))
