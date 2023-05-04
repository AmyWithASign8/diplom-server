const {Orders, User, BasketProduct} = require('../models/models')
import {ApiErrors} from "../error/ApiError";
class OrderController {

    async create(req: any, res: any, next: any) {
        try{
            const {title, description, size, paste, price, userId} = req.body;
            const order = await Orders.create({title, description, size, paste, price, userId})

            return res.json(order)
        }catch (e){
            console.warn(e)
            next(ApiErrors);
        }

    }
    async getAll(req: any, res: any, next: any) {
        try {
            const order = await Orders.findAll({
                include: [
                    {
                        model: User,
                    },
                ],
            })
            return res.json(order)
        } catch (e) {
            next(ApiErrors)
        }
    }
    async getOne(req: any, res: any, next: any) {
        try {
            const {id} = req.body
            const order = await Orders.findOne({
                where: {userId: id},
                include: [
                    {
                        model: User,
                    },
                ],
            })
            return res.json(order)
        } catch (e) {
            next(ApiErrors)
        }
    }
    async delete(req: any, res: any, next: any) {
        const { id } = req.body;
        try {
            const order = await Orders.destroy({
                where: {
                    id: id,
                },
            });
            return res.json(`Продукт №${id} успешно удален`);
        } catch (e) {
            next(ApiErrors);
        }
    }
}


module.exports = new OrderController()