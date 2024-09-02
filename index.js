require ('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/twitter', (req, res) => {
    res.send("I am twitter")
})

app.get('/arman', (req, res) => {
    res.send("I am from arman ")
})

app.get('/login', (req,res) => {
    res.send('<h1> Hey please login first <h1/>')
})
app.listen(process.env.PORT,() => {
    console.log(`Example of app listening on port ${port}`)
})