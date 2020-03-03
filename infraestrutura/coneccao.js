const {Client} = require('pg')

const str_local_connection = 'postgresql:andre:quejo9572@database.server.com:5432/postgres'

const coneccao = new Client({
    connectionString: process.env.DATABASE_URL, // || str_local_connection,
    ssl: true,
})

var tabelas = [
    'CREATE TABLE IF NOT EXISTS T_financeiro (id SERIAL PRIMARY KEY, DS_tipo varchar(50) not NULL, VL_valor integer not null, occured_at int default extract(epoch from now()))',
    
]


module.exports = coneccao