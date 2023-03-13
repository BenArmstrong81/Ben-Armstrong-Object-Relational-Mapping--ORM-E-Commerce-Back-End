//----------Applications and Files to Run/Connect with:
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Tag extends Model {}

Tag.init(
  {
    //----------ID includes; Integer, Doesn't allow null values, Set as primary key, Uses auto increment:
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //----------Tag_Name = String:
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);
//----------Exporting "Tag.js":
module.exports = Tag;

//----------REQUIREMENTS:
// * `Tag`
//   * `id`
//     * Integer.
//     * Doesn't allow null values.  
//     * Set as primary key.
//     * Uses auto increment.
//   * `tag_name`
//     * String.