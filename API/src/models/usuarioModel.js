const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UsuriosSchema = new Schema({
    nome:  {
        type: String,
        required: "Favor informar o nomede do usuario"
    },
    email: {
        type: String,
        required: "Favor informar o e-mail do usuario"
    },
    senha: {
        type: String,
        required: "Favor informar a senha do usuario"
    }
})
module.exports = mongoose.model("Usuarios", UsuriosSchema)