const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "name is required"],
        minlength: [2, "name must be at least 2 characters"]
    },
    salery: {
        type: Number,
        required: [true, "Age is required"],
        min: [100000, "Job should pay more!"]
    },
    company:{
        type: String,
        required: [true, "name is required"],
        minlength: [2, "name must be at least 2 characters"]
    },
    remote: {
        type: Boolean
    }
}, {timestamps: true});

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;