module.exports = (app) => {
  const shipments = require("../controllers/shipment.controller.js");

  app.post("/shipments", shipments.create);
};
