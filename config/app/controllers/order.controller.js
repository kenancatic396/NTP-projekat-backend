const Order = require("../models/order.model.js");

exports.create = (req, res) => {
  if (!req.body.deliveryAddress) {
    return res.status(400).send({
      message: "'Enter your deliveryAddress' can not be empty",
    });
  }

  const order = new Order({
    deliveryAddress: req.body.deliveryAddress,
    cost: req.body.cost,
    createdAt: req.body.createdAt,
  });

  order
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating order.",
      });
    });
};
