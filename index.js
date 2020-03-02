console.log("starting app")

const cunstom_app = require('./config/config.js')

const app = cunstom_app()

const coneccao = require('./infraestrutura/coneccao.js')

const planilha = require('./models/financeiro.js')

coneccao.connect()

planilha.init(coneccao)

const hey = "hey"

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('runing server at' + port)
})