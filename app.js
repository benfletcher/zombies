require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/routes.js")(app);

const server = app.listen(PORT, function () {
  console.log("Listening on port %s...", server.address().port);
});
