const express = require('express');
const router = express.Router();
const Coupon = require('../models/Coupon');

// Yeni Kupon Ekleme (Create)
router.post('/', async (req, res) => {
    try {
        const newCoupon = new Coupon(req.body)
        await newCoupon.save()
        res.status(201).json(newCoupon)
    } catch (error) {
        console.log(error)
    }
});


// Tümü Kuponlar (Read)
router.get('/', async (req, res) => {
    try {
        const coupons = await Coupon.find()
        res.status(201).json(coupons)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
});

// Tek Kuponlar (Single)
router.get('/:couponId', async (req, res) => {
    try {
        const couponId = req.params.couponId
        try {
            const coupon = await Coupon.findById(couponId)
            res.status(200).json(coupon)
        } catch (error) {
            console.log(error)
            res.status(404).json({ error: 'Category Not found' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
});

// Kupon Güncelleme (Update)

router.put('/:couponId', async (req, res) => {
    try {
        const couponId = req.params.couponId
        const updates = req.body

        const existingCoupon = await Coupon.findById(couponId)

        if (!existingCoupon) return res.status(404).json({ error: 'Coupon Not Found' })

        const updatedCoupon = await Coupon.findByIdAndUpdate(couponId, updates, { new: true })
        res.status(200).json(updatedCoupon)

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
})

// Kupon Silme (Delete)

router.delete('/:couponId', async (req, res) => {
    try {
        const couponId = req.params.couponId

        const deletedCoupon = await Coupon.findByIdAndDelete(couponId)

        if (!deletedCoupon) {
            return res.status(404).json({ error: 'Coupon Not Found' })
        }
        res.status(200).json(deletedCoupon)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
})


module.exports = router;