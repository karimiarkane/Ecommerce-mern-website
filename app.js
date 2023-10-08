const express = require('express')
// this require is for executing the dbconnection code and get the mongoose variable
const mongoose = require('./config/dbConnection')
const app = express()

app.get("/",(req,res)=>{
  res.send("hello")
})

app.listen(process.env.PORT ||4000,()=>console.log('server is listning'))