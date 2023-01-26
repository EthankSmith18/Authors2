const Author = require('../models/author.model');

const findAll = (req, res) => {
  Author.find()
    .then((products) => res.status(200).json(products))
    .catch((err) => res.status(400).json(err));
};

const findOne = (req, res) => {
  const { id } = req.params;
  Author.findById(id)
    .then((product) => res.status(201).json(product))
    .catch((err) => res.status(400).json(err));
};

const create = (req, res) => {
  Author.create(req.body)
    .then((product) => res.status(201).json(product))
    .catch((err) => res.status(400).json(err));
};

const updateOne = (req, res) => {
  const { id } = req.params;
  Author.findByIdAndUpdate(id, req.body)
    .then((author) => res.status(200).json(author))
    .catch((err) => res.status(400).json(err));
};

const deleteOne = (req, res) => {
  const { id } = req.params;
  Author.findByIdAndDelete(id)
    .then((author) => res.status(200).json(author))
    .catch((err) => res.status(400).json(err));
};

module.exports = { create, findAll, findOne, updateOne, deleteOne };