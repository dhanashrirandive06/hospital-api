// ********* Imports ********** //
const mongoose = require("mongoose");

// ********* Define Patient Schema ********** //
const patientSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
  },
  {
    timestamps: true,
  }
);

// ********* Exports ********** //
const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
