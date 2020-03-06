const {Client} = require('pg')

const str_local_connection = 'postgresql:andre:quejo9572@database.server.com:5432/postgres'

const coneccao = new Client({
    connectionString: process.env.DATABASE_URL, // || str_local_connection,
    ssl: true,
})

var tabelas = [
    'CREATE TABLE IF NOT EXISTS T_financeiro (id SERIAL PRIMARY KEY, DS_tipificacao varchar(50) not NULL, VL_valor integer not null, occured_at int default extract(epoch from now()))',
    'CREATE TABLE IF NOT EXISTS T_crm (id SERIAL PRIMARY KEY, ID_cliente integer not NULL, DS_evento varchar(20), occured_at int default extract(epoch from now()))',
    'CREATE TABLE IF NOT EXISTS T_loja_online (id SERIAL PRIMARY KEY , ID_compra integer NOT NULL, ID_cliente, ARR_produtos varchar(30)[] not NULL, BO_checkout bolean default FALSE, JS_dados_financeiros JSON default NULL, occured_at int default extract(epoch from now()))',
    'CREATE TABLE IF NOT EXISTS T_fornecedores (id SERIAL PRIMARY KEY, CD_fornecedor integer NOT NULL, DS_evento varchar(20) NOT NULL, ID_produto integer NOT NULL, VL_quantidade integer not null, VL_transacao integer NOT NULL, occured_at int default extract(epoch from now()))',
    'CREATE TABLE IF NOT EXISTS T_rh (id SERIAL PRIMARY KEY, CD_funcionario integer not NULL, DS_evento varchar(30) NOT NULL, DS_cargo varchar(30) NOT NULL,occured_at int default extract(epoch from now()))'
]

tabelas.forEach(tabela => {
    coneccao.query(tabela, erro =>{
        console.log(tabela)
        if(erro) {
            console.log(erro)
        } 
    })})
console.log("tabelas estão no ar")    

module.exports = coneccao