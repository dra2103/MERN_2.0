const Author = require("../models/authors.model")

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allDaAuthors => res.json( allDaAuthors ))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => res.json(  oneSingleAuthor ))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.addAuthor = (req, res) => {
    Author.create(req.body)
        .then(newlyCreatedAuthor => res.json(  newlyCreatedAuthor ))
        .catch(err => res.status(400).json(err))
};

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true})
        .then(updatedAuthor => res.json( updatedAuthor ))
        .catch(err => res.status(400).json(err))
};

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json(  result ))
        .catch(err => res.status(400).json(err));
};
