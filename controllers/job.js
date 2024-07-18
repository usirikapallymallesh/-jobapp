// const mongoose=require('mongoose');
const JobModel = require("../models/job");

const CreateJob = async (req, res) => {
  const jobObject = req.body;
  const newJob = new JobModel(jobObject);
  const newlySavedJob = await newJob.save();
  res.status(200).json({
    success: "true",
    message: "Job created successfully",
    data: newlySavedJob,
  });
};

const ListAJobs = async (req, res) => {
  const { minsalary, maxsalary } = req.query;
  // console.log(minsalary,maxsalary);
  const jobListed = await JobModel.find({
    $and: [{ salary: { $gt: minsalary } }, { salary: { $lt: maxsalary } }],
  });
  res.status(200).json({
    success: "true",
    message: "Job LISTED ALL  Jobs successfully",
    data: jobListed,
  });
};

const UpdateJob = async (req, res) => {
  const { id } = req.params;
  const updatedObject = req.body;
  console.log(id);
  await JobModel.findByIdAndUpdate(id, updatedObject);
  // await JobModel.findOneAndUpdate === it will take the object and update
  // await JobModel.updateMany   === it will take the object and update
  res.status(200).json({
    success: "true",
    message: "Job updated it successfully",
  });
};

const DeleteJob = async (req, res) => {
  const { id } = req.params;
  await JobModel.findByIdAndDelete(id); // it will be deleted only one record which matched with id
  // await JobModel.findOneAndDelete
  // await JobModel.deleteMany({ _id: id }); // it will delete all records which matched with id  (use this when you want to delete all records)

  res.status(200).json({
    success: "true",
    message: "Job deleted successfully",
  });
};

const jobController = {
  CreateJob,
  ListAJobs,
  UpdateJob,
  DeleteJob,
};
module.exports = jobController;
