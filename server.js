const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const server = express();
server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());

const projectRouter = require("./projects/projectsRouter.js");
const resourceRouter = require("./resources/resourcesRouter.js");

server.get("/", (req, res) => {
  res.status(200).json({
    message: `Server is running and all is well ... `
  });
});

server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);

module.exports = server;
