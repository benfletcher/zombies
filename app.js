"use strict";

require('dotenv').config();

const express = require("express");
const app = express();

const data = require("./data-mock/data");

const PORT = process.env.PORT || 3000;

app.use(require("morgan")('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1', require("./routes/v1.js")(data));

const server = app.listen(PORT, function () {
  console.log("Listening on port %s...", server.address().port);
});
