const planilha = require('../models/loja_online.js')
const conn = require('../infraestrutura/coneccao.js')
var instancia_planilha = new planilha(conn)


module.exports = app => {
    app.get('/loja_online/:id', (req,res) => {
        const id = parseInt(req.params.id)
        instancia_planilha.pega_por_id(id, res)
        if (!(res.headerSent)){
            res.status(200).send(req.body)
        }
    })
    app.post('/loja_online', (req, res) => {
        instancia_planilha.insere(req.body, res)
        if (!(res.headerSent)){
            res.status(200).send(req.body)
        }
    })
    app.put('/loja_online/:id', (req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.altera(id, req.body,res)
        if (!(res.headerSent)){
            res.status(200).send(req.body)
        }
    })
    app.delete('/loja_online/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.deleta(id,res)
        if (!(res.headerSent)){
            res.status(200).send(req.body)
        }
    })     
}