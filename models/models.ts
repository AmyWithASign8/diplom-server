import sequelize from '../db'
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email:{type: DataTypes.STRING, unique:true, allowNull:false},
    password:{type: DataTypes.STRING, allowNull:false},
    ordersCount:{type: DataTypes.INTEGER, allowNull:false, defaultValue: 0},
    totalSpent:{type: DataTypes.INTEGER, allowNull:false, defaultValue: 0},
    role:{type: DataTypes.STRING, defaultValue: 'USER'},
})
const Basket = sequelize.define('basket', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
const BasketProduct = sequelize.define('basket-product', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING, allowNull:false},
    description:{type: DataTypes.STRING, allowNull: true},
    size:{type: DataTypes.INTEGER, allowNull: true},
    paste:{type: DataTypes.STRING, allowNull: true},
    price:{type: DataTypes.DOUBLE, allowNull:false, defaultValue: 0},
})
const Product = sequelize.define('product', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING, unique: true, allowNull:false},
    description:{type: DataTypes.STRING, allowNull: true},
    price:{type: DataTypes.INTEGER, allowNull:false, defaultValue: 0},
    additional:{type: DataTypes.STRING, allowNull: true},
    image:{type: DataTypes.STRING, allowNull:false}
})
const Type = sequelize.define('type', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, allowNull:false},
})
const Brand = sequelize.define('brand', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, allowNull:false},
})
const Review = sequelize.define('review', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING, allowNull:false},
    description:{type: DataTypes.TEXT, allowNull: true},
    rating: {type: DataTypes.DOUBLE, allowNull:false},
    status: {type: DataTypes.STRING, allowNull: false, defaultValue: 'waiting'}
})
const Orders = sequelize.define('orders', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.DOUBLE, allowNull:false},
    status: {type: DataTypes.STRING, allowNull: false, defaultValue: 'waiting'}
})
const OrderProduct = sequelize.define('orderProduct', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING, allowNull:false},
    description:{type: DataTypes.STRING, allowNull: true},
    size:{type: DataTypes.INTEGER, allowNull: true},
    paste:{type: DataTypes.STRING, allowNull: true},
    price:{type: DataTypes.DOUBLE, allowNull:false, defaultValue: 0},
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Orders.hasMany(OrderProduct)
OrderProduct.belongsTo(Orders)

User.hasMany(Review)
Review.belongsTo(User)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

Product.hasMany(OrderProduct)
OrderProduct.belongsTo(Product)

Type.hasMany(Product)
Product.belongsTo(Type)

Brand.hasMany(Product)
Product.belongsTo(Brand)

Brand.hasMany(Type)
Type.belongsTo(Brand)

User.hasMany(Orders)
Orders.belongsTo(User)


module.exports = {
    User,
    Product,
    Basket,
    Review,
    BasketProduct,
    OrderProduct,
    Type,
    Orders,
    Brand
}