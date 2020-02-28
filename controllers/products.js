const Product = require('../models/product');

exports.productNew = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
}

exports.productCreate = (req, res, next) => {
  new Product(req.body.title).save();
  res.redirect('/');
}

exports.productsIndex = (req, res, next) => {
  res.render('shop', {
    prods: Product.all(),
    pageTitle: 'Shop',
    path: '/',
    hasProducts: Product.all() > 0,
    activeShop: true,
    productCSS: true
  });
}