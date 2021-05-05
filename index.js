const bodyParser = require('body-parser')
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')
const path = require('path')

const app = express()
const connection = require('./app/config/connection')
connection.connectToServer(console.log)

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('views', path.join(__dirname, 'app', 'views'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  key: 'user_sid',
  secret: 'tWOEbbpi',
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 600000
  }
}))

app.use('/', require('./app/config/routes'))

const port = 8000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})