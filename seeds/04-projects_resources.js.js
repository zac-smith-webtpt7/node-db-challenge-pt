exports.seed = function(knex, Promise) {
  return knex("projects_resources").insert([
    {
      project_id: 1,
      resource_id: 1
    },
    {
      project_id: 1,
      resource_id: 2
    }
  ]);
};
