const Joke = require('../models/jokes.model');

module.exports.index = (req, res) => {
    res.json("Hello")
}

// Find All
module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes=>res.json( allJokes))
        .catch(err=>res.json({message: "Something went wrong", error: err}));
}

// Create
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(createJoke => res.json( createJoke ))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Find one
module.exports.findOnejoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


// Update
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true },  )
        .then(updatedJoke => res.json( updatedJoke ))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Delete
module.exports.deletejoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

