const db = require('./connections')


function getUser(email, password) {
  return db('users').where('email', email).andWhere('password', password)
}


module.exports = {
  getUser
}
