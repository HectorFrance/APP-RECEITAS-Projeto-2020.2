const express = require('express')
const bodyParser = require("body-parser")

const app = express()

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