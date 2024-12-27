const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const playerRoutes = require("./router/cricket.routes.js");
const Sequalize = require("sequelize");
const sequelize = require("./utils/database.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(playerRoutes);

sequelize
  .sync()
  .then((result) => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
