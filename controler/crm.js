const planilha = require('../models/crm.js')
const conn = require('../infraestrutura/coneccao.js')
var instancia_planilha = new planilha(conn)
var resposta = ""

module.exports = app => {
    app.get('/crm/:id', (req,res) => {
        const id = parseInt(req.params.id)
        instancia_planilha.pega_por_id(id, resposta)
        res.send(resposta)
    })
    app.post('/crm', (req, res) => {
        console.log('Evento enviado')
        console.log(req.body)
        instancia_planilha.insere(req.body, resposta)
        res.send(resposta)
    })
    app.put('/crm/:id', (req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.altera(id, req.body,resposta)
        res.send(resposta)
    })
    app.delete('/crm/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.deleta(id,resposta)
        res.send(resposta)
    })     
}