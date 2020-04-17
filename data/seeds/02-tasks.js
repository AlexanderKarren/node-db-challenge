
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Drive to black site', notes: 'Driver needs to be ready to exfiltrate immediately.', project_id: 1},
        {description: 'Infiltrate computer room', notes: "Intel says it's on the fourth floor of the admin building on the north side of the compound.", project_id: 1},
        {description: 'Insert USB into admin computer', project_id: 1},
        {description: 'Hold position until virus uploads', project_id: 1},
        {description: 'Remove USB and exfiltrate', project_id: 1},
      ]);
    });
};
