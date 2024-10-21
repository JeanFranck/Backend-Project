const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar el motor de plantillas Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware de registro HTTP
app.use(morgan('dev'));

// Middleware para archivos estáticos desde /public
app.use(express.static(path.join(__dirname, 'public')));

// Rutas para todas las vistas Pug

app.get('/', (req, res) => res.render('index', { title: 'Inicio' }));
app.get('/about', (req, res) => res.render('about', { title: 'Sobre Nosotros' }));
app.get('/admin-dashboard', (req, res) => res.render('admin-dashboard-enhanced', { title: 'Dashboard Admin' }));
app.get('/blog', (req, res) => res.render('blog', { title: 'Blog' }));
app.get('/cart', (req, res) => res.render('cart', { title: 'Carrito' }));
app.get('/checkout', (req, res) => res.render('checkout', { title: 'Checkout' }));
app.get('/coming-soon', (req, res) => res.render('coming-soon', { title: 'Próximamente' }));
app.get('/contact', (req, res) => res.render('contact', { title: 'Contacto' }));
app.get('/error', (req, res) => res.render('error-page', { title: 'Error' }));
app.get('/faqs', (req, res) => res.render('faqs', { title: 'Preguntas Frecuentes' }));
app.get('/my-account', (req, res) => res.render('my-account', { title: 'Mi Cuenta' }));
app.get('/order-tracking', (req, res) => res.render('order-tracking', { title: 'Seguimiento de Pedido' }));
app.get('/shop', (req, res) => res.render('shop', { title: 'Tienda' }));
app.get('/single-post', (req, res) => res.render('single-post', { title: 'Post Individual' }));
app.get('/single-product', (req, res) => res.render('single-product', { title: 'Producto Individual' }));
app.get('/wishlist', (req, res) => res.render('wishlist', { title: 'Lista de Deseos' }));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
