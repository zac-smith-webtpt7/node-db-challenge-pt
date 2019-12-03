exports.seed = function(knex, Promise) {
  return knex("tasks").insert([
    {
      task_description: "Fold clothes",
      notes: "fold and stack",
      completed: 0,
      project_id: 1
    },
    {
      task_description: "Clean vacuum to sweep",
      notes: "Clean outside",
      completed: 0,
      project_id: 2
    },
    {
      task_description: "Get new trash bags",
      notes: "Find box under sink",
      completed: 0,
      project_id: 3
    },
    {
      task_description: "Put up clothes",
      notes: "Put in dresser and closet",
      completed: 0,
      project_id: 1
    }
  ]);
};
