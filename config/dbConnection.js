const mongoose = require("mongoose");
// to read the file .env and put those environment variable in the global variable process.rnv
require("dotenv").config();
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@e-commerce.psemudv.mongodb.net/?retryWrites=true&w=majority`;

/*we use mongoose as a third party libruary to connect to the data base*/
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to db");
  })
  .catch((err) => console.log("hadi erreur t3 db connection ", err));

