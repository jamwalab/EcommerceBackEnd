// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products and Category association
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Products and Tags associations (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

// ProductTag and Product associations 

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id'
});

Product.hasMany(ProductTag, {
  foreignKey: 'product_id'
})

// ProductTag and Tags associations

ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id'
});

Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
