const Shipment = require("../models/shipment.model.js");

exports.create = (req, res) => {
  const shipment = new Shipment({
    deliveryAddress: req.body.deliveryAddress,
    senderAddress: req.body.senderAddress,
    createdAt: req.body.createdAt,
    deliveredAt: req.body.deliveredAt,
  });

  shipment
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating shipment.",
      });
    });
};
