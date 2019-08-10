const knex = require('../knex');

exports.getUsers = () => knex.from('users').select("*") 


