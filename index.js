//*********Importing Dependencies**********//
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const port = 8000;

//*********Database Connection**********//
require("./config/mongoose");
const passport = require("passport");
const passportJWT = require("./config/passport-jwt-strategy.js");

//*********Middleware**********//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//*********Redirecting Routes**********//
app.use("/", require("./routes"));

//*********Server Running**********//
app.listen(port, () => {
  console.log("Server Running on PORT : ", port);
});
