const express = require('express');
const router = express.Router();
const Coupon = require('../models/Coupons');

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



module.exports = router;