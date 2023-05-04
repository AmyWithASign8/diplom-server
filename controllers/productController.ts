const path = require('path')
const uuid = require('uuid')
const {Product, Type, Brand} = require('../models/models')
import {ApiErrors} from "../error/ApiError";
class ProductController {

    async create(req: any, res: any, next: any) {
        try{
            const {title, description, price, additional, typeId, brandId} = req.body;
            const {image} = req.files;
                let fileName = uuid.v4() + '.jpg'
            image.mv(path.resolve(__dirname, '..', 'static', fileName))
            const product = await Product.create({title, description, price,  additional, typeId, brandId, image: fileName})

            return res.json(product)
        }catch (e){
            console.warn(e)
            next(ApiErrors);
        }

    }
    async getAll(req: any, res: any) {
        const {brandId, typeId} = req.query
        let product;
        if (!brandId && !typeId) product = await Product.findAll({
            include: [
                {
                    model: Brand,
                },
                {
                    model: Type,
                }
            ],
            order: [["createdAt", "DESC"]],
        });
        if (brandId && !typeId) product = await Product.findAll({
            where: {brandId},
            include: [
                {
                    model: Brand,
                },
                {
                    model: Type,
                }
            ],
            order: [["createdAt", "DESC"]],
        });
        if (!brandId && typeId) product = await Product.findAll({
            where: {typeId},
            include: [
                {
                    model: Brand,
                },
                {
                    model: Type,
                }
            ],
            order: [["createdAt", "DESC"]],
        });
        if (brandId && typeId) product = await Product.findAll({
            where: {brandId, typeId},
            include: [
                {
                    model: Brand,
                },
                {
                    model: Type,
                }
            ],
            order: [["createdAt", "DESC"]],
        });
        return res.json(product);
    }
    async getOne(req: any, res: any, next: any){
        try {
            const {id} = req.body
            const user = await Product.findOne({
                where: {id},
                include: [
                    {
                        model: Brand,
                    },
                    {
                        model: Type,
                    }
                ],
            })
            return res.json(user)
        }catch (e){
            next(ApiErrors)
        }
    }
    async delete(req: any, res: any, next: any) {
        const { id } = req.body;
        try {
            const product = await Product.destroy({
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


module.exports = new ProductController()