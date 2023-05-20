import {ApiErrors} from "../error/ApiError";
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Orders, Review, Basket} = require('../models/models')

const generateJwt = (id: number, email: string, password: string, role: string) => {
    return jwt.sign(
        {id, email, password, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}
class UserController {
    async registration(req: any, res: any, next: any) {
        const {email, password, role} = req.body
        if (!email){
            return next(ApiErrors.badRequest('Неккоректный email'))
        }
        if (!password){
            return next(ApiErrors.badRequest('Неккоректный пароль'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiErrors.badRequest('Пользователь с такой электронной почтой уже существует'))
        }
        const hashPassword = await  bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})

        const token = generateJwt(user.id, user.email, password, user.role)
        return res.json({token})

    }
    async login(req: any, res: any, next: any) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiErrors.internal('Такого пользователя не существует'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword){
            return next(ApiErrors.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, password, user.role)
        return res.json({token})
    }
    async check(req: any, res: any) {
        const token = generateJwt(req.user.id, req.user.email, req.user.password, req.user.role)
        return res.json({token})
    }
    async getOne(req: any, res: any, next: any){
        try {
            const {id} = req.body
            const user = await User.findOne({
                where: {id}
            })
            return res.json(user)
        }catch (e){
            next(ApiErrors)
        }
    }
    async getAll(req: any, res: any, next: any){
        try {
            const user = await User.findAll(
                {
                    include:[{
                        model: Orders,
                    }, {model: Review},{model: Basket}]
            }
            )
            return res.json(user)
        }catch (e){
            next(ApiErrors)
        }
    }
    async updateEmail(req: any, res: any, next: any){
        try {
            const {email, id} = req.body
            const candidate = await User.findOne({where: {email}})
            if (candidate) {
                return next(ApiErrors.badRequest('Пользователь с такой электронной почтой уже существует'))
            }
            const user = await User.update(
                {email},
                {where: {id}}
            )
            return res.json(user)
        }catch (e){
            console.log(e)
        }
    }
    async updatePassword(req: any, res: any){
        try {
            const {password, id} = req.body
            const hashPassword = await  bcrypt.hash(password, 5)
            const user = await User.update(
                {password: hashPassword},
                {where: {id}}
            )
            return res.json(user)
        }catch (e){
            console.log(e)
        }
    }
    async updateTotalSpent(req: any, res: any){
        try {
            const {totalSpent, id} = req.body
            const user = await User.update(
                {totalSpent: totalSpent},
                {where: {id}}
            )
            return res.json(user)
        }catch (e){
            console.log(e)
        }
    }
    async updateOrdersCount(req: any, res: any){
        try {
            const {ordersCount, id} = req.body
            const user = await User.update(
                {ordersCount: ordersCount},
                {where: {id}}
            )
            return res.json(user)
        }catch (e){
            console.log(e)
        }
    }
    async deleteAccount(req: any, res: any, next: any) {
        try{
            const {id} = req.body
            let account = User.destroy({
                where: {id}
            })
            return res.json('Аккаунт был удален')
        }catch (e){
            next(ApiErrors)
        }
    }
}
module.exports = new UserController()