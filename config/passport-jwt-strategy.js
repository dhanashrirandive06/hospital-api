// ********* Imports ********** //
const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const Doctor = require("../models/doctorSchema");

// ********* Passport Authentication ********** //
let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "hospitalApi",
};

passport.use(
  new JWTStrategy(opts, (jwtPayLoad, done) => {
    // ********* Find Doctor ********** //
    Doctor.findById(jwtPayLoad._id)
      .then(function (user) {
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
      .catch(function (err) {
        return done(err, false); // ********* Error Handling ********** //
      });
  })
);

// ********* Exports ********** //
module.exports = passport;
