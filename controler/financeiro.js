const planilha = require('../models/financeiro.js')
const conn = require('../infraestrutura/coneccao.js')
var instancia_planilha = new planilha(conn)

module.exports = app => {
    app.get('/financeiro/:id', (req,res) => {
        const id = parseInt(req.params.id)
        instancia_planilha.pega_por_id(id, res)
        res.end()
    })
    app.post('/financeiro', (req, res) => {
        var instancia_resposta =  require('./resposta.js')
        instancia_resposta =  instancia_planilha.insere(req.body,instancia_resposta);
        console.log(instancia_resposta.resposta)
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