const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production",
  app = next({ dev }),
  handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/p/:id", (req, res) => {
      const page = "/post";
      const qPars = { id: req.params.id };
      app.render(req, res, page, qPars);
    });

    server.get("*", (req, res) => handle(req, res));

    server.listen((PORT = 3000), err => {
      if (err) {
        throw err;
      }
      console.log(`Application is running on: http://localhost:${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
