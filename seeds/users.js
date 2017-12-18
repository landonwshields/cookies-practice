
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1000,
          email: 'landon@gmail.com',
          password: 'password'
        },
        {
          id: 2000,
          email: 'william@gmail.com',
          password: 'password'
        },
        {
          id: 3000,
          email: 'shields@gmail.com',
          password: 'password'
        }
      ]);
    });
};
