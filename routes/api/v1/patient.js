// ********* Imports ********** //
const express = require("express");
const patientController = require("../../../controllers/api/v1/patientController");
const passport = require("passport");
const router = express.Router();

// ********* Define Routes ********** //
router.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  patientController.register
);
router.post(
  "/:id/create-report",
  passport.authenticate("jwt", { session: false }),
  patientController.createReport
);
router.get("/:id/all-reports", patientController.allReports);

// ********* Exports ********** //
module.exports = router;
