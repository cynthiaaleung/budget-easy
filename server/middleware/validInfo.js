module.exports = (req, res, next) => {

  const { email, name, password } = req.body;

  const validEmail = (userEmail) => {
    // returns boolean value whether or not email pattern exists in string
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  };

  if (req.path === "/register") {
    // name, email, password inputs are mandatory
    if (![email, name, password].every) {
      return res.status(401).json("Missing credentials");
    } else if (!validEmail(email)) {
      return res.status(401).json("Invalid email");
    }
  } else if (req.path === "/login") {
    // email and password inputs are mandatory
    if (![email, password].every) {
      return res.status(401).json("Missing credentials");
    } else if (!validEmail(email)) {
      return res.status(401).json("Invalid email");
    }
  }
  // continue on with the route
  next();
};