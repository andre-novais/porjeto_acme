const planilha = require('../models/loja_online.js')
const conn = require('../infraestrutura/coneccao.js')
var instancia_planilha = new planilha(conn)


module.exports = app => {
    app.get('/loja_online/:id', (req,res) => {
        const id = parseInt(req.params.id)
        instancia_planilha.pega_por_id(id, res)
        res.end()
    })
    app.post('/loja_online', (req, res) => {
        instancia_planilha.insere(req.body, res)
        res.end()
    })
    app.put('/loja_online/:id', (req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.altera(id, req.body,res)
        res.end()
    })
    app.delete('/loja_online/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.deleta(id,res)
        res.end()
    })     
}