const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required : [true, "Setup is required"],
        minlength : [10, "Set up must be at least 10 characters"]
    },
    punchline: {
        type: String,
        required : [true, "Punchline needed"],
        minlength : [2, "Punchline must be 2 characters"]
    }
    
} ,{timestamps: true})

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke