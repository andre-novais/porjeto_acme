const planilha = require('../models/crm.js')
const conn = require('../infraestrutura/coneccao.js')
var instancia_planilha = new planilha(conn)

module.exports = app => {
    app.get('/crm/:id', (req,res) => {
        const id = parseInt(req.params.id)
        instancia_planilha.pega_por_id(id, res)
        if (!(res.headerSent)){
            res.status(200).send(req.body)
        }
    })
    app.post('/crm', (req, res) => {
        instancia_planilha.insere(req.body, res)
        if (!(res.headersSent)){
            res.status(200).send(req.body)
        }   
    })
    app.put('/crm/:id', (req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.altera(id, req.body,res)
        if (!(res.headerSent)){
            res.status(200).send(req.body)
        }
    })
    app.delete('/crm/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.deleta(id,res)
        if (!(res.headerSent)){
            res.status(200).send(req.body)
        }
    })
    app.get('/crm', (req,res)=>{
        instancia_planilha.select_estrela(res);
    })          
}