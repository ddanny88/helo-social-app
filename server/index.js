require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");

const app = express();
app.use(json());

//connecting to the databse:
massive(process.env.CONNECTION_STRING)
.then(db => {
  app.set("db", db);
  console.log("Database Connected.");
});

// app.use(
//   session({
//     name: "session1",
//     secret: "shh",
//     resave: false,
//     saveUninitialized: false
//   })
// );


app.listen(3001, () => console.log("Listening on Port 3001..."));
