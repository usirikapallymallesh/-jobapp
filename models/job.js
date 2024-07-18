const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  companyName: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
  },
});

const JobModel = mongoose.model("jobs", jobSchema);

module.exports = JobModel;
