import {DataTypes} from "sequelize";

const {Orders, User, Product, Brand, Type, BasketProduct, OrderProduct} = require('../models/models')
import {ApiErrors} from "../error/ApiError";
class OrderController {

    async create(req: any, res: any, next: any) {
        try{
            const {price, userId} = req.body;
            const order = await Orders.create({price, userId})
            const orderProduct = await BasketProduct.findAll({
                where: { basketId: userId },
            });
            orderProduct.forEach((element: any) => {
                OrderProduct.create({
                    title: element.title,
                    description: element.description,
                    size: element.size,
                    paste: element.paste,
                    price: element.price,
                    orderId: order.id,
                    productId: element.productId,
                });
            });
            return res.json(order)
        }catch (e){
            console.warn(e)
            next(ApiErrors);
        }

    }
    async getAll(req: any, res: any, next: any) {
        try {
            const {id} = req.params
            const order = await Orders.findAll({
                where: {
                    userId: id,
                },
                include: [
                    {
                        model: User,
                    },
                    {
                        model: OrderProduct,
                        include: [
                            {
                                model: Product,
                                include: [
                                    {
                                        model: Type
                                    },
                                    {
                                        model: Brand
                                    }
                                ]
                            }
                        ]
                    }
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