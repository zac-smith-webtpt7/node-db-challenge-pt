const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const server = express();
server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({
    message: `Server is running and all is well ... `
  });
});

module.exports = server;
