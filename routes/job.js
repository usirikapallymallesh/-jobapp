const express = require("express");
const router = express.Router();
const jobController = require("./../controllers/job");

router.post("/api/jobs", jobController.CreateJob);
router.get("/api/jobs", jobController.ListAJobs);
router.put("/api/jobs/:id", jobController.UpdateJob);
router.delete("/api/jobs/:id", jobController.DeleteJob);

module.exports = router;
