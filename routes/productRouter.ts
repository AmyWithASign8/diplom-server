const Express = require("express");
const routes = Express.Router();
const productController = require("../controllers/productController");


routes.post("/create_product", productController.create);
routes.get("/get_one_product/:product_id", productController.getOne);//DEMO
routes.get("/get_all_products", productController.getAll);
routes.delete("/delete_product/:product_id", productController.delete);

module.exports = routes;
