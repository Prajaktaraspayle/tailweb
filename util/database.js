const Sequelize = require("sequelize")

const sequelize = new Sequelize("tailwebsdb", "root", "Test@123", {
    dialect : "mysql",
    host : "localhost"
});

module.exports = sequelize;