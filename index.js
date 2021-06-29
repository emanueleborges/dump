const bodyParser      = require('body-parser')
const express         = require('express')
const expressLayouts  = require('express-ejs-layouts')
//const session       = require('express-session')
const path            = require('path')
const exceljs         = require('exceljs')
const dotenv          = require('dotenv');
const wordpress       = require('wordpress');

const app             = express()
const connection      = require('./app/config/connection')

connection.connectToServer(console.log)


app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('views', path.join(__dirname, 'app', 'views'))
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))
app.use(express.static(__dirname + '/public')); 
app.use("/public", express.static(path.join(__dirname, 'public')));


app.use('/', require('./app/config/routes'))

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log('===========================================')
  console.log(`Link do Aplicativo http://localhost:${port}`)
  console.log('===========================================')

})


console.log (path.join(__dirname, 'public'));