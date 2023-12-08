// ********* Imports ********** //
const express = require("express");

const router = express.Router();

// ********* Define Routes For Doctor, Patient and Report ********** //
router.use("/doctor", require("./doctor"));
router.use("/patients", require("./patient"));
router.use("/report", require("./report"));

// ********* Exports ********** //
module.exports = router;
