const express = require('express')
const nunjucks = require('nunjucks')
const cook = require('./data.js')

const server = express()
server.use(express.static('public'))

server.set('view engine', 'njk')
nunjucks.configure('views', {
    express: server
})

console.log(cook)
server.get('/', (req, res) => res.render('index', { cook }));
server.get('/sobre', (req, res) => res.render('sobre'));
server.get('/receitas', (req, res) => res.render('receitas', { cook }));



server.listen(4003, () => console.log('Começo'))