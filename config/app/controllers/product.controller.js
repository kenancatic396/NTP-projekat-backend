const Product = require("../models/product.model.js");

// Create and Save a new product
exports.create = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      message: "Products name can not be empty",
    });
  }
  if (!req.body.price) {
    return res.status(400).send({
      message: "Products price can not be empty",
    });
  }
  if (!req.body.img_url) {
    return res.status(400).send({
      message: "Products image URL can not be empty",
    });
  }
  if (!req.body.quantity) {
    return res.status(400).send({
      message: "Products quantity can not be empty",
    });
  }
  if (!req.body.vendor) {
    return res.status(400).send({
      message: "Products vendor URL can not be empty",
    });
  }

  // Create a product
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    img_url: req.body.img_url,
    quantity: req.body.quantity,
    vendor: req.body.vendor,
  });

  // Save product in the database
  product
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the product.",
      });
    });
};

// Retrieve and return all products from the database.
exports.findAll = (req, res) => {
  Product.find()
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};

exports.findOne = (req, res) => {
  Product.findById(req.params.productId)
    .then((product) => {
      if (!product) {
        return res.status(404).send({
          message: "product not found with id " + req.params.productId,
        });
      }
      res.send(product);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "product not found with id " + req.params.productId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving product with id " + req.params.productId,
      });
    });
};

// Delete a product with the specified productId in the request
exports.delete = (req, res) => {
  Product.findByIdAndRemove(req.params.productId)
    .then((product) => {
      if (!product) {
        return res.status(404).send({
          message: "product not found with id " + req.params.productId,
        });
      }
      res.send({ message: "product deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "product not found with id " + req.params.productId,
        });
      }
      return res.status(500).send({
        message: "Could not delete product with id " + req.params.productId,
      });
    });
};
