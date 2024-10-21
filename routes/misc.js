const express = require('express');
const router = express.Router();

router.get('/blog', (req, res) => {
  console.log('Renderizando página de Blog');
  res.render('blog', { title: 'Blog' });
});

router.get('/single-post', (req, res) => {
  console.log('Renderizando página de Post Individual');
  res.render('single-post', { title: 'Post Individual' });
});

router.get('/coming-soon', (req, res) => {
  console.log('Renderizando página de Próximamente');
  res.render('coming-soon', { title: 'Próximamente' });
});

router.get('/error', (req, res) => {
  console.log('Renderizando página de Error');
  res.render('error-page', { title: 'Error' });
});

module.exports = router;