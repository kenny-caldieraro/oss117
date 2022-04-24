const { DataTypes, Model } = require("sequelize");

const sequelize = require("../sequelize");

class Quotes extends Model {}

Quotes.init(
  {
    content: DataTypes.TEXT,
    author: DataTypes.TEXT,
    film: DataTypes.TEXT,
  },
  {
    sequelize,
    tableName: "quotes",
  },
);

module.exports = Quotes;
