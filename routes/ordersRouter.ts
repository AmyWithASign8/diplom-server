const Express = require("express");
const routes = Express.Router();
const ordersController = require("../controllers/ordersController");


routes.post("/create_order/:user_id", ordersController.create);
routes.get("/get_one_order/:order_id", ordersController.getOne);
routes.get("/get_all_orders", ordersController.getAll);
routes.delete("/delete_order/:order_id", ordersController.delete);

module.exports = routes;
