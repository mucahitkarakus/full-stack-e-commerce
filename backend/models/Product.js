const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    }
},
    {
        timestamps: true,
    }
);

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: [{
        type: String,
        required: true,
    }],
    reviews: [ReviewSchema],
    description: {
        type: String,
        required: true,
    },
    color: [{
        type: String,
        required: true,
    }],
    size: [{
        type: String,
        required: true,
    }],
    price: {
        current: {
            type: Number,
            required: true,
        },
        discount: {
            type: Number,
            required: true,
        }
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category',
    },
},
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', ProductSchema);


module.exports = Product;