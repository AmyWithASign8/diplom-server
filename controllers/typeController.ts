import { ApiErrors } from "../error/ApiError";

const { Type, Brand } = require("../models/models");
class TypeController {
    async create(req: any, res: any, next: any) {
        try {
            const { name, brandId } = req.body;
            const type = await Type.create({
                name, brandId
            });
            return res.json(type);
        } catch (e) {
            res.json(e);
        }
    }
    async getAll(req: any, res: any) {
        let type;
        type = await Type.findAll({
            include: [
                {
                    model: Brand,
                },
            ],
            order: [["createdAt", "DESC"]],
        });
        return res.json(type);
    }
    async delete(req: any, res: any, next: any) {
        const { id } = req.body;
        try {
            const type = await Type.destroy({
                where: {
                    id: id,
                },
            });
            return res.json(`Тип №${id} успешно удален`);
        } catch (e) {
            next(ApiErrors);
        }
    }
}
module.exports = new TypeController();
