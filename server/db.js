const { Sequelize, Model, DataTypes } = require("sequelize");
const storage = './db/kosan.sqlite'

// Database Connection
const sequelize = new Sequelize('kosan', null, null, {
    dialect: 'sqlite',
    logging: false,
    storage: storage,
    define: {
        timestamps: true,
        underscored: true,
        freezeTableName: true
    }
})

const renter = require('./models/renter')({ sequelize, Model, DataTypes })

module.exports = {
    sequelize: sequelize,
    Renter: renter
}