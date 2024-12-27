const Sequalize = require('sequelize');
const sequelize = require("../utils/database.js");

const Player = sequelize.define("player",{
    id:{
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequalize.STRING,
        allowNull: false
    },
    age:{
        type: Sequalize.INTEGER,
        allowNull: false
    },
    photourl:{
        type: Sequalize.STRING,
        allowNull: true
    },
    birthplace:{
        type: Sequalize.STRING,
        allowNull: true
    },
    numberofmatches:{
        type: Sequalize.INTEGER,
        allowNull: true
    },
    career:{
        type: Sequalize.STRING,
        allowNull: true
    },
    score:{
        type: Sequalize.INTEGER,
        allowNull: true
    },
    fifties:{
        type: Sequalize.INTEGER,
        allowNull: true
    },
    centuries:{
        type: Sequalize.INTEGER,
        allowNull: true
    },
    wickets:{
        type: Sequalize.INTEGER,
        allowNull: true
    },
    average:{
        type: Sequalize.FLOAT,
        allowNull: true
    }
})

module.exports = Player;