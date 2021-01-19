const mongoose = require("mongoose")
const Usuario = mongoose.model("Usuarios")

exports.lisAll = (req, res) =>{
    Usuario.find({}, (error, usuarios)=> {
        if (error) {
            res.send(error)
        }
        let response = {
            message: "Usuario encontrado com sucesso",
            data: usuarios
        }
        res.send(response) 
    })
}

exports.createOne = (req, res) => {
    const {nome, email, senha} = req.body
    let novoUsusario = new Usuario({nome, email, senha})
    novoUsusario.save((error, usuario) => {
        if (error) {
            res.send(error)
        }
        let response = {
            message: "Usuario cadastrado com sucesso",
            data: usuario
        }
        res.send(response)
    })
} 

exports.showOne = (req, res) => {
    console.log(req.params.nome)
    Usuario.findOne({nome: req.params.nome}, (error, usuario) =>{
        console.log(usuario)
        if(error){
            res.send(error)
        }
        let response = {
            message: "Usuario encontrado com sucesso",
            data: usuario
        }
        res.send(response)
    })
}

exports.update = (req, res) => {
    Usuario.findOneAndUpdate(
        {nome: req.params.nome},
        req.body,
        {new: true},
        (error, usuario) => {
            if(error){
                res.send(error)
            }
            res.send(usuario)
        }
        )
    }

exports.delete = (req, res) => {
    Usuario.remove({nome: req.params.nome}, (error, usuario) => {
        if(error){
            res.send(error)
        }
        let response = {
            message: "Usuario removido com sucesso",
            data: usuario
        }
        res.send(response)
    })
}