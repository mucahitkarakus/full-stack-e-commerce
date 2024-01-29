const express = require('express');
const router = express.Router();

// Diğer Route Dosyalarını İçe Aktarma
const productRoute = require('./products');
const categoryRoute = require('./categories');

// Her Route İlgili Yol Altında Kuşllanıyoruz

router.use('/categories', categoryRoute)
router.use('/products', productRoute)

module.exports = router;