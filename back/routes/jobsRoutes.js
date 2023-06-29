const express = require("express");

const router = express.Router();

const {
  createJob,
  getJobs,
  getJob,
  deleteJob,
  updateJob,
} = require("../controllers/jobsController");

// GET all jobs
router.get("/", getJobs);

//GET a single job
router.get("/:id", getJob);

//POST a job
router.post("/", createJob);

//DELETE a job
router.delete("/:id", deleteJob);

//UPDATE a job
router.patch("/:id", updateJob);

module.exports = router;
