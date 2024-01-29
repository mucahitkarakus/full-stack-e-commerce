const express = require('express');
const router = express.Router();

// Tümü Kategoriler (Read)
router.get('/', async (req, res) => {
    res.send('Kaytegoriler Getirildi');
});

module.exports = router;