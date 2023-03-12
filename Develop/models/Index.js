//------------Imports Models:
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//------------Products 'BelongsTo' Category:
Product.belongsTo(Category, { 
  foreignKey: 'category_id',
});

//------------Categories have "Many" Products:
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

//------------Products belongToMany Tags done through ProductTag and using ForeignKey ProductID:
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

//------------Tag belongToMany done through ProductTag and using ForeignKey TagID:
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

//----------Exporting and referencing all 4x model files:
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};