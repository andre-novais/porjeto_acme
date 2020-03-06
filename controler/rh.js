const planilha = require('../models/rh.js')
const conn = require('../infraestrutura/coneccao.js')
var instancia_planilha = new planilha(conn)
var resposta = ""

module.exports = app => {
    app.get('/rh/:id', (req,res) => {
        const id = parseInt(req.params.id)
        instancia_planilha.pega_por_id(id, resposta)
        res.send(resposta)
    })
    app.post('/rh', (req, res) => {
        console.log('Evento enviado')
        console.log(req.body)
        instancia_planilha.insere(req.body, resposta)
        res.send(resposta)
    })
    app.put('/rh/:id', (req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.altera(id, req.body,resposta)
        res.send(resposta)
    })
    app.delete('/rh/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.deleta(id,resposta)
        res.send(resposta)
    })     
}