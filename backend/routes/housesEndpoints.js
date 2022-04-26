const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const House = require('../models/propertiesModel');

// @desc Fetch all houses
// @route GET /api/houses
// @access Public
router.get('/', asyncHandler(async (req, res) => {
    const houses = await House.find({})

    res.json(houses)
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const house = await House.findById(req.params.id)

    if (house) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found!')
    }

}))

module.exports = router;