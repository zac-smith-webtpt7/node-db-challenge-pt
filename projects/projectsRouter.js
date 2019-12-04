const express = require("express");

const projects = require("./projectsModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  projects
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: `Unable to GET projecs from database` });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  projects
    .getById(id)
    .then(project => {
      const boolProject = {
        ...project[0],
        completed: !!+`${project.completed}`
      };

      if (!project[0]) {
        return res.status(404).json({ message: `Invalid project id` });
      } else {
        res.status(200).json(boolProject);
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: `Unable to add project to database. Err ${err}` });
    });
});

router.post("/", (req, res) => {
  const project = req.body;

  if (!project.project_name) {
    return res.status(404).json({ message: `Project name is missing` });
  }

  projects
    .add(project)
    .then(count => {
      res.status(201).json(count);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: `Unable to add project to database. Err ${err}` });
    });
});

//Tasks

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;
  console.log(id);
  projects
    .getTasks(id)
    .then(tasks => {
      console.log(tasks);
      if (!tasks[0]) {
        res.status(404).json({ message: `Invalid project id` });
      } else {
        res.status(200).json(tasks);
      }
    })
    .catch(err => {
      res.status(500).json({ message: `Enable to GET tasks from database` });
    });
});

router.post("/:id/tasks", (req, res) => {
  const { id } = req.params;
  const task = req.body;
  console.log(id);
  projects.getById(id).then(project => {
    if (!project[0]) {
      return res.status(404).json({ message: `Invalid project ID` });
    }
    if (!task.task_description) {
      return res.status(404).json({ message: `Task description is missing` });
    }
    projects
      .addTask(id, task)
      .then(count => {
        res.status(201).json(count);
      })
      .catch(err => {
        res.status(500).json({ message: `Unable to add task to database` });
      });
  });
});

module.exports = router;
