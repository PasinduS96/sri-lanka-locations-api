// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

// Create express instance
const app = express();

// Main Middlewares
app.use(morgan("dev"));

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

// app.use(
// 	cors({
// 		origin: 'https://caremypal.lk',
// 	}),
// );

app.listen(process.env.PORT, () => {
  console.log(`server started at ${process.env.PORT}`);

  //Connect to the database
  mongoose.connect(process.env.MONGODB_URI);
  const database = mongoose.connection;

  database.on("error", (error) => {
    console.log(error);
  });

  database.once("connected", () => {
    console.log("MongoDB Connected Successfully!!");
  });
});
