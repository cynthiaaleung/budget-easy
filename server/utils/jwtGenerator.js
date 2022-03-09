const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtGenerator = (id) => {
  const payload = {
    user: id
  };

  return jwt.sign(payload, process.env.JWTSECRET, {expiresIn: 60 * 60}); // in seconds, here it is 1hr
};

module.exports = jwtGenerator;