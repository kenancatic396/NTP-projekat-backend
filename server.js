const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database.", err);
    process.exit();
  });

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to e commerce application.",
  });
});

require("./config/app/routes/product.routes.js")(app);
require("./config/app/routes/customer.routes.js")(app);
require("./config/app/routes/order.routes.js")(app);
require("./config/app/routes/shipment.routes.js")(app);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
