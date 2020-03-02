const planilha = require('../models/financeiro.js')
const conn = require('./infraestrutura/coneccao.js')
conn.connect()
var instancia_planilha = new planilha(conn)

module.exports = app => {
    app.get('/financeiro', (req, res) => res.send(
        'Você está na rota de atendimentos e está realizando um GET'
        ))

    app.post('/financeiro', (req, res) => {
        console.log('Evento enviado')
        console.log(req.body)
        instancia_planilha.insere(req.body, res)
    })
     
     
}