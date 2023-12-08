// ********* Imports ********** //
const express = require("express");
const reportController = require("../../../controllers/api/v1/reportController");
const router = express.Router();

// ********* Define Routes ********** //
router.get("/reports/:status", reportController.reports);

// ********* Exports ********** //
module.exports = router;
