// ********* Imports ********** //
const Report = require("../../../models/reportSchema");

// ********* Reports Filter By Status ********** //
module.exports.reports = async (req, res) => {
  try {
    const { status } = req.params;
    const allreports = await Report.find({ status });
    return res.status(200).json({
      message: "All Reports filter by status",
      reports: allreports,
    });
  } catch (error) {
    return res.status(500).send("Server Error"); // ********* Error Handling ********** //
  }
};
