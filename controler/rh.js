const planilha = require('../models/rh.js')
const conn = require('../infraestrutura/coneccao.js')
var instancia_planilha = new planilha(conn)


module.exports = app => {
    app.get('/rh/:id', (req,res) => {
        const id = parseInt(req.params.id)
        instancia_planilha.pega_por_id(id, res)
    })
    app.post('/rh', (req, res) => {
        console.log('Evento enviado')
        console.log(req.body)
        instancia_planilha.insere(req.body, res)
    })
    app.put('/rh/:id', (req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.altera(id, req.body,res)
    })
    app.delete('/rh/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.deleta(id,res)
    })     
}