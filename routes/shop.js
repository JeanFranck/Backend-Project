const express = require('express');
const router = express.Router();

router.get('/shop', (req, res) => {
  console.log('Renderizando página de Tienda');
  res.render('shop', { title: 'Tienda' });
});

router.get('/single-product', (req, res) => {
  console.log('Renderizando página de Producto Individual');
  res.render('single-product', { title: 'Producto Individual' });
});

router.get('/wishlist', (req, res) => {
  console.log('Renderizando página de Lista de Deseos');
  res.render('wishlist', { title: 'Lista de Deseos' });
});

router.get('/cart', (req, res) => {
  console.log('Renderizando página de Carrito');
  res.render('cart', { title: 'Carrito' });
});

module.exports = router;