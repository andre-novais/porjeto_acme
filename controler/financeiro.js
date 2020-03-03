const planilha = require('../models/financeiro.js')
const conn = require('../infraestrutura/coneccao.js')
var instancia_planilha = new planilha(conn)

module.exports = app => {
    app.get('/financeiro', (req, res) => res.send(
        'Você está na rota de atendimentos e está realizando um GET'
        ))
    app.get('/financeiro/:id', (req,res) => {
        const id = parseInt(req.params.id)
        instancia_planilha.pega_por_id(id, res)
    })
    app.post('/financeiro', (req, res) => {
        console.log('Evento enviado')
        console.log(req.body)
        instancia_planilha.insere(req.body, res)
    })
    app.put('/financeiro/:id', (req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.altera(id, req.body,res)
    })
     
}