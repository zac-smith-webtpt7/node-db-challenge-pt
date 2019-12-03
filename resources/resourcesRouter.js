const express = require("express");

const resources = require("./resourceModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  resources
    .get()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          message: `Unable to GET resources from database: Error ${err}`
        });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  resources
    .getById(id)
    .then(resource => {
      if (!resource[0]) {
        res.status(404).json({ message: `Invalid resource ID` });
      } else {
        res.status(200).json(resource);
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({
          message: `Unable to GET resources from database: Error ${err}`
        });
    });
});

router.post("/", (req, res) => {
  const resource = req.body;

  resources
    .add(resource)
    .then(count => {
      res.status(201).json(count);
    })
    .catch(err => {
      res.status(500).json({ message: `Error adding resource to database` });
    });
});

module.exports = router;
