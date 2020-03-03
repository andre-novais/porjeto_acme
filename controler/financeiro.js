const planilha = require('../models/financeiro.js')
const conn = require('../infraestrutura/coneccao.js')
var instancia_planilha = new planilha(conn)

const meu_dado = "meu dado"

module.exports = app => {
    app.get('/financeiro', (req, res) => res.render('../templates/financeiro.html', meu_dado, (erro, html) => {
        res.send(html)
    }))
    app.get('/financeiro/:id', (req,res) => {
        const id = parseInt(req.params.id)
        instancia_planilha.pega_por_id(id, res)
    })
    app.post('/financeiro', (req, res) => {
        console.log('Evento enviado')
        console.log(req.body)
        instancia_planilha.insere(req.body, res)
    })
    app.put('/financeiro/:id', (req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.altera(id, req.body,res)
    })
    app.delete('/financeiro/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        instancia_planilha.deleta(id,res)
    })     
}