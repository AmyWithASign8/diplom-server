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
            where: {
                status: 'approved'
            },
            include: [
                {
                    model: User,
                },
            ],
            order: [["createdAt", "DESC"]],
        });
        return res.json(comment);
    }
    async getAllForAdmin(req: any, res: any) {
        let comment;
        comment = await Review.findAll({
            where: {
                status: 'waiting'
            },
            include: [
                {
                    model: User,
                },
            ],
            order: [["createdAt", "DESC"]],
        });
        return res.json(comment);
    }
    async ApprovedReview(req: any, res: any, next: any){
        try{
            const {id, status} = req.body;
            const review = await Review.update({status},{
                where: {
                    id
                }
            })
            return res.json('Комментарий одобрен!')
        }catch (e) {
            next(ApiErrors)
        }
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
