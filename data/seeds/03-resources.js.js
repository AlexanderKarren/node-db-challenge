
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'computer'},
        {name: 'conference room'},
        {name: 'driver'},
        {name: 'hacker'},
        {name: 'scientist'},
        {name: 'pimento cheese sandwich'},
        {name: 'power glove'},
        {name: 'time hacker'},
        {name: 'phone booth'},
        {name: 'USB virus'}
      ]);
    });
};
