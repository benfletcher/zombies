const zombie = require('../data-mock/zombie.json');
const locations = require('../data-mock/location.json');

const routes = require('express').Router();

// Reads
routes.get("/zombies", (req, res) => {
  res.send(zombie);
});

routes.get("/locations", (req, res) => {
  res.send(locations);
});

// Creates
routes.post("/zombies", ({ query: { name, location } }, res) => {
  console.log(name, location);
  res.sendStatus(200);
});

// Updates
routes.put("/zombies/:id", ({ params: { id }, body }, res) => {
  console.log(id);
  console.log(body);
  res.sendStatus(200);
})

// Deletes


module.exports = routes;
