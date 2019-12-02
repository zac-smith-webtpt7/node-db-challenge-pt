const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({
    message: `Server is running on ${PORT}! All is well ... `
  });
});

const PORT = process.env.PORT || 3333;
server.listen(PORT, () => {
  console.log(`\n *** Server is listening on port ${PORT} *** \n`);
});
