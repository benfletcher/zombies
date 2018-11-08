const appRouter = (app) => {
  app.get("*", (req, res) => {
    res.send("testing");
  });

};

module.exports = appRouter;
