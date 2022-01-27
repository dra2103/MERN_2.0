const Job = require("../models/jobs.model");


// Find All
module.exports.findAllJobs = (req, res) => {
    Job.find()
        .then(allDaUsers => res.json(allDaUsers))
        .catch(err => res.status(400).json(err));
};

// Find One
module.exports.findOneJob = (req, res) => {
    Job.findOne({ _id: req.params.id })
        .then(oneSingleUser => res.json(oneSingleUser))
        .catch(err => res.status(400).json(err));
};

//Create one
module.exports.createJob= (req, res) => {
    Job.create(req.body)
        .then(newlyCreatedUser => res.json(newlyCreatedUser))
        .catch(err => res.status(400).json(err));
};

// Update
module.exports.updateJob= (req, res) => {
    Job.findOneAndUpdate(
        { _id: req.params.id }, 
        req.body, 
        { new: true, runValidators: true }
        )
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.status(400).json(err))
};

// Delete
module.exports.deleteJob = (req, res) => {
    Job.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
};
