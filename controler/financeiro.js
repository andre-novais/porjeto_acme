const planilha = require('../models/planilhas.js')

module.exports = app => {
    app.get('/financeiro', (req, res) => res.send(
        'Você está na rota de atendimentos e está realizando um GET'
        ))

    app.post('/financeiro', (req, res) => {
        console.log('Evento enviado')
        console.log(req.body)
        planilha.insere(req.body)
        res.send('Post atendimento')
    })
     
     
}