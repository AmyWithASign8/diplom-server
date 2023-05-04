import { ApiErrors } from "../error/ApiError";

const { Brand, Type } = require("../models/models");
class BrandController {
    async create(req: any, res: any, next: any) {
        try {
            const { name } = req.body;
            const brand = await Brand.create({
                name
            });
            return res.json(brand);
        } catch (e) {
            res.json(e);
        }
    }
    async getAll(req: any, res: any) {
        let brand;
        brand = await Brand.findAll({
            include: [
                {
                    model: Type,
                },
            ],
            order: [["createdAt", "DESC"]],
        });
        return res.json(brand);
    }
    async delete(req: any, res: any, next: any) {
        const { id } = req.body;
        try {
            const brand = await Brand.destroy({
                where: {
                    id: id,
                },
            });
            return res.json(`Бренд ${id} - успешно удален`);
        } catch (e) {
            next(ApiErrors);
        }
    }
}
module.exports = new BrandController();
