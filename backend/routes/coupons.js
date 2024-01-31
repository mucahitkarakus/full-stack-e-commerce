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



module.exports = router;