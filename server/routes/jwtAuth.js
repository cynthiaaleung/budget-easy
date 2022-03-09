const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");

// Register

router.post("/register", async(req, res) => {
  try {
    // destructure req.body (name, email, password)
    const { name, email, password } = req.body;

    // check if user exists (if user exists then throw error)
    const user = await pool.query("SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (user.rows.length > 0) {
      return res.status(401).send("User already exists");
    }

    // bcrypt user password
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const bcryptPassword = await bcrypt.hash(password, salt);

    // add user to database
    const newUser = await pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, bcryptPassword]
    );

    // generate jwt token
    const token = jwtGenerator(newUser.rows[0].id);

    res.json({ token });
  
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;