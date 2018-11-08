require('dotenv').config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1', require("./routes/v1.js"));

const server = app.listen(PORT, function () {
  console.log("Listening on port %s...", server.address().port);
});
