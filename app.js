const express = require('express')
const app = express()

// Routes
const routes = require('./routes');
app.use('/', routes)

// Views Pug
app.set('views', (__dirname + '/views'))
app.set('view engine', 'pug')

// Public folder
app.use(express.static(__dirname + '/public'))

app.listen(3000, () => console.log("We have a server running"))
