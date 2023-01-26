const express = require("express");
const authorRouter = express.Router();

const {
  create,
  findAll,
  findOne,
  updateOne,
  deleteOne,
} = require("../controllers/author.controller");

authorRouter
  .route('/');
 
authorRouter
  .route('/authors')
  .post(create)
  .get(findAll);


authorRouter
  .route('/authors/:id')
  .get(findOne)
  .put(updateOne)
  .delete(deleteOne);

  module.exports = authorRouter;