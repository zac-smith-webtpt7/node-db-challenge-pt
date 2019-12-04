exports.seed = function(knex, Promise) {
  return knex("resources").insert([
    {
      resource_name: "resouce 1",
      resource_description: "frist resource"
    },
    {
      resource_name: "resource 2",
      resource_description: "second resourece"
    },
    {
      resource_name: "resource 3",
      resource_description: "third resourece"
    }
  ]);
};
