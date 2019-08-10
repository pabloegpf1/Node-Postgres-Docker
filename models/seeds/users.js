
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {first_name: 'Admin',last_name: 'Admin'},
        {first_name: 'User1',last_name: 'User1'},
        {first_name: 'User2',last_name: 'User2'},
      ]);
    });
};
