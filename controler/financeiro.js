const planilha = require('../models/financeiro.js')
const conn = require('../infraestrutura/coneccao.js')
var instancia_planilha = new planilha(conn)
const Resposta = require('./resposta.js')

module.exports = app => {
    app.get('/financeiro/:id', (req,res) => {
        const id = parseInt(req.params.id)
        instancia_planilha.pega_por_id(id, res)
        res.end()
    })
    app.post('/financeiro', (req, res) => {
        var instancia_resposta = new Resposta()
        instancia_planilha.insere(req.body,instancia_resposta);
        res.writeHead(200, instancia_resposta.resposta)
        res.writeContinue()
        res.end()
    })
    app.put('/financeiro/:id', (req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.altera(id, req.body,res)
        res.end()
    })
    app.delete('/financeiro/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.deleta(id,res)
        res.end()
    })     
}