const db = require("../models");
const Product = db.products;

exports.findAll = (req, res) => {
    Product.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: "Erreur lors de la récupération des produits." });
        });
}

exports.create = (req, res) => {
    if (!req.body.name || !req.body.photo) {
        res.status(400).send({ message: "Le contenu ne peut pas être vide." });
        return;
    }
    Product.create(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: "Erreur lors de la création du produit." });
        });
}

exports.findByPk = (req, res) => {
    // récupération de l'id dans l'url
    const id = req.params.id;

    Product.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({ message: "Produit non trouvé." });
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Erreur lors de la récupération du produit." });
        });
}

exports.delete = (req, res) => {
    // récupération de l'id dans l'url
    const id = req.params.id;

    Product.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Produit supprimé." });
            } else {
                res.status(404).send({ message: "Produit non trouvé." });
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Erreur lors de la suppression du produit." });
        });
}

exports.update = (req, res) => {
    // récupération de l'id dans l'url
    const id = req.params.id;

    Product.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Produit modifié." });
            } else {
                res.status(404).send({ message: "Produit non trouvé." });
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Erreur lors de la modification du produit." });
        });
}