const Express = require("express");
const routes = Express.Router();
const commentController = require("../controllers/commentController");


routes.post("/create_comment/:user_id", commentController.create);
routes.get("/get_all_comments", commentController.getAll);
routes.delete("/delete_comment/:comment_id", commentController.delete);

module.exports = routes;
