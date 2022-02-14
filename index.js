const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

let db = [
    { '1' :{ Nome: 'Cliente 1', CPF: '205784560', Email: 'cliente01@gmail.com', telefone: '3299999928', dataNascimento: '01/03/1995', salario: 7000, dataContratacao: '10/06/2021'} },
    { '2' :{ Nome: 'Cliente 2', CPF: '294568455', Email: 'cliente02@gmail.com', telefone: '3245687956', dataNascimento: '29/11/2000', salario: 6500, dataContratacao: '16/09/2020'} },
    { '3' :{ Nome: 'Cliente 3', CPF: '355784987', Email: 'cliente03@gmail.com', telefone: '3296546587', dataNascimento: '01/01/1999', salario: 10000, dataContratacao: '02/09/2021'} },
]

let fc = [
    { '1' :{ Nome: 'Cliente 1', CPF: '205784560', Email: 'cliente01@gmail.com', telefone: '3299999928', dataNascimento: '01/03/1995', salario: 7000, dataContratacao: '10/06/2021'} },
]

app.get('/employee', (req,res) => {
    return res.json({db})
})

app.get('/employee/:id', (req,res) => {
    return res.json({fc})
})
 
app.post('/employee', (req,res) =>{
    const body = req.body

    if(!body) 
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})

app.put('/employee/:id', (req, res) => {
    const update = req.params.update;
    return res.json([update]);
  });

  app.delete('/employee/:id', (req, res) => {
    const item = findItem(req.params.id);
    return res.json({});
  });

app.listen(21262, () =>{
    console.log(`Express start at http://localhost:21262`)
})

