const Customer = require("../models/customer.model.js");

exports.create = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      message: "'Enter your name' can not be empty",
    });
  }
  if (!req.body.email) {
    return res.status(400).send({
      message: "'Enter your email' can not be empty",
    });
  }
  if (!req.body.phone) {
    return res.status(400).send({
      message: "'Enter your phone' can not be empty",
    });
  }

  const customer = new Customer({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });

  customer
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating customer.",
      });
    });
};
