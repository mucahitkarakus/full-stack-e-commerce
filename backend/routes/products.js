const express = require('express');
const router = express.Router();

// Tümü Ürünler (Read)
router.get('/', async (req, res) => {
    res.send('Ürünler Getirildi');
});

module.exports = router;