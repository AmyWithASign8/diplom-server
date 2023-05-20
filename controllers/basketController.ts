const {Basket, User, BasketProduct, Product} = require('../models/models')
import {ApiErrors} from "../error/ApiError";
class BasketController {

    async getOne(req: any, res: any, next: any) {
        try {
            const {id} = req.params
            const basket = await Basket.findOne({
                where: {userId: id},
                include: [
                    {
                        model: User,
                    },
                    {
                        model: BasketProduct,
                        include: [
                            {model: Product}
                        ]
                    }
                ],
            })
            return res.json(basket)
        } catch (e) {
            next(ApiErrors)
        }
    }
}


module.exports = new BasketController()