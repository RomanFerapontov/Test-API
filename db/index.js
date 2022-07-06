const Sequilize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequilize("users", "root", process.env.DB_PASSWORD, {
  dialect: "mysql",
  host: process.env.HOST,
  logging: false,
  timezone: "+03:00",
});

try {
  sequelize.authenticate();
  console.log("Database connected sucsessfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const User = require("../models/User.js")(sequelize);

module.exports = {
  sequelize: sequelize,
  User: User,
};
