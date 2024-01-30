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
    try {
        const categories = await Category.find()
        res.status(201).json(categories)

        

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
});


module.exports = router;