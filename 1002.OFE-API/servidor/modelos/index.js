var Sequelize = require('sequelize');

var sequelize = new Sequelize("","","",{
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

var db = {};

db.User = sequelize.define("User",{
    UserId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    FirstName:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    LastName:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Age:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = db;