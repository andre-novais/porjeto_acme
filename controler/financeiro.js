const planilha = require('../models/financeiro.js')
const conn = require('../infraestrutura/coneccao.js')
var instancia_planilha = new planilha(conn)


module.exports = app => {
    app.get('/financeiro/:id', (req,res) => {
        const id = parseInt(req.params.id)
        resposta = instancia_planilha.pega_por_id(id, resposta)
        res.send(resposta)
    })
    app.post('/financeiro', (req, res) => {
        var resposta = ""
        console.log('Evento enviado')
        console.log(req.body)
        resposta = instancia_planilha.insere(req.body)
        console.log(resposta)
        res.send(resposta)
    })
    app.put('/financeiro/:id', (req,res)=>{
        const id = parseInt(req.params.id)
        resposta = instancia_planilha.altera(id, req.body,resposta)
        res.send(resposta)
    })
    app.delete('/financeiro/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        resposta = instancia_planilha.deleta(id,resposta)
        res.send(resposta)
    })     
}