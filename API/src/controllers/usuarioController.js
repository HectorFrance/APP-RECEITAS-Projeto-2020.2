
exports.lisAll = (req, res) =>{
    let usuarios = {
        nome: "Heitor",
        senha: "123456"
    }
    res.send(usuarios)
}

exports.createOne = (req, res) => {
    let response = {
        message: "Usuario cadastrado com sucesso",
        data: req.body
    }
    res.send(response)
} 