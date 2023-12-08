// ********* Imports ********** //
const Doctor = require("../../../models/doctorSchema");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

// ********* Doctor Registration ********** //
module.exports.register = async (req, res, next) => {
  try {
    const user = await Doctor.findOne({ username: req.body.username });

    if (!user) {
      const newDoctor = Doctor({
        username: req.body.username,
        email: req.body.email,
      });

      bcryptjs.hash(req.body.password, 10, (err, hashPassword) => {
        newDoctor.set("password", hashPassword);
        newDoctor.save();
        next();
      });

      return res.status(200).json({
        message: "Doctor Register Successfully",
        doctor: user,
      });
    }
    return res.status(200).json({
      message: "Doctor is already Present",
      doctor: user,
    });
  } catch (error) {
    return res.status(500).send(error); // ********* Error Handling ********** //
  }
};

// ********* Doctor Login ********** //
module.exports.login = async (req, res) => {
  try {
    let user = await Doctor.findOne({ username: req.body.username });
    const validate = await bcryptjs.compare(req.body.password, user.password);
    if (!user || !validate) {
      return res.status(422).json({
        message: "Invalid username or password",
      });
    }

    return res.status(200).json({
      message: "Sign in successfull, here is your token, please keep it safe!",
      data: {
        token: jwt.sign(user.toJSON(), "hospitalApi", { expiresIn: "100000" }),
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Message", // ********* Error Handling ********** //
    });
  }
};
