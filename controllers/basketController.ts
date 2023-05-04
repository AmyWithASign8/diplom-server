const {Basket, User, BasketProduct} = require('../models/models')
import {ApiErrors} from "../error/ApiError";
class BasketController {

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
}


module.exports = new BasketController()