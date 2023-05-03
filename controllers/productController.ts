const path = require('path')
const uuid = require('uuid')
const {Product} = require('../models/models')
import {ApiErrors} from "../error/ApiError";
class NewsController {

    async create(req: any, res: any, next: any) {
        try{
            const {title, description, price, additional, typeId, brandId} = req.body;
            const {image} = req.files;
                let fileName = uuid.v4() + '.jpg'
            image.mv(path.resolve(__dirname, '..', 'static', fileName))
            const news = await Product.create({title, description, userId: req.user.id, image: fileName})

            return res.json(news)
        }catch (e){
            console.warn(e)
            next(ApiErrors);
        }

    }
}


module.exports = new NewsController()