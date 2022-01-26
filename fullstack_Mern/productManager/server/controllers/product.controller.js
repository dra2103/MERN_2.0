const { response } = require('express');
const {Product} = require('../models/product.model');

module.exports.index = (req, res) => { 
    res.json({
        message: "Hello World"
    });
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(person => res.json(person))
        .catch(err=>res.json(err))
}

module.exports.getAllProducts = (req, res) => {
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.json(err))
}

module.exports.getProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deleteConfrim => res.json(deleteConfrim))
        .catch(err => response.json(err))
}