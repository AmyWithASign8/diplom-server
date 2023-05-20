import { ApiErrors } from "../error/ApiError";

const { Review, User } = require("../models/models");
class ReviewController {
    async create(req: any, res: any, next: any) {
        try {
            const { title, description, rating, userId } = req.body;
            const comments = await Review.create({
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
        comment = await Review.findAll({
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
            const review = await Review.destroy({
                where: {
                    id,
                },
            });
            return res.json("Комментарий успешно удален");
        } catch (e) {
            next(ApiErrors);
        }
    }
}
module.exports = new ReviewController();
