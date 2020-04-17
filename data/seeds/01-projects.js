
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: "Project 'I'm In'", description: 'Hackers needed. Plant the virus and exfiltrate.'},
      ]);
    });
};
