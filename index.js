const bodyParser      = require('body-parser')
const express         = require('express')
const expressLayouts  = require('express-ejs-layouts')
//const session       = require('express-session')
const path            = require('path')
const exceljs         = require('exceljs')
const dotenv          = require('dotenv');

<<<<<<< HEAD
const app             = express()
const connection      = require('./app/config/connection')
=======
const app = express()
const connection = require('./app/config/connection')
>>>>>>> 7735ac994607846d649a651751a5f75f4de34838
connection.connectToServer(console.log)

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('views', path.join(__dirname, 'app', 'views'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
<<<<<<< HEAD

app.use(express.static('public'))
app.use(express.static(__dirname + '/public')); 
app.use("/public", express.static(path.join(__dirname, 'public')));

=======
>>>>>>> 7735ac994607846d649a651751a5f75f4de34838
app.use('/', require('./app/config/routes'))

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log('===========================================')
  console.log(`Link do Aplicativo http://localhost:${port}`)
  console.log('===========================================')

})


