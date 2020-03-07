const planilha = require('../models/rh.js')
const conn = require('../infraestrutura/coneccao.js')
var instancia_planilha = new planilha(conn)


module.exports = app => {
    app.get('/rh/:id', (req,res) => {
        const id = parseInt(req.params.id)
        instancia_planilha.pega_por_id(id, res)
        res.end()
    })
    app.post('/rh', (req, res) => {
        instancia_planilha.insere(req.body, res)
        res.end()
    })
    app.put('/rh/:id', (req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.altera(id, req.body,res)
        res.end()
    })
    app.delete('/rh/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.deleta(id,res)
        res.end()
    })     
}