require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;
const server = express();
const jobRoutes = require("./routes/job");
const mongoose = require("mongoose");

server.use(express.json());

//connect server to database using mongoose library
mongoose
  .connect("mongodb://localhost:27017/jobapp")
  .then(() => {
    console.log("connected successfully to the database");
  })
  .catch((err) => console.log("error connecting to the database"));

//api routes
server.use(jobRoutes);
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
