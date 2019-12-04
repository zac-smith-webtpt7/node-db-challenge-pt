exports.seed = function(knex) {
  return knex("projects")
    .del()
    .then(function() {
      return knex("projects").insert([
        {
          id: 1,
          name: "Laundry",
          description: "Wash and dry clothes",
          completed: false
        },
        {
          id: 2,
          name: "Porch",
          description: "Sweep and organize",
          completed: false
        },
        {
          id: 3,
          name: "Kitchen",
          description: "Take out trash",
          completed: false
        }
      ]);
    });
};
