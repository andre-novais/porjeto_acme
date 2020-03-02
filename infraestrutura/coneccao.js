const Client = require('pg')

const str_local_connection = 'postgresql:andre:quejo9572@database.server.com:5432/postgres'

const coneccao = new Client({
    connectionString: process.env.DATABASE_URL || str_local_connection,
    ssl: true,
})

module.exports = coneccao