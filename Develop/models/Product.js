//----------Applications and Files to Run/Connect with:
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Product extends Model {}

Product.init(
  {
    // ID Incluides; Integer, Doesn't allow null values, Set as primary key, Uses auto increment.
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // product_name Includes; String, Doesn't allow null values.
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // price Includes; Decimal, Doesn't allow null values, Validates that the value is a decimal.
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    // stock Includes;: Integer, Doesn't allow null values, Set a default value of `10`, Validates that the value is numeric.
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    // category_id Includes; Integer, References the `Category` model's `id`.
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);
//----------Exporting "Product.js":
module.exports = Product;

//----------REQUIREMENTS:
// * `Product`
//   * `id`
//     * Integer.
//     * Doesn't allow null values.
//     * Set as primary key.
//     * Uses auto increment.
//   * `product_name`
//     * String.
//     * Doesn't allow null values.
//   * `price`
//     * Decimal.
//     * Doesn't allow null values.
//     * Validates that the value is a decimal.
//   * `stock`
//     * Integer.
//     * Doesn't allow null values.
//     * Set a default value of `10`.
//     * Validates that the value is numeric.
//   * `category_id`
//     * Integer.
//     * References the `Category` model's `id`.