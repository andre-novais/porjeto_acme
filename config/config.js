const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
 
module.exports = function() {
 const app = express()
 
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({ extended: true }))
 app.engine('html', require('ejs').renderFile);
 app.set('view engine', 'html');



 consign()
   .include('controler')
   .into(app)
  
 return app
}