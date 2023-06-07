module.exports = (app) => {
  const products = require("../controllers/product.controller.js");

  app.post("/products", products.create);

  app.get("/products", products.findAll);

  app.get("/products/:productId", products.findOne);

  app.delete("/products/:productId", products.delete);
};
