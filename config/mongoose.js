// ********* Import Mongoose From Mongoose Library ********* //
const mongoose = require("mongoose");

const url =
  "mongodb+srv://dhanashrirandive06:dhanashrirandive06@cluster0.c2xytcr.mongodb.net/";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
// ********* Display error is error occures in database connection ********* //
db.on("error", console.error.bind(console, "Error in connection database"));

// ********* Display when connection with database successfully establish ********* //
db.once("open", () => {
  console.log("Database Connected Successfully");
});

// ********* Exports ********* //
module.exports = db;
