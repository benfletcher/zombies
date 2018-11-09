"use strict";

const v1 = data => {
  const routes = require('express').Router();

  console.log('booo!!', data);

  // Creates
  routes.post("/zombies", ({ query: { name, location, locationId } }, res) => {
    console.log(name, location, locationId);

    // TODO more informative error response
    if (isValidName(name) && (isValidLocationName(location) || isValidLocationId(locationId))) {
      return res.sendStatus(200);
    }

    res.send({ "status": "error", "message": "missing or invalid parameter" });
  });

  // Reads
  routes.get("/zombies", (req, res) => {
    res.send(zombies);
  });

  routes.get("/locations", (req, res) => {
    res.send(locations);
  });

  // Updates
  routes.put("/zombies/:id", ({ params: { id }, body }, res) => {
    console.log(id);
    console.log(body);
    res.sendStatus(200);
  })

  // Deletes

  return routes;
};

module.exports = v1;
