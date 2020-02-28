const cunstom_app = require('./config/config.js')

const app = cunstom_app()

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('runing server at' + port)
})