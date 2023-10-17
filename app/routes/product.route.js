module.exports = app => {
    const product = require("../controllers/product.controller.js");
    const router = require("express").Router();

    // Show all the products
    router.get("/", product.findAll);

    // Create a new product
    router.post("/", product.create);

    // Show a product by id
    router.get("/:id", product.findByPk);

    // Delete a product by id
    router.delete("/:id", product.delete);

    // Update a product by id
    router.put("/:id", product.update);

    // donne le nom de la route pour show all the products
    app.use('/api/product', router);
}