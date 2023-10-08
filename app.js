const express = require('express')
const mongoose = require('./config/dbConnection')
const app = express()

app.listen(process.env.PORT ||4000,()=>console.log('server is listning'))