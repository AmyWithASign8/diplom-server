const Express = require("express");
const routes = Express.Router();
const userController = require("../controllers/userController");


routes.post("/create_user", userController.create);
routes.get("/get_one_user/:user_id", userController.getOne);//DEMO
routes.get("/get_all_users", userController.getAll);
routes.delete("/delete_user/:user_id", userController.delete);

module.exports = routes;
