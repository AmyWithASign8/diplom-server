import sequelize from './db'
require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 5000
const models = require('./models/models')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
//Обработка ошибок, последний Middleware


const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

    }catch (e){
        console.log(e)
    }

}
start()
