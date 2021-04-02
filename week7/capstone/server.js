const express = require('express')
const morgan = require('morgan')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')

app.use(morgan('dev'))
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'avengers'
})

app.get('/api/get', (req, res) => {
    const sqlSelect = 'select * from avengers'
    db.query(sqlSelect, (err, result) => {
        return res.status(200).send(result)
    })
})

app.get('/api/get/sort/male', (req, res) => {
    const sqlSelect = 'select * from avengers where gender = "MALE"'
    db.query(sqlSelect, (err, result) => {
        return res.status(200).send(result)
    })
})

app.get('/api/get/sort/female', (req, res) => {
    const sqlSelect = 'select * from avengers where gender = "FEMALE"'
    db.query(sqlSelect, (err, result) => {
        return res.status(200).send(result)
    })
})

app.listen(9000, () => {
    console.log('The server is listening on port 9000!');
})
