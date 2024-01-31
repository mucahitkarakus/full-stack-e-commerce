const express = require('express');
const router = express.Router();

// Diğer Route Dosyalarını İçe Aktarma
const productRoute = require('./products');
const categoryRoute = require('./categories');
const userRoute = require('./auth');
const couponsRoute = require('./coupons');

// Her Route İlgili Yol Altında Kuşllanıyoruz
router.use('/categories', categoryRoute)
router.use('/auth', userRoute)
router.use('/products', productRoute)
router.use('/coupons', couponsRoute)

module.exports = router;