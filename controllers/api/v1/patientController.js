// ********* Imports ********** //
const Doctor = require("../../../models/doctorSchema");
const Patient = require("../../../models/patientSchema");
const Report = require("../../../models/reportSchema");

// ********* Patient Registration ********** //
module.exports.register = async (req, res) => {
  try {
    const patient = await Patient.findOne({ phone: req.body.phone });

    if (!patient) {
      const newPatient = await Patient.create({
        name: req.body.name,
        phone: req.body.phone,
        doctor: req.user.id,
      });

      return res.status(200).json({
        message: "Patient Register Successfully",
        patient: newPatient,
      });
    }
    return res.status(200).json({
      message: "Patient Already Exist",
      patient: patient,
    });
  } catch (error) {
    return res.status(500).send("Server Error"); // ********* Error Handling ********** //
  }
};

// ********* Create Patient Report ********** //
module.exports.createReport = async (req, res) => {
  try {
    const patientReport = await Report.create({
      status: req.body.status,
      patient: req.params.id,
      doctor: req.user.id,
    });

    return res.status(200).json({
      message: "Patient Report Created Successfully",
      report: patientReport,
    });
  } catch (error) {
    return res.status(500).send(error); // ********* Error Handling ********** //
  }
};

// ********* All Reports of Patient ********** //
module.exports.allReports = async (req, res) => {
  try {
    const allreports = await Report.find({ patient: req.params.id });

    return res.status(200).json({
      message: "All Reports",
      reports: allreports,
    });
  } catch (error) {
    return res.status(500).send("Server Error"); // ********* Error Handling ********** //
  }
};
