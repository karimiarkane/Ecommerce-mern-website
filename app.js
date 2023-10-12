const express = require("express");
// this require is for executing the dbconnection code and get the mongoose variable
const User = require("./models/userModel");
const app = express();
const authRoute = require("./routes/authRoute") 


app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/auth",authRoute)


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
  User.findById("65239ec0d36d96d60f573636").then((result) => res.send(result)).catch((erreur)=>res.send(erreur))
   
})


app.listen((process.env.PORT || 4000), () => console.log("server is listning"))
