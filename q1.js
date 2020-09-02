const express = require('express')
const app = express()
const moedaModel = require('./moedaModel')

app.get('/alunos/todos', function(req, res){
    let alunos = [
        {'nome': 'Mario'}, 
        {'nome': 'Julia'}, 
        {'nome': 'Poliana'}
    ]
    res.json(alunos)
})

app.get('/moeda/:valor_real', moedaModel.converterValor)

app.listen(3000)