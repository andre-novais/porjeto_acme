const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
 
module.exports = function() {
 const app = express()
 
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({ extended: true }))
 
 consign()
   .include('controler')
   .into(app)
 
 return app
}