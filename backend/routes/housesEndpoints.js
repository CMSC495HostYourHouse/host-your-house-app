const { ContactlessOutlined } = require('@mui/icons-material');
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const databaseConnection = require("../conn"); // This will help us connect to the database
const House = require('../models/propertiesModel');
const ObjectId = require("mongodb").ObjectId; // This help convert the id from string to ObjectId for the _id.


// @desc Fetch all houses
// @route GET /api/houses
// @access Public
router.get('/', asyncHandler(async (req, res) => {
    const houses = await House.find({})

    res.json(houses)
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const house = await House.findById({_id: ObjectId(req.params.id)})
    if (house) {
        res.json(house)
    } else {
        res.status(404)
        throw new Error('Product not found!')
    }
}))

// search properties
router.get('/search/:searchType/:item1/:item2', asyncHandler(async (req, res) => {
    const search = req.params.searchType;
    let house = ''
    // const house = await House.find({price: {$gte:req.params.item1, $lte: req.params.item2}})
    if(search == 0){
        house = await searchPrice(req.params.item1, req.params.item2)
    }
    if(search == 1){
        house = await searchCity(req.params.item1)
    }
    if(search == 2){
        house = await searchRating(req.params.item1)
    }
    if(search == 3){
        house = await House.find({})
    }
    
    console.log(house)
    if (house) {
        res.json(house)
    } else {
        res.status(404)
        throw new Error('Product not found!')
    }
}))

// helper functions to search properties
const searchPrice = async(item1, item2) =>{
    const house = await House.find({price: {$gte:item1, $lte:item2}})
    return house;
}

const searchCity = async(item1) =>{
    const house = await House.find({city: item1})
    return house;
}

const searchRating = async(item1) =>{
    const house = await House.find({rating: item1})
    return house;
}

module.exports = router;