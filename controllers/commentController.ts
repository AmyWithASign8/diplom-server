import { ApiErrors } from "../error/ApiError";

const { Comments, User } = require("../models/models");
class CommentController {
    async create(req: any, res: any, next: any) {
        try {
            const { userId } = req.params;
            const { title, description } = req.body;
            const comments = await Comments.create({
                title,
                description,
                userId,
            });
            return res.json(comments);
        } catch (e) {
            next(ApiErrors);
        }
    }
    async getAll(req: any, res: any) {
        let comment;
        comment = await Comments.findAll({
            include: [
                {
                    model: User,
                },
            ],
            order: [["createdAt", "DESC"]],
        });
        return res.json(comment);
    }
    async delete(req: any, res: any, next: any) {
        const { id } = req.body;
        try {
            const comments = await Comments.destroy({
                where: {
                    newsId: id,
                },
            });
            return res.json("Комментарий успешно удален");
        } catch (e) {
            next(ApiErrors);
        }
    }
}
module.exports = new CommentController();
