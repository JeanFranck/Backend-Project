const express = require('express');
const router = express.Router();

router.get('/my-account', (req, res) => {
  console.log('Renderizando página de Mi Cuenta');
  res.render('my-account', { title: 'Mi Cuenta' });
});

router.get('/order-tracking', (req, res) => {
  console.log('Renderizando página de Seguimiento de Pedido');
  res.render('order-tracking', { title: 'Seguimiento de Pedido' });
});

router.get('/checkout', (req, res) => {
  console.log('Renderizando página de Checkout');
  res.render('checkout', { title: 'Checkout' });
});

router.get('/admin-dashboard', (req, res) => {
  console.log('Renderizando página de Dashboard Admin');
  res.render('admin-dashboard-enhanced', { title: 'Dashboard Admin' });
});

module.exports = router;