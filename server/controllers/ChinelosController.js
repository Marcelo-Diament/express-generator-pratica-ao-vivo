const chinelos = require("../data/chinelos")

const controller = {
  index: (req, res) => res.render('chinelos', {
    title: "Chinelos",
    subtitle: "Conheça todas as nossa chinelas",
    produtos: chinelos
  })
}

module.exports = controller