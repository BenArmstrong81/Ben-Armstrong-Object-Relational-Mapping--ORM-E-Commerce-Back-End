//----------Applications and Files to Run/Connect with:
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    //----------ID includes; Integer, Doesn't allow null values.
//     * Set as primary key, Uses auto increment.
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //----------category_name includes; String, Doesn't allow null values.
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);
//----------Exporting "category.js":
module.exports = Category;

//----------REQUIREMENTS:
// * `Category`
//   * `id`
//     * Integer.
//     * Doesn't allow null values.
//     * Set as primary key.
//     * Uses auto increment.
//   * `category_name`
//     * String.
//     * Doesn't allow null values.