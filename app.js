const express = require("express");
const app = express();
const authRoute = require("./routes/api/authRoute") 
const CustomError = require("./utils/customError")
const errorHandling = require("./controller/errorController")
 
// middleware
app.use(express.json())
app.use(express.urlencoded(  {extended : false}))


app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/yasser", (req, res) => {
  res.send("hello yasser");
});

// authentification route
app.use("/api/auth",authRoute)



// default route
 app.all("*",(req,res,next)=>{
  
    const err = new CustomError(`can't find ${req.originalUrl} on the server` , 404)
    next(err)
 })

// app.get("/Users", (req, res) => {
//   const newser = new User({
//     firstName: "iarkane",
//     lastName: "ayoub",
//     email: "ayoubiarkane6@gmail.com",
//     password: "ayoub123456",
//     mobile: "0555790466",
//   });


//   newUser
//     .save()
//     .then((result) => {
//       res.send(result)
//       console.log("user created");
//     })
//     .catch((erreur) => res.send(erreur,"user"));

//   })
 

// app.get("/Allusers", (req, res) => {
//   User.find().then((result) => res.send(result)).catch((erreur)=>res.send(erreur))
// });

// app.get("/oneuser", (req, res) => {
//   User.findById("65239ec0d36d96d60f573636").then((result) => res.send(result)).catch((erreur)=>res.send(erreur))

 app.use(errorHandling)


app.listen((process.env.PORT || 4000), () => console.log("server is listning"))
