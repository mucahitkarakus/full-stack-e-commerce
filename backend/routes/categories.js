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

// Tek Kategori (Single)
router.get('/:categoryId', async (req, res) => {
    try {
        const categoryId = req.params.categoryId
        try {
            const category = await Category.findById(categoryId)
            res.status(200).json(category)
        } catch (error) {
            console.log(error)
            res.status(404).json({ error: 'Category Not found' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
});

// Kategori Güncelleme (Update)

router.put('/:categoryId', async (req, res) => {
    try {
        const categoryId = req.params.categoryId
        const updates = req.body

        const existingCategory = await Category.findById(categoryId)

        if (!existingCategory) return res.status(404).json({ error: 'Category Not Found' })

        const updatedCategory = await Category.findByIdAndUpdate(categoryId, updates, { new: true })
        res.status(200).json(updatedCategory)

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
})

// Kategori Silme (Delete)

router.delete('/:categoryId', async (req, res) => {
    try {
        const categoryId = req.params.categoryId

        const deletedCategory = await Category.findByIdAndDelete(categoryId)

        if (!deletedCategory) {
            return res.status(404).json({ error: 'Category Not Found' })
        }
        res.status(200).json(deletedCategory)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
})



module.exports = router;