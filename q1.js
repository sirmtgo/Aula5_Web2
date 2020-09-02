const express = require('express')
const app = express()

app.get('/alunos/todos', function(req, res){
    let alunos = [
        {'aluno1': 'Mario'}, 
        {'aluno2': 'Julia'}, 
        {'aluno3': 'Poliana'}
    ]
    res.json(alunos)
})

app.get('/moeda/:valor_real', function(req, res){

})

app.listen(3000)