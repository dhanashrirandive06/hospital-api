// ********* Imports ********** //
const express = require("express");
const passport = require("passport");
const doctorController = require("../../../controllers/api/v1/doctorController");
const router = express.Router();

// ********* Define Routes ********** //
router.post("/register", doctorController.register);
router.post("/login", doctorController.login);

// ********* Exports ********** //
module.exports = router;
