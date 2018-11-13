"use strict";

const Zombie = require("../models/zombie");

const v1 = () => {
  const routes = require('express').Router();

  // Creates
  routes.post("/zombies", ({ query: { name, location } }, res) => {
    Zombie
      .create({ name, location })
      .then(doc => res.send(doc))
      .catch(err => res.sendStatus(404));
  });

  // Reads
  routes.get("/zombies", (req, res) => {
    Zombie.find()
    res.send(zombies);
  });

  // Updates
  routes.put("/zombies/:id", ({ params: { id }, body }, res) => {
    console.log(id);
    console.log(body);
    res.sendStatus(200);
  });

  // Deletes

  return routes;
};

module.exports = v1;
