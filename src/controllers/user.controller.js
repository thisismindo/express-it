const User = require('../models/user.model');

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'Request body can not be empty.' });
    return;
  }

  const user = {
    name: req.body.name,
    email: req.body.email,
  };

  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({ message: err.message || 'Error occurred while creating the User.' });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({ message: err.message || 'Error occurred while retrieving users.' });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({ message: `User not found with id ${req.params.id}.` });
      } else {
        res.status(500).send({ message: 'Error retrieving User with id ' + req.params.id });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  User.updateById(req.params.id, req.body, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({ message: `Not found User with id ${req.params.id}.` });
      } else {
        res.status(500).send({ message: 'Error updating User with id ' + req.params.id });
      }
    } else res.send(data);
  });
};

exports.delete = (req, res) => {
  User.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({ message: `Not found User with id ${req.params.id}.` });
      } else {
        res.status(500).send({ message: 'Could not delete User with id ' + req.params.id });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });
};
