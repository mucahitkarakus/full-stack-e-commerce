const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Yeni Ürün Ekleme (Create)
router.post('/', async (req, res) => {
    try {
        const newProduct = new Product(req.body)
        await newProduct.save()
        res.status(201).json(newProduct)
    } catch (error) {
        console.log(error)
    }
});


// Tümü Ürünler (Read)
router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.status(201).json(products)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
});

// Tek Ürün (Single)
router.get('/:productId', async (req, res) => {
    try {
        const productId = req.params.productId
        try {
            const product = await Product.findById(productId)
            res.status(200).json(product)
        } catch (error) {
            console.log(error)
            res.status(404).json({ error: 'Category Not found' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
});

// Ürün Güncelleme (Update)

router.put('/:productId', async (req, res) => {
    try {
        const productId = req.params.productId
        const updates = req.body

        const existingProduct = await Product.findById(productId)

        if (!existingProduct) return res.status(404).json({ error: 'Product Not Found' })

        const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true })
        res.status(200).json(updatedProduct)

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
})

// Kategori Silme (Delete)

router.delete('/:productId', async (req, res) => {
    try {
        const productId = req.params.productId

        const deletedProduct = await Product.findByIdAndDelete(productId)

        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product Not Found' })
        }
        res.status(200).json(deletedProduct)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
})



module.exports = router;