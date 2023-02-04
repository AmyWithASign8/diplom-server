import sequelize from '../db'
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email:{type: DataTypes.STRING, unique:true, allowNull:false},
    password:{type: DataTypes.STRING, allowNull:false},
    role:{type: DataTypes.STRING, defaultValue: 'USER'},
})
const Basket = sequelize.define('basket', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId:{type: DataTypes.INTEGER}
})
const Product = sequelize.define('product', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING, allowNull:false},
    description:{type: DataTypes.STRING},
    price:{type: DataTypes.DOUBLE, allowNull:false, defaultValue: 0},
    image:{type: DataTypes.STRING, allowNull:false}
})
const PizzaType = sequelize.define('pizzatype', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING, allowNull:false},
    productId:{type: DataTypes.INTEGER, allowNull:false}
})
const BasketProduct = sequelize.define('basketproduct', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    basketId:{type: DataTypes.INTEGER, allowNull:false},
    productId:{type: DataTypes.INTEGER, allowNull:false},
})
const Comments = sequelize.define('comments', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId:{type: DataTypes.INTEGER, allowNull:false},
})
const Orders = sequelize.define('orders', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId:{type: DataTypes.INTEGER, allowNull:false},
    title: {type: DataTypes.STRING, allowNull:false},
    price: {type: DataTypes.DOUBLE, allowNull:false},
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Product.hasOne(PizzaType)
PizzaType.belongsTo(Product)

User.hasMany(Comments)
Comments.belongsTo(User)

Product.hasOne(BasketProduct)
BasketProduct.belongsTo(Product)

User.hasMany(Orders)
Orders.belongsTo(User)

module.exports = {
    User,
    Product,
    Basket,
    Comments,
    BasketProduct,
    PizzaType,
    Orders
}