const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Yeni Kategori Ekleme (Create)

router.post('/', async (req, res) => {
    try {
        const { name, img } = req.body

        const newCategory = new Category({
            name,
            img
        })
        await newCategory.save()
        res.status(201).send(newCategory)
        
    } catch (error) {
        console.log(error)
    }
});


// Tümü Kategoriler (Read)
router.get('/', async (req, res) => {
    res.send('Kaytegoriler Getirildi');
});


module.exports = router;