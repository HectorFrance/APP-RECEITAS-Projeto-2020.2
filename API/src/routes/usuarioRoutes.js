module.exports = function (app) {
    const usuarios = require("../controllers/usuarioController")
    
    app.route("/usuarios")
    .get(usuarios.lisAll)
    .post(usuarios.createOne)

    app.route("/usuarios/:nome")
    .get(usuarios.showOne)
    .put(usuarios.update)
    .delete(usuarios.delete)
}