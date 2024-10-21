const express = require('express');
const router = express.Router();

router.get('/index', (req, res) => {
    res.render('index', { title: 'Inicio' });
});

router.get('/about', (req, res) => {
    res.render('about', { title: 'Sobre Nosotros' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contacto' });
});

router.get('/faqs', (req, res) => {
    res.render('faqs', { title: 'Preguntas Frecuentes' });
});

module.exports = router;