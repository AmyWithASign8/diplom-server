const {Basket, User, BasketProduct} = require('../models/models')
import {ApiErrors} from "../error/ApiError";
class BasketProductController {

    async create(req: any, res: any, next: any) {
        try{
            const {title, description, size, paste, price, basketId, productId} = req.body;
            const basketProduct = await BasketProduct.create({title, description, size, paste, price, basketId, productId})

            return res.json(basketProduct)
        }catch (e){
            console.warn(e)
            next(ApiErrors);
        }

    }
    async getOne(req: any, res: any, next: any) {
        try {
            const {id} = req.body
            const user = await Basket.findOne({
                where: {userId: id},
                include: [
                    {
                        model: User,
                    },
                    {
                        model: BasketProduct,
                    }
                ],
            })
            return res.json(user)
        } catch (e) {
            next(ApiErrors)
        }
    }
    async delete(req: any, res: any, next: any) {
        const { id } = req.body;
        try {
            const basketProduct = await BasketProduct.destroy({
                where: {
                    id: id,
                },
            });
            return res.json(`Продукт №${id} успешно удален`);
        } catch (e) {
            next(ApiErrors);
        }
    }
    async clearCart(req: any, res: any, next: any) {
        const { id } = req.params;
        try {
            const basketProduct = await BasketProduct.destroy({
                where: {
                    basketId: id,
                },
            });
            return res.json(`Корзина пользователя №${id} успешно очищена`);
        } catch (e) {
            next(ApiErrors);
        }
    }
}

module.exports = new BasketProductController()