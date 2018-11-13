"use strict";

const Zombie = require("../models/zombie");

const v1 = () => {
  const routes = require('express').Router();

  routes.post("/zombies", ({ query: { name, location } }, res) => {
    Zombie
      .create({ name, location })
      .then(doc => res.send(doc))
      .catch(() => res.sendStatus(404));
  });

  routes.get("/zombies", (req, res) => {
    Zombie
      .find()
      .then(docs => res.json(docs))
      .catch(() => res.sendStatus(404));
  });

  routes.put("/zombies/:name/:location", ({ params: { name, location } }, res) => {
    console.log(name, location);
    Zombie
      .findOneAndUpdate({ name }, { location })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(404));
  });

  return routes;
};

module.exports = v1;
