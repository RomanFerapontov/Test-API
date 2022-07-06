const Sequilize = require("sequelize");

module.exports = function (sequilize) {
  return sequilize.define(
    "users",
    {
      id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        unique: true,
        validate: {
          noUpdate: true,
        },
        primaryKey: true,
        allowNull: false,
      },
      first_name: {
        type: Sequilize.STRING,
        allowNull: false,
        validate: {
          is: /^[a-z]+$/i,
          notEmpty: true,
        },
      },
      last_name: {
        type: Sequilize.STRING,
        validate: {
          is: /^[a-z]+$/i,
          notEmpty: true,
        },
      },
      email: {
        type: Sequilize.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
          notEmpty: true,
        },
      },
      password: {
        type: Sequilize.STRING,
        validate: {
          notEmpty: true,
        },
        unique: true,
        allowNull: false,
      },
      sex: {
        type: Sequilize.STRING,
        validate: {
          is: /^[a-z]+$/i,
        },
      },
      photo: {
        type: Sequilize.STRING,
        defaultValue: null,
      },
      date: {
        type: Sequilize.DATE,
        allowNull: false,
        defaultValue: Sequilize.NOW,
      },
    },
    { timestamps: false }
  );
};
