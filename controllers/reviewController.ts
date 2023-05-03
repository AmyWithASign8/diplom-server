import { ApiErrors } from "../error/ApiError";

const { Comments, User } = require("../models/models");
class ReviewController {
    async create(req: any, res: any, next: any) {
        try {
            const { userId } = req.params;
            const { title, description, rating } = req.body;
            const comments = await Comments.create({
                title,
                description,
                rating,
                userId
            });
            return res.json(comments);
        } catch (e) {
            res.json(e);
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
            const comment = await Comments.destroy({
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
module.exports = new ReviewController();
