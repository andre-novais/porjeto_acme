const planilha = require('../models/fornecedores.js')
const conn = require('../infraestrutura/coneccao.js')
var instancia_planilha = new planilha(conn)

module.exports = app => {
    app.get('/fornecedores/:id', (req,res) => {
        const id = parseInt(req.params.id)
        instancia_planilha.pega_por_id(id, res)
        res.end()
        
    })
    app.post('/fornecedores', (req, res) => {
        instancia_planilha.insere(req.body, res)
        res.end()
    })
    app.put('/fornecedores/:id', (req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.altera(id, req.body,res)
        res.end()
    })
    app.delete('/fornecedores/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.deleta(id,res)
        res.end()
    })     
}