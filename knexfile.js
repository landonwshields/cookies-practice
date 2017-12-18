// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'cookie-practice'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
