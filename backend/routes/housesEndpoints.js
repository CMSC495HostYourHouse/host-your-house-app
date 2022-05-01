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
router.get('/search/:searchType/:param1/:param2/', asyncHandler(async (req, res) => {
    const search = req.params.searchType;
    let house = ''
    // const house = await House.find({price: {$gte:req.params.item1, $lte: req.params.item2}})
    if(search == 0){
        house = await searchPrice(req.params.param2)
    }
    if(search == 1){
        house = await searchCity(req.params.param1)
    }
    if(search == 2){
        house = await searchRating(req.params.param2)
    }
    if(search == 3){
        house = await House.find({})
    }
    if (house) {
        res.json(house)
    } else {
        res.status(404)
        throw new Error('Product not found!')
    }
}))

// helper functions to search properties
const searchPrice = async(item) =>{
    let pricevar = item - 100;
    const house = await House.find({price: {$gte:pricevar, $lte:item }})
    console.log(pricevar + " to " + item)
    return house;
}

const searchCity = async(item) =>{
    const house = await House.find({city: item})
    return house;
}

const searchRating = async(item) =>{
    let ratevar = item - 1;
    const house = await House.find({rating: {$gte:ratevar, $lte:item}})
    return house;
}

// // search properties
// router.get('/search/:searchType/:param1/:param2/:param3', asyncHandler(async (req, res) => {
//     const search = req.params.searchType;
    
//     // const house = await House.find({price: {$gte:req.params.item1, $lte: req.params.item2}})
//     const house = await House.find({city: req.params.param1}, {price: {$gte:req.params.param1[0], $lte:req.params.param1[1]}}, {rating: {$gte:req.params.param1[0], $lte:req.params.param1[1]}})

//     if (house) {
//         res.json(house)
//     } else {
//         res.status(404)
//         throw new Error('Product not found!')
//     }
// }))

module.exports = router;