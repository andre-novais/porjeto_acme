const planilha = require('../models/rh.js')
const conn = require('../infraestrutura/coneccao.js')
var instancia_planilha = new planilha(conn)


module.exports = app => {
    app.get('/rh/:id', (req,res) => {
        const id = parseInt(req.params.id)
        instancia_planilha.pega_por_id(id, res)
        if (!(res.headerSent)){
            res.status(200).send(req.body)
        }
    })
    app.post('/rh', (req, res) => {
        instancia_planilha.insere(req.body, res)
        if (!(res.headersSent)){
            res.status(200).send(req.body)
        }   
    })
    app.put('/rh/:id', (req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.altera(id, req.body,res)
        if (!(res.headerSent)){
            res.status(200).send(req.body)
        }
    })
    app.delete('/rh/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.deleta(id,res)
        if (!(res.headerSent)){
            res.status(200).send(req.body)
        }
    })
    app.get('/rh', (req,res)=>{
        instancia_planilha.select_estrela(res);
    })          
}