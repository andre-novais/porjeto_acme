console.log("starting app")

const cunstom_app = require('./config/config.js')

const app = cunstom_app()

const conn = require('./infraestrutura/coneccao.js')



conn.connect()


//var planilha = require('./models/financeiro.js')
//var instancia_planilha = new planilha(coneccao)


const port = process.env.PORT || 3000;




app.listen(port, function(){
    console.log('runing server at' + port)
})