const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json()); // to access data from client side -> req.body
app.use(cors()); // enable backend to interact with frontend

// ROUTES //

// Register and login routes
app.use("/auth", require("./routes/jwtAuth"));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
