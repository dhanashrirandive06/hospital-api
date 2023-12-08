/// ********* Imports ********** //
const mongoose = require("mongoose");

// ********* Define Doctor Schema ********** //
const doctorSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// ********* Exports ********** //
const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
