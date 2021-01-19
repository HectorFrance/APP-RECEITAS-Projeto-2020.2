const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const Usuario = require("./src/models/usuarioModel")

const app = express()

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/ApiReceitasApp",  {
    useNewUrlParser: true,
    useUnifiedTopology: true 
 })

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

const routes = require("./src/routes/usuarioRoutes.js")

routes(app)

app.route('/').get((req, res) => {
    res.send("acessou")
})

const port = process.env.PORT || 3000

app.listen(port)

console.log("Aplicação iniciada na porta: ", port)