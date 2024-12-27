const Sequalize = require('sequelize');

const sequelize = new Sequalize('appointment',"root","k.b123@45",{
    host: "localhost",
    dialect: "mysql"
})


module.exports = sequelize;