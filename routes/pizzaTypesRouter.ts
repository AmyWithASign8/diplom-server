const Express = require("express");
const routes = Express.Router();
const pizzaTypesController = require("../controllers/pizzaTypesController");


routes.get("/get_one_pizza_type/:pizza_type_id", pizzaTypesController.getOne);
routes.get("/get_all_pizza_types", pizzaTypesController.getAll);


module.exports = routes;
