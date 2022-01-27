const JobController = require("../controllers/jobs.controller");

module.exports = app => {
    app.get("/job/", JobController.findAllJobs);
    app.get("/job/:id", JobController.findOneJob);
    app.put("/job/update/:id", JobController.updateJob);
    app.post("/job/new", JobController.createJob);
    app.delete("/job/delete/:id", JobController.deleteJob);
};