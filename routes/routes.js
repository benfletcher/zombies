const zombies = require('../data-mock/zombies.json');

const appRouter = (app) => {
  app.get("/zombies", (req, res) => {
    res.send(zombies);
  });

};

module.exports = appRouter;
