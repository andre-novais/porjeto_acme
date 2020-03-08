const planilha = require('../models/financeiro.js')
const conn = require('../infraestrutura/coneccao.js')
var instancia_planilha = new planilha(conn)

module.exports = app => {
    app.get('/financeiro/:id', (req,res) => {
        const id = parseInt(req.params.id)
        instancia_planilha.pega_por_id(id, res)
    })
    app.post('/financeiro', (req, res) => {
        console.log(res.headersSent)
        res.send("ho")
        console.log(res.headersSent)
        //instancia_planilha.insere(req.body, res);
        //if (!(res.headersSent)){
        //    res.status(200).send(req.body)
        }
    })
    app.put('/financeiro/:id', (req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.altera(id, req.body,res)
        if (!(res.headersSent)){
            res.status(200).send(req.body)
        }
    })
    app.delete('/financeiro/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.deleta(id,res)
        if (!(res.headersSent)){
            res.status(200).send(req.body)
        }
    })
    app.get('/financeiro', (req,res)=>{
        instancia_planilha.select_estrela(res);
    })     
}